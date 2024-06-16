import React,{useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home,About,Blogs,VacuumRange,ContactUs} from './Pages/index.js'
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <>
          <Home />
          <ScrollToTop />
        </>
      },
      {
        path: "/about",
        element: <>
          <About />
          <ScrollToTop />
        </>
      },
      
      {
        path: "/blogs",
        element: <>
          <Blogs />
          <ScrollToTop />
        </>
      },
     
      {
        path: "/contact",
        element: <>
          <ContactUs />
          <ScrollToTop />
        </>
      },
      {
        path: "/vacuums",
        element: <>
          <VacuumRange />
          <ScrollToTop />
        </>
      },
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
