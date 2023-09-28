import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import CardDetails from "../components/CardDetails/CardDetails";
import Donation from "../Pages/Donation/Donation";
import Chart from "../Pages/Statistics/PieChart";




const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Chart></Chart>
            },
            {
                path: "/card/:id",
                element: <CardDetails></CardDetails>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default myCreatedRoute;