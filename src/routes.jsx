import { AuthPage } from "./pages/auth/AuthPage.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import { AccountPage } from "./pages/account/AccountPage.jsx";
import { Navigate } from "react-router";

const routes = [
    { path: '/', element: <HomePage /> },
    {path: '/auth', element: <AuthPage/>},
    { path: '*', element: <Navigate to="/" /> },
    {path: '/account', element: <AccountPage/>}
]


export default routes;