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
import VlogPage from "./Component/Pages/VlogPage";
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Signup from './Component/LogSign/Signup';
import Login from './Component/LogSign/Login';
import ForgetPassword from './Component/LogSign/ForgetPassword';
import MyProfile from './Component/Pages/UserProfile/MyProfile';
import LikedArtifacts from './Component/Pages/UserProfile/LikedArtifacts';
import MyArtifacts from './Component/Pages/UserProfile/MyArtifacts';
import ArtifactDetails from './Component/Pages/ArtifactDetails';
import { HelmetProvider } from 'react-helmet-async';

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
        path: '/artifactDetails/:id', 
        element: <PrivateRoute>
                    <ArtifactDetails />
                  </PrivateRoute>,
        loader:({params}) => fetch(`https://assignment-11-past-finder-server.vercel.app/celestora/${params.id}`),
      },
      {
        path: "vlogPage", 
        element: <VlogPage /> ,
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
        element:<PrivateRoute>
          <MyProfile/>
        </PrivateRoute>,
      },
      {
        path: "likedArtifacts", 
        element:<PrivateRoute>
          <LikedArtifacts/>
        </PrivateRoute>,
      },
      {
        path: "myArtifacts", 
        element:<PrivateRoute>
          <MyArtifacts/>
        </PrivateRoute>,
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router} />  
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
