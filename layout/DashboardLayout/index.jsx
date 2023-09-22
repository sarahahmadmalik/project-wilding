import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Avatar, Button, Dropdown, Input, Layout, Spin, Drawer, Menu } from "antd";
import { SearchOutlined, BellOutlined, MenuOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faDollarSign, faComments, faCog, faGift, faStar } from '@fortawesome/free-solid-svg-icons';

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
         <Layout className="site-layout  "  >

      <Header className="header  md:hidden" >
        <div className="menu-icon flex justify-end items-center  text-[45px]" >
        <button onClick={showDrawer}><MenuOutlined size={30} style={{ color: "white", fontSize: "30px" }}/></button>?
        </div>
        {/* Add other header contents here */}
     
   
      
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onCloseDrawer}
        visible={drawerVisible}
      >
        <Menu onClick={handleMenuClick} selectedKeys={[selectedMenuItem]} mode="vertical">
          {routes.map((route) => (
            <Menu.Item key={route.title} icon={route.icon}>
              <Link href={route.path}>{route.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
      </Header>
        <Content className="custom-content" style={{ margin: "16px"}}>
          {children}
        </Content>
       
      </Layout>
    </Layout>
  );
};

export default Index;
