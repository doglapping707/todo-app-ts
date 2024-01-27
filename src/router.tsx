import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";

function Router() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/help">help</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
            <footer>
                <div className="author-text">
                    <p>Made with ❤️ by <a href="https://github.com/doglapping707" target="_blank"><b>doglapping707</b></a></p>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default Router