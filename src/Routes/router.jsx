import { createBrowserRouter } from "react-router"
import MyProfile from "../pages/MyProfile"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import Root from "../root/Root"
import Blogs from "../pages/Blogs"
import Home from "../pages/Home"
import Service from "../pages/Service"



const router = createBrowserRouter(

    [
        {
            path:"/",
            Component: Root,
            children: [
                {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/public/winterPetServices.json')
        },
        {
            path:"/service",
            element: <Service></Service>,
            loader: () => fetch('/public/winterPetServices.json')
        },
        {
            path:"/myprofile",
            element: <MyProfile></MyProfile> 
        },
        {
            path:"/blogs",
            element: <Blogs></Blogs>
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
        }
            ]
        }
        

    ]

)

export default router