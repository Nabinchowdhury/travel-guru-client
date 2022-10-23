import { createBrowserRouter } from "react-router-dom";
import Destination from "../components/Pages/Destination/Destination";
import Home from "../components/Pages/Home/Home";
import Main from "../components/Pages/layout/Main/Main";

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
                path: "/destination/:id",
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/destination/${params.id}`)
                },
                element: <Destination></Destination>,
            },
            {
                path: "/hotels",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <h1>this is about</h1>,
            },
        ]
    }
])

export default routes;