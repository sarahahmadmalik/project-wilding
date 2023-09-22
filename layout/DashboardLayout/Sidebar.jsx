import { useEffect, useState } from "react";
import { Layout } from "antd";
import routes from "@/routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import CustomMenuItem from '@/Components/CustomMenuItem';
const { Sider } = Layout;

const Sidebar = ({ role }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (router.pathname) {
      if (current !== router.pathname) {
        setCurrent(router.pathname);
      }
    }
  }, [router, current]);

  return (
  
      <Sider
        width={200}
        style={{
          paddingTop: "2rem",
          background: "#FFFFFF",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1, // Adjust the z-index as needed
        }}
        collapsed={collapsed}
      >
        <div className="flex items-center justify-center">
          <div>
            <Image
              src={"/logo.png"}
              width={130}
              height={130}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/")}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {routes.map((route) => {
            if (route.roles.includes(role)) {
              return (
                <CustomMenuItem
                  key={route.path}
                  route={route}
                  current={current}
                />
              );
            }
          })}
        </div>
      </Sider>
    
  
  );
};

export default Sidebar;
