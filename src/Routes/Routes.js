import { createBrowserRouter } from "react-router-dom";
import Destination from "../components/Pages/Destination/Destination";
import Home from "../components/Pages/Home/Home";
import Hotels from "../components/Pages/Hotels/Hotels";
import Main from "../components/Pages/layout/Main/Main";
import Login from "../components/Pages/Login/Login";
import Sigup from "../components/Pages/Signup/Sigup";
import UserProfile from "../components/Pages/UserProfile/UserProfile";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <h1>errror</h1>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => {
                    return fetch("http://localhost:5000/destinations")
                }
            },
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => {
                    return fetch("http://localhost:5000/destinations")
                }
            },
            {
                path: "/destination/:id",
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/destination/${params.id}`)
                },
                element: <Destination></Destination>,
            },

            {
                path: "/destination/hotels/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/destination/hotels/${params.id}`),
                element: <Hotels></Hotels>,
            },
            {
                path: "/about",
                element: <h1>this is about</h1>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <Sigup></Sigup>,
            },
            {
                path: "/profile",
                element: <UserProfile></UserProfile>,
            },
        ]
    }
])

export default routes;