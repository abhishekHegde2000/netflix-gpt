import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GPTmain from "./gpt/GPTmain";
import Watch from "./watch/Watch";
import Info from "./info/Info";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gpt",
      element: <GPTmain />,
    },
    {
      path: "/watch/:waid",
      element: <Watch />,
    },
    {
      path: "/info/:infoid",
      element: <Info />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
