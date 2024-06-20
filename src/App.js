import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Restaurants from "./components/Restaurants";

const AppLayout = () => {
 
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/restaurants/:resId",
        element:<Restaurants/>,

      },
    ],
    errorElement:<Error />
  }
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
0;
root.render(<RouterProvider router={appRouter} />);
