import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root.jsx"
import Home from "./components/Home.jsx"
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Order from './components/Order.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"login",
        element:<Login />
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"order",
        element:<PrivateRoutes><Order></Order></PrivateRoutes>
      },
      {
        path:"profile",
        element:<PrivateRoutes><Profile /></PrivateRoutes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
