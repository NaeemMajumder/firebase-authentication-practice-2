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
