import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchResult from "./pages/SearchResult";
import Error from "./pages/Error";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'detail/:id',
                element: <Detail />,
            },
            {
                path: 'search/:keyword',
                element: <SearchResult />,
            },
            {
                path: 'search/',
                element: <Home />,
            },
            {
                path: 'error',
                element: <Error />,
            },
        ],
    },
])

const DeclaredRouter = () => {
    return (
        <RouterProvider router={router} />
    );
}


export default DeclaredRouter;