import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Error from './pages/Error'

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
    },
]);

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}
