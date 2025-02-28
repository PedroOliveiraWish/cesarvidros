import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingProvider } from "./component/Loading/Loading";
import Layout from "antd/es/layout/layout";

import { AboutPage } from "./Page/AboutPage";
import { LoginSignPage } from "./Page/LoginSignPage";
import { HomePage } from "./Page/HomePage";
import { ServicesPage } from "./Page/ServicesPage";
import { ProjectsPage } from "./Page/ProjectsPage";
import { BudgetPage } from "./Page/BudgetPage";

import "./styles/StyleForAll.css";

function App() {
  return (
    <LoadingProvider>
      <Router>
        <Layout style={{ overflow: "auto"}}>
          <Routes>
            <Route path="/" element={<LoginSignPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/orcamentos" element={<BudgetPage />} />
          </Routes>
        </Layout>
      </Router>
    </LoadingProvider>
  );
}

export default App;
