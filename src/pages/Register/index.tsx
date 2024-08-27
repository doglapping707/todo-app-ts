import { useState } from "react";
import { useRegister, useLogin } from "../../queries/AuthQuery";

export default function Register() {
    const register = useRegister();
    const login = useLogin();
    const [name, setName] = useState('sato');
    const [email, setEmail] = useState('sato@example.com');
    const [password, setPassword] = useState('Asdf1234');
    function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        register.mutate({ name, email, password }, {
            onSuccess: () => {
                login.mutate({ email, password });
            }
        });
    }

    return (
        <div id="form">
            <div className="container">
                <h1>アカウント登録</h1>
                <form onSubmit={handleRegister}>
                    <div className="input_area">
                        <label htmlFor="">ユーザー名</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input_area">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">パスワード</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button>サインアップ</button>
                </form>
                <p>アカウントをお持ちですか？<a href="/login" className="redirect_link">ログイン</a></p>
            </div>
        </div>
    )
}
