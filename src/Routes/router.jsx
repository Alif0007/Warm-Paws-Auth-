import { createBrowserRouter } from "react-router"
import MyProfile from "../pages/MyProfile"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Root from "../root/Root"
import Blogs from "../pages/Blogs"
import Home from "../pages/Home"
import Service from "../pages/Service"
import ServiceDetails from "../pages/ServiceDetails"
import ErrorPage from "../pages/error404"
import PrivateRoute from "./privateRoute"



const router = createBrowserRouter(

    [
        {
            path:"/",
            Component: Root,
            children: [
                {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/winterPetServices.json')
        },
        {
            path:"/service",
            element: <Service></Service>,
            loader: () => fetch('/winterPetServices.json')
        },
        {
            path:"/service/:serviceId",
            element: <ServiceDetails></ServiceDetails>,
            loader: () => fetch('/winterPetServices.json')
        },
        {
            path:"/myprofile",
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute> 
        },
        {
            path:"/blogs",
            element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
        },
        {
            path:"/auth",
            children:[
                {
                    path:"/auth/login",
                    element: <LoginPage></LoginPage>
                },
                {
                    path:"/auth/register",
                    element: <RegisterPage></RegisterPage>

                }
            ]
        },
        {
            path:"/*",
            element: <ErrorPage></ErrorPage>
        }
            ]
        }
        

    ]

)

export default router