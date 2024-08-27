import { useState } from "react";
import { useLogin } from "../../queries/AuthQuery";

export default function Login() {
    const login = useLogin();
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('Asdf1234');
    function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login.mutate({ email, password });
    }

    return (
        <div id="form">
            <div className="container">
                <h1>ログイン</h1>
                <form onSubmit={handleLogin}>
                    <div className="input_area">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">パスワード</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <a href="#">パスワードを忘れた方はこちら</a>
                    <button>サインイン</button>
                </form>
                <p>アカウントをお持ちではないですか？<a href="/register" className="redirect_link">アカウント登録</a></p>
            </div>
        </div>
    )
}
