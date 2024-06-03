import { AuthPage } from "./pages/auth/AuthPage.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import { Navigate } from "react-router";

const routes = [
    { path: '/', element: <HomePage /> },
    {path: '/auth', element: <AuthPage/>},
    { path: '*', element: <Navigate to="/" /> }
]


export default routes;