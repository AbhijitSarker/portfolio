import { createBrowserRouter } from "react-router-dom";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
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
                        path: "about/edu",
                        element: <Education></Education>,
                    },
                    {
                        path: "education",
                        element: <Experience></Experience>,
                    }
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
