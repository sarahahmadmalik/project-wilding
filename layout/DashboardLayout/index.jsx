
import Sidebar from "./Sidebar";

import { useRouter } from "next/router";
import {useState} from 'react'
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

import { Avatar, Button, Dropdown, Input, Layout, Spin } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";
const { Header, Content } = Layout;
import { Menu } from "antd";
import {
  MenuOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  UnorderedListOutlined,
  HistoryOutlined,
  StarOutlined,
  SettingOutlined,
  DownOutlined,
} from "@ant-design/icons";

const Index = ({ children }) => {
  const router = useRouter();
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard"); 

  const handleMenuClick = (item) => {
    setSelectedMenuItem(item.key);
  };


  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar role={"admin"} />
      <Layout className="site-layout">
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Index;
