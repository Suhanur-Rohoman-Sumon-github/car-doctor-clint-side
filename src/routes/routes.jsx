import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login/login/Login";

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
        }
    ]
}])
export default router