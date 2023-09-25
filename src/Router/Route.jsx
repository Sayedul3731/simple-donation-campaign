import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CardDetails from "../components/CardDetails/CardDetails";
import Donation from "../Pages/Donation/Donation";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;