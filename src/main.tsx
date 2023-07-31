import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Space.tsx'
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/space",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />
  },
], {
  basename: "/btsui3.github.io/",
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
