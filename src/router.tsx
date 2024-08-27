import { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';
import { useAuth } from "./hooks/AuthContext";
import { useUser } from "./queries/AuthQuery";

export default function Router() {
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();
    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);

    function GuardRoute() {
        if (!isAuth) return <Navigate replace to="/login" />
        return <Home />
    }

    function RegisterRoute() {
        if (isAuth) return <Navigate replace to="/" />
        return <Register />
    }

    function LoginRoute() {
        if (isAuth) return <Navigate replace to="/" />
        return <Login />
    }

    if (isLoading) return <span>Loading...</span>

    const router = createBrowserRouter([
        {
            path: "/register",
            element: <RegisterRoute />,
            errorElement: <Error />,
        },
        {
            path: "/login",
            element: <LoginRoute />,
            errorElement: <Error />,
        },
        {
            path: "/",
            element: <GuardRoute />,
            errorElement: <Error />,
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}
