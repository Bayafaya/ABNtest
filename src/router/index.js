import Home from "../pages/Home";
import Login from "../pages/Login";

export const publicRoutes = [
    {path:"/login", component: Login},
]
export const privatRoutes = [
    {path:"/home", component: Home},
]