import './Login.css';

import React, { useState } from "react";
import useAuth from "../../hooks/auth.hook";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth(); // Get login function from useAuth hook

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(username, password); // Call login with provided username and password
    };

    return (
        <form className="signInBox" onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="signIn" type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
