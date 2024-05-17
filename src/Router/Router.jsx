import {
    createBrowserRouter,
} from "react-router-dom";

import Error from "../Error/Error";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookingService from "../Pages/BookingService/BookingService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/bookingService/:id',
                element: <PrivateRoute> <BookingService /></PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><Bookings /></PrivateRoute>,
            },
        ]
    },
]);

export default router;