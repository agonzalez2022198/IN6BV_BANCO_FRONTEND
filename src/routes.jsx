import { AuthPage } from "./pages/auth/AuthPage.jsx";
import {HomePages} from "./pages/HomePage/HomePage.jsx";
import { AccountPage } from "./pages/account/AccountPage.jsx";
import { Navigate } from "react-router";
import { PrincipalP } from "./pages/Principal/Principal.jsx";

const routes = [
    { path: '/', element: <HomePages /> },
    { path: '/Principal', element: <PrincipalP />}
]


export default routes;