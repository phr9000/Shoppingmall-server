import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './pages/Root'
import JoinLayout from "pages/Join/JoinLayout";
import MainLayout from "pages/Main/MainCarousel";
import Login from "pages/Login/LoginLayout";
import NewLayout from "pages/New/NewLayout";
import Guide from "components/Guide";
import { ConfigProvider } from "antd";


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

export default App