import { createBrowserRouter } from "react-router-dom";

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
                path: 'detail',
                element: <Detail />,
            },
            {
                path: 'search',
                element: <SearchResult />,
            },
            {
                path: 'error',
                element: <Error />,
            },
        ],
    },
])


export default router;