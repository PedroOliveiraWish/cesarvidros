import React from "react";
import { ResponsiveNav } from "../component/Aside/Aside";
import { MenuCategoria } from "../component/MenuProjects/MenuProjects";
import { WhatsAppButton } from "../component/Whatsapp/WhatsappButton";
import { BannerComponent } from "../component/Banner/Banner";
import { Footer } from "../component/Footer/FooterComponent";
import { Layout } from "antd";

export const ProjectsPage: React.FC = () => {
  const style = {
    overflow: "auto",
    padding: "20px",
    backgroundColor: "#1e1e1e ",
  };

  return (
    <Layout style={{ maxHeight: "100vh" }}>

      <ResponsiveNav />
      <Layout.Content style={style} className="content-">
        <BannerComponent title="Projetos"/>
        <MenuCategoria />
        <WhatsAppButton />
        <Footer />
      </Layout.Content>
    </Layout>
  );
};
