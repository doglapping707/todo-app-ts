export default function Register() {
    return (
        <div id="form">
            <div className="container">
                <h1>Register</h1>
                <form action="">
                    <div className="input_area">
                        <label htmlFor="">Name</label>
                        <input type="text" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="email">Email</label>
                        <input type="email" required />
                    </div>
                    <div className="input_area">
                        <label htmlFor="password">Password</label>
                        <input type="password" required />
                    </div>
                    <button>Sign up</button>
                </form>
                <p>You do have an account?<a href="#">Login</a></p>
            </div>
        </div>
    )
}
