import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Lggin from "./pages/Login";
import Home from "./pages/Home";
import Help from "./pages/Help";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Lggin />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/help">
                    <Help />
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