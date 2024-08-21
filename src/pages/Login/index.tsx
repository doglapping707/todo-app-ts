// import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import { useLogin } from "../../queries/AuthQuery";

export default function Login() {
    // const login = useLogin();
    // const [email, setEmail] = useState('admin@example.com');
    // const [password, setPassword] = useState('123456789');
    // const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     login.mutate({ email, password });
    // }

    const http = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        withCredentials: true,
        withXSRFToken: true,
    });

    useEffect(() => {
        http.get('sanctum/csrf-cookie');
        http.post('api/login', {
            email: 'admin@example.com',
            password: '123456789',
        }).then(res => {
            console.log(res);
        });
    });

    return (
        <div id="form">
            <div className="container">
                <h1>Login</h1>
                {/* <form onSubmit={handleLogin} action=""> */}
                <form action="">
                    <div className="input_area">
                        <label htmlFor="email">Email</label>
                        {/* <input type="email" value={email} onChange={e => setEmail(e.target.value)} /> */}
                        <input type="email" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">Pawssword</label>
                        {/* <input type="password" value={password} onChange={e => setPassword(e.target.value)} /> */}
                        <input type="password" required />
                    </div>
                    <a href="#">Forgot your password?</a>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?<a href="#" className="redirect_link">Register</a></p>
            </div>
        </div>
    )
}
