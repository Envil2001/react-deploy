
import Card from "./components/Card"
import axios from 'axios';
import { useEffect, useState } from "react";
import styles from './ShopContent.module.css'
import Header from "../Header/Header";
import NotFound from "../NotFound/NotFound";
import { Route, Routes } from "react-router";
import Details from "../Details/Details";
import AppContext from "./context";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";


const ShopContent = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchInput, setUsername] = useState('');


    useEffect(() => {
        async function fetchData() {
          try {
            const [cartResponse, itemsResponse] = await Promise.all([
              axios.get('https://617aac64cb1efe001700ffa7.mockapi.io/items'),
              axios.get('https://617aac64cb1efe001700ffa7.mockapi.io/card'),
            ]);
    
            setCartItems(cartResponse.data);
            setItems(itemsResponse.data);
          } catch (error) {
            alert('Ошибка при запросе данных ;(');
            console.error(error);
          }
        }
    
        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
          const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
          if (findItem) {
            setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
            await axios.delete(`https://617aac64cb1efe001700ffa7.mockapi.io/items/${findItem.id}`);
          } else {
            setCartItems((prev) => [...prev, obj]);
            const { data } = await axios.post('https://617aac64cb1efe001700ffa7.mockapi.io/items', obj);
            setCartItems((prev) =>
              prev.map((item) => {
                if (item.parentId === data.parentId) {
                  return {
                    ...item,
                    id: data.id,
                  };
                }
                return item;
              }),
            );
          }
        } catch (error) {
          alert('Ошибка при добавлении в корзину');
          console.error(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(`https://617aac64cb1efe001700ffa7.mockapi.io/items/${id}`);
            setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
        } catch (error) {
            alert('Ошибка при удалении из корзины');
            console.error(error);
        }
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    const shopPosts = items
    .filter((item) => item.title.toLowerCase().includes(searchInput.toLowerCase())).map((item) => {
        return (
            <Card 
                key={item.id}
                image={item.image}
                title={item.title}
                testimonials={item.testimonials}
                available={item.available}
                cost={item.cost}
                discount={item.discount}
                procentdiscount={item.procentdiscount}
                onAdd={(obj) => onAddToCart(obj)}

                {...item}
            />
        )
    })

        return (
          <AppContext.Provider
            value={{
                items,
                cartItems,
                isItemAdded,
                onAddToCart,
                setCartItems, 
            }}>
            <Header 
            items={cartItems} 
            onRemove={onRemoveItem}
            onSearch={setUsername}
            />
            <div className="container">
            <Routes>
                <Route exact path="/products" element={
                    <div className={styles.grid_contain}>
                        <div className={styles.filters}>
                            <div className={styles.rr}>
                                <h3 className={styles.filters_price__title}>Цена</h3>

                            </div>
                        </div>

                        <div className={styles.products_grid}>
                            {shopPosts.length > 0 ? shopPosts 
                            :             
                            <div className="centerFixed">
                                <div className="contentFix">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                }/>
                <Route path="/products/:id" element={<Details 
                    onAdd={(obj) => onAddToCart(obj)}
                />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />}/>
            </Routes> 
            </div>
          </AppContext.Provider>
        )
    }

export default ShopContent;