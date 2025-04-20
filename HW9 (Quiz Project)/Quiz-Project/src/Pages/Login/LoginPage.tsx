import { NavLink } from "react-router";
import './Login.css';
import useAuth from '../../hooks/auth.hook';

const LoginPage = () => {
    const { login } = useAuth();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget['username'].value;
        const password = e.currentTarget['password'].value;
        login(username, password);

      }
    return (
        <form className="signInBox" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
            <input type="text" id="username" name="username" placeholder=" user name"/>
            <input type="password" id="password" name="password" placeholder=" password"/>
            <NavLink className="signIn" to={{pathname : "/start-quiz"}}>Sign In</NavLink>
            <p>Don't have account ? <strong><NavLink to={{ pathname: "/signup" }}>Register</NavLink></strong></p>
        </form>
    );
}
export default LoginPage;

