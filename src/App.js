// import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './pages/Root'
import JoinLayout from "pages/Join/JoinLayout";
import MainLayout from "pages/mainLayout/MainLayout";
import Login from "pages/Login/Login";
import NewLayout from "pages/New/NewLayout";
import Guide from "components/Guide";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {index: true, element: <MainLayout/>},
            {path: '/join', element:<JoinLayout/>},
            {path: '/guide', element:<Guide/>},
            {path: '/login', element:<Login/>},
            {path: '/login', element:<Login/>},
            {path: '/new', element:<NewLayout/>},
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App