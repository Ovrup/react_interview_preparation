import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const naviagte = useNavigate();

    function submit(e) {
        e.preventDefault()
        localStorage.setItem("user", username);
        localStorage.setItem("isLoggedin", true);
        setUsername("");
        setPassword("");
        naviagte("/splitwise")
    }
    return (
        <form onSubmit={submit}>
            <label>
                Username: <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Login