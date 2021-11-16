import { useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from "react";
import DetailProduct from "./components/DetailProduct";


const Details = ({onAdd}) => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('https://617aac64cb1efe001700ffa7.mockapi.io/card', id)
        .then(({data}) => setProduct(data[id - 1]));
    }, [id])


    const DetalProd = 
    <DetailProduct 
    key={product.id}
    image={product.image}
    title={product.title}
    testimonials={product.testimonials}
    available={product.available}
    cost={product.cost}
    discount={product.discount}
    procentdiscount={product.procentdiscount}
    onAdd={onAdd}
    {...product}/>





    return (    
        {
            DetalProd                             
        }
    );
}

export default Details;