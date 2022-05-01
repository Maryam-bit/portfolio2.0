import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Services from "../pages/Services"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
        </Routes>

    )
}

export default AppRouter