import React from "react";
import { Layout } from "antd";

import { ResponsiveNav } from "../component/Aside/Aside";
import { BudgetForm } from "../component/BudgetForm/BudgetForm";

export const BudgetPage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <ResponsiveNav />
      <Layout style={{ backgroundColor: "#1e1e1e ", padding: 20 }}>
        <BudgetForm />
      </Layout>
    </Layout>
  );
};
