import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import ContactMe from "../pages/ContactMe";
import ProjectDetails from "../pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact-me",
        element: <ContactMe />,
      },
      {
        path: "/portfolio/project-details/:projectId",
        element: <ProjectDetails />,
      },
    ],
  },
]);
