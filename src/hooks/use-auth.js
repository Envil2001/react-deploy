import { useSelector } from "react-redux";


var useAuth = function useAuth() {
    const {email, token, id} = useSelector(state => state.user);

    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}

export default useAuth;