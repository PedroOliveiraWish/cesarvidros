import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  AlignLeftOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Drawer, Button } from "antd";
import "../../styles/ResponsiveNav/ResponsiveNav.css"; // Import SCSS file

const { Sider, Header } = Layout;

export const ResponsiveNav: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      if (isNowMobile !== isMobile) {
        setIsMobile(isNowMobile);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const menuItems = (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link to="/">Principal</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<HomeOutlined />}>
        <Link to="/sobre">Sobre</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<AlignLeftOutlined />}>
        <Link to="/servicos">Serviços</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<FileOutlined />}>
        <Link to="/projetos">Projetos</Link>
      </Menu.Item>
      <Menu.Item key="5" icon={<FileOutlined />}>
        <Link to="/orcamentos">Orçamentos</Link>
      </Menu.Item>
    </Menu>
  );

  return isMobile ? (
    <>
      {/* Mobile Header */}
      <Header className="mobile-header">
        <div className="logo-container">
          <span className="logo">César Vidros</span>
        </div>
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: "1.5rem", color: "#fff" }} />}
          onClick={() => setDrawerVisible(true)}
          className="menu-button"
        />
      </Header>
      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className="mobile-drawer"
      >
        {menuItems}
      </Drawer>
    </>
  ) : (
    // Desktop Sidebar
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      className="desktop-sider"
    >
      <div className="logo-container">
        <img
          src="https://res-console.cloudinary.com/dj7s4tg5e/thumbnails/v1/image/upload/v1739057095/TG1VZWxTZldLNUd4X21idGpzdQ==/drilldown"
          alt="Logo"
          className="logo-img"
        />
        {!collapsed && <span className="logo-text">César Vidros</span>}
      </div>
      {menuItems}
    </Sider>
  );
};