import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faDollarSign, faComments, faCog, faGift, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import React, { useState } from 'react';
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input, Layout, Spin, Drawer, Menu, Image } from "antd";
import { SearchOutlined, BellOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
const { Header, Content } = Layout;

const Index = ({ children }) => {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleMenuClick = (item) => {
    setSelectedMenuItem(item.key);
    setDrawerVisible(false); // Close the drawer when a menu item is clicked
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const routes = [
    {
      path: "/user/",
      icon: <FontAwesomeIcon icon={faEnvelope} size="2x" className="icon" />,
      title: "Wilding Updates",
      roles: ["admin", "user"],
    },
    {
      path: "/user/your-impact",
      icon: <FontAwesomeIcon icon={faStar} size="2x" className="icon" />,
      title: "Your Impact",
      roles: ["user", "admin"],
    },
    {
      path: "/user/fund-extra",
      icon: <FontAwesomeIcon icon={faDollarSign} size="2x" className="icon" />,
      title: "Fund Extra",
      roles: ["user", "admin"],
    },
    {
      path: "/user/community",
      icon: <FontAwesomeIcon icon={faComments} size="2x" className="icon" />,
      title: "Community",
      roles: ["user", "admin"],
    },
    {
      path: "/user/account",
      icon: <FontAwesomeIcon icon={faCog} size="2x" className="icon" />,
      title: "Account",
      roles: ["user", "admin"],
    },
    {
      path: "/user/gift",
      icon: <FontAwesomeIcon icon={faGift} size="2x" className="icon" />,
      title: "Gift",
      roles: ["user", "admin"],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar role={"admin"} />
      <Drawer
        id='drawer'
        title={null} // Set the title to null to hide the header
        placement="top"
        closable={false}
        style={{ background: "#212742 !important" }}
        onClose={onCloseDrawer}
        visible={drawerVisible}
      >
        <Button
          icon={<CloseOutlined style={{ color: "white", fontSize: "20px" }} />}
          shape="circle"
          size="small"
          onClick={onCloseDrawer}
          className="close-button border-0 flex justify-end"
        />
        <Menu
          onClick={handleMenuClick}
          style={{ background: "#212742 !important" }}
          selectedKeys={[selectedMenuItem]}
          mode="vertical"
        >
          {routes.map((route) => (
            <Menu.Item key={route.title} icon={route.icon}>
              <Link href={route.path}>{route.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
      <Layout className="site-layout">
        <Header className="header md:hidden " style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <div className="menu-icon flex justify-between items-center text-[45px]">
            <div>
              <Image
                src={"/logo.png"}
                width={150}
                height={40}
                className="mt-2"
                style={{ cursor: "pointer" }}
                onClick={() => router.push("/")}
              />
            </div>
            <button onClick={showDrawer}>
              <MenuOutlined size={30} style={{ color: "white", fontSize: "30px" }} />
            </button>
          </div>
          {/* Add other header contents here */}
        </Header>
        <Content className="custom-content" style={{ margin: "16px" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Index;
