import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../store/slices/userSlices';
import Form from "../Form.js";


const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth);
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/');
            })
            .catch(console.error)
    }


    return (
        <Form 
            title="Зарегистрироваться"
            handleClick={handleRegister}
            link="/login"
            backLink="Войти"
        />
    );
}

export default Registration;