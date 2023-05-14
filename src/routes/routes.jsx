import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login/login/Login";
import Sinup from "../pages/Login/sinup/Sinup";

const router = createBrowserRouter([{
    path:'/',
    element:<App />,
    children:[
        {
           path:'/',
           element:<Home />
        },
        {
            path:'/login',
            element:<Login />
        },
        {
            path:'/sinup',
            element:<Sinup />
        }
    ]
}])
export default router