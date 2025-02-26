import React from "react";
import { ListCategorias } from "../component/CategoriasList/ListCategorias";
import { Layout } from "antd";
import { ResponsiveNav } from "../component/Aside/Aside";
import { BannerComponent } from "../component/Banner/Banner";
import { Footer } from "../component/Footer/FooterComponent";
import { WhatsAppButton } from "../component/Whatsapp/WhatsappButton";

export const ServicesPage: React.FC = () => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <ResponsiveNav />
      <Layout.Content style={{padding: '20px', overflow: 'auto', backgroundColor: '#1e1e1e'}}>
        <BannerComponent title="Serviços"/>
        <ListCategorias />
        <WhatsAppButton />
        <Footer />
      </Layout.Content>
    </Layout>
  );
};
