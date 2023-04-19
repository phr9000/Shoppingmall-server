import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import JoinLayout from "pages/Join/JoinLayout";
import MainLayout from "pages/Main/MainLayout";
import Login from "pages/Login/LoginLayout";
import NewLayout from "pages/New/NewLayout";
import BeautyLayout from "pages/Beauty/BeautyLayout";
import Guide from "components/Guide";

import { ConfigProvider } from "antd";
import SaleLayout from "pages/Sale/SaleLayout";
import LifeLayout from "pages/Life/LifeLayout";
import DesignerLayout from "pages/Designer/DesignerLayout";
import OriginalLayout from "pages/Original/OriginalLayout";
import PreShowLayout from "pages/PreShow/PreshowLayout";

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
            {path: '/sale', element:<SaleLayout/>},
            { path: "/life", element: <LifeLayout /> },
            { path: "/designer", element: <DesignerLayout /> },
            { path: "/origin", element: <OriginalLayout /> }
            { path: "/preshow", element: <PreShowLayout /> },
            { path: "/beauty", element: <BeautyLayout/> }
        ]
    }
]);

const App: React.FC = () => {
    return <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#000000',
      },
    }}
  >
    <RouterProvider router={router} />
  </ConfigProvider>;
}

export default App;
