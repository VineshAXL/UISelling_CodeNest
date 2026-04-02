import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (data.success) {
            alert("Login Successful");
        } else {
            alert("Login Failed or Invalid");
        }
    };
  return (
    <div>
      <h1>Login Page</h1>
      <input onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
        <input onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
