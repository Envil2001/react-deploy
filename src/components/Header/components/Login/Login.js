import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../../store/slices/userSlices';
import Form from "../Form.js";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate('/')
            })
            .catch(() => alert('ОШИБКА'))
    }

    return (
        <Form 
            title="Войти"
            handleClick={handleLogin}
            link="/register"
            backLink="Зарегистрироваться"
        />
    );
}

export default Login;