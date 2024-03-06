import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about-me",
                element: <About></About>,
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/contact-me",
                element: <Contact></Contact>
            },

        ]
    },

]);