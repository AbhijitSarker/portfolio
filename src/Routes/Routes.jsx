import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/About/Education/Education";
import Experience from "../Pages/About/Experience/Experience";
import AboutLayout from "../Layout/AboutLayout";


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
                path: "about",
                element: <AboutLayout></AboutLayout>,
                children: [
                    {
                        index: true,
                        element: <About></About>,
                    },
                    {
                        path: "professional",
                        element: <Education></Education>,
                    },
                    {
                        path: "personal",
                        element: <Experience></Experience>,
                    },

                ],
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
