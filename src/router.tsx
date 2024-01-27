import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";

function Router() {
    return (
        <BrowserRouter>
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