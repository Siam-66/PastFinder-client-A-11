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
import MyArtifacts from "./Component/Pages/MyArtifacts";
import AboutUs from "./Component/Pages/AboutUs";

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
        element: <AddArtifacts /> ,
      },
      {
        path: "myArtifacts", 
        element: <MyArtifacts /> ,
      },
      {
        path: "aboutUs", 
        element: <AboutUs /> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} />  
</StrictMode>,
)
