import React from "react";
import { ResponsiveNav } from "../component/Aside/Aside";
import { MenuCategoria } from "../component/MenuProjects/MenuProjects";
import { WhatsAppButton } from "../component/Whatsapp/WhatsappButton";
import { Layout } from "antd";

export const ProjectsPage: React.FC = () => {
  const style = {
    overflow: "auto",
    padding: "20px",
    maxHeight: "100vh",
    backgroundColor: "#1e1e1e ",
  };

  return (
    <Layout
      style={{ minHeight: "100vh", backgroundColor: "#1e1e1e !important" }}
    >
      <ResponsiveNav />
      <Layout.Content style={style} className="content-">
        <MenuCategoria />
        <WhatsAppButton />
      </Layout.Content>
    </Layout>
  );
};
