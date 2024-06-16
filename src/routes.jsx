import { AuthPage } from "./pages/auth/AuthPage.jsx";
import { HomePages } from "./pages/HomePage/HomePage.jsx";
import { AccountPage } from "./pages/account/AccountPage.jsx";
import { PrincipalP } from "./pages/Principal/Principal.jsx";
import { TransferPage } from "./pages/Transfer/TransferPage.jsx";

const routes = [
    { path: '/', element: <HomePages /> },
    { path: '/Principal', element: <PrincipalP /> },
    { path: '/Transfer', element: <TransferPage /> }
];

export default routes;