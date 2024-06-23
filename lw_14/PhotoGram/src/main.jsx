import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import ErrorPage from "./routes/ErrorPage/ErrorPage";
import GalleryFocus from "./routes/GalleryFocus/GalleryFocus.jsx";
import Likes from "./routes/Likes/Likes.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import PostPage from "./routes/PostPage/PostPage.jsx";
import Profile from "./routes/Profile/Profile.jsx";
import SearchPage from "./routes/SearchPage/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/add",
        element: <App />,
      },
      {
        path: "/popular",
        element: <Likes />,
      },
      {
        path: "/popular/profile/:username",
        element: <Profile />,
      },
      {
        path: "/profile/:username",
        element: <Profile />,
      },
      {
        path: "/post/:id/profile/:username",
        element: <Profile />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/gallery",
        element: <GalleryFocus />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
