import React, {lazy} from "react";
import {Routes, Route } from "react-router-dom";
const AboutPage = lazy(() => import("../Page/AboutPage")) ;
const HomePage = lazy(() => import("../Page/HomePage")) ;
const ProjectsPage = lazy(() => import("../Page/ProjectsPage")) ;
const ServicesPage = lazy(() => import("../Page/ServicesPage")) ;

export const UserRoutes = () => {
    return (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user/sobre" element={<AboutPage />} />
            <Route path="/user/servicos" element={<ServicesPage />} />
            <Route path="/user/projetos" element={<ProjectsPage />} />
          </Routes>
    )
}