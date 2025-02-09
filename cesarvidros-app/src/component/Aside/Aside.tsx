import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MenuOutlined,
  HomeOutlined,
  AlignLeftOutlined,
  FileOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Drawer, Button } from "antd";

import "../../styles/ResponsiveNav/ResponsiveNav.css";

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
}, [isMobile]); // Add `isMobile` as a dependency to prevent unnecessary re-renders


  const menuItems = (
    <Menu theme="dark" mode="vertical">
      <Menu.Item style={{borderBottom: '.5px solid #ccc', borderRadius: '0', borderTop: '1px solid #ccc', padding: '0 15px'}} key="1" icon={<HomeOutlined />}>
        <Link to="/">Principal</Link>
      </Menu.Item>
      <Menu.Item style={{borderBottom: '.5px solid #ccc', borderRadius: '0', borderTop: '1px solid #ccc', padding: '0 15px'}} key="2" icon={<HomeOutlined />}>
        <Link to="/sobre">Sobre</Link>
      </Menu.Item>
      <Menu.Item style={{borderBottom: '.5px solid #ccc', borderRadius: '0', borderTop: '1px solid #ccc', padding: '0 15px'}} key="3" icon={<AlignLeftOutlined />}>
        <Link to="/servicos">Serviços</Link>
      </Menu.Item>
      <Menu.Item style={{borderBottom: '.5px solid #ccc', borderRadius: '0', borderTop: '1px solid #ccc', padding: '0 15px'}} key="4" icon={<FileOutlined />}>
        <Link to="/projetos">Projetos</Link>
      </Menu.Item>
    </Menu>
  );

  return isMobile ? (
    <>
      {/* Mobile Header */}
      <Header className="mobile-header">
        <span className="logo">César Vidros</span>
        <Button
          icon={<MenuOutlined />}
          onClick={() => setDrawerVisible(true)}
        />
      </Header>

      {/* Mobile Menu Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable
        style={{ backgroundColor: "#001529", color: "white" }}
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
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
      className="sider"
    >
      <div className="logo">
        <div className="img">
          <img
            src="https://res-console.cloudinary.com/dj7s4tg5e/thumbnails/v1/image/upload/v1739057095/TG1VZWxTZldLNUd4X21idGpzdQ==/drilldown"
            alt="Logo"
          />
        </div>
      </div>
      {menuItems}
    </Sider>
  );
};
