import React from "react";
import { Layout } from "antd";

import { ResponsiveNav } from "../component/Aside/Aside";
import { BudgetForm } from "../component/BudgetForm/BudgetForm";
import { Footer } from "../component/Footer/FooterComponent";
import { WhatsAppButton } from "../component/Whatsapp/WhatsappButton";
import { BannerComponent } from "../component/Banner/Banner";

export const BudgetPage: React.FC = () => {
  return (
    <Layout style={{ maxHeight: "100vh" }}>
      <ResponsiveNav />
      <Layout.Content style={{overflow: 'auto', backgroundColor: "#1e1e1e ", padding: 20 }}>
        <BannerComponent title="Orçamentos"/>
        <BudgetForm />
        <WhatsAppButton />
        <Footer />
      </Layout.Content>
    </Layout>
  );
};
