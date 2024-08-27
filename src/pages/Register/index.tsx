export default function Register() {
    return (
        <div id="form">
            <div className="container">
                <h1>アカウント登録</h1>
                <form action="">
                    <div className="input_area">
                        <label htmlFor="">ユーザー名</label>
                        <input type="text" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">パスワード</label>
                        <input type="password" required />
                    </div>
                    <button>サインアップ</button>
                </form>
                <p>アカウントをお持ちですか？<a href="/login" className="redirect_link">ログイン</a></p>
            </div>
        </div>
    )
}
