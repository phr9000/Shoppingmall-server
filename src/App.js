// import { useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './pages/Root'
import JoinLayout from "pages/Join/JoinLayout";
import MainLayout from "pages/mainLayout/MainLayout";
import Guide from "components/Guide";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {index: true, element: <MainLayout/>},
            {path: '/join', element:<JoinLayout/>},
            {path: '/guide', element:<Guide/>},
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App