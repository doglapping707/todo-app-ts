import { useState } from "react";
import { useLogin } from "../../queries/AuthQuery";
import { useQueryClient } from "@tanstack/react-query";

export default function Login() {
    const queryClient = useQueryClient();
    queryClient.removeQueries();

    const login = useLogin();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('123456789');
    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login.mutate({ email, password });
    }

    return (
        <div id="form">
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input_area">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">Pawssword</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <a href="#">Forgot your password?</a>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?<a href="#" className="redirect_link">Register</a></p>
            </div>
        </div>
    )
}
