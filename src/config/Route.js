import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import Blogs from "../pages/Blogs"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>

    )
}

export default AppRouter