export default function Login() {
    return (
        <div id="form">
            <div className="container">
                <h1>Login</h1>
                <form action="">
                    <div className="input_area">
                        <label htmlFor="email">Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">Pawssword</label>
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
