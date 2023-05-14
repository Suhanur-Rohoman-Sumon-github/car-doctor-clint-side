import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Login from "../pages/Login/login/Login";
import Sinup from "../pages/Login/sinup/Sinup";
import CheckOuts from "../pages/chexkout/CheckOuts";
import Mybookings from "../pages/bookings/Mybookings";

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
        },
        {
            path:'/checkout/:id',
            element:<CheckOuts />,
            loader:({params}) =>fetch(`http://localhost:5000/servises/${params.id}`)
        },
        {
            path:'/bookings',
            element:<Mybookings />
        }
    ]
}])
export default router