import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Layout/Root';
import ErrorPage from "./Component/Pages/ErrorPage";
import Home from "./Component/Pages/Home";
import AllArtifacts from "./Component/Pages/AllArtifacts";
import AddArtifacts from "./Component/Pages/AddArtifacts";
import AboutUs from "./Component/Pages/AboutUs";
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Signup from './Component/LogSign/Signup';
import Login from './Component/LogSign/Login';
import ForgetPassword from './Component/LogSign/ForgetPassword';
import MyProfile from './Component/Layout/UserProfile/MyProfile';
import LikedArtifacts from './Component/Layout/UserProfile/LikedArtifacts';
import MyArtifacts from './Component/Layout/UserProfile/MyArtifacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/", 
        element: <Home /> ,
      },
      {
        path: "allArtifacts", 
        element: <AllArtifacts /> ,
      },
      {
        path: "addArtifacts", 
        element: <PrivateRoute>
                    <AddArtifacts />
                  </PrivateRoute>,
      },

      {
        path: "aboutUs", 
        element: <AboutUs /> ,
      },
      {
        path: "signup", 
        element:
        <Signup />,
                  
      },
      {
        path: "forgetPassword", 
        element: 
        <ForgetPassword />,
                  
      },
      {
        path: "login", 
        element:<Login/>,
      },
      {
        path: "myProfile", 
        element:
          <MyProfile/>,
      },
      {
        path: "likedArtifacts", 
        element:
          <LikedArtifacts/>,
      },
      {
        path: "myArtifacts", 
        element:
          <MyArtifacts/>,
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />  
    </AuthProvider>
  </StrictMode>,
)
