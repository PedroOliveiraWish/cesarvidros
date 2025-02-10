import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./component/Loading/Loading";
import Layout from "antd/es/layout/layout";

import { AboutPage } from "./Page/AboutPage";
import { HomePage } from "./Page/HomePage";
import { ServicesPage } from "./Page/ServicesPage";
import { ProjectsPage } from "./Page/ProjectsPage";

import "./styles/StyleForAll.css";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <Layout style={{ overflow: "auto", maxHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
          </Routes>
        </Layout>
      </Router>
    </LoadingProvider>
  );
}

export default App;
