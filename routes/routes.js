
import Image from "next/image";
const routes = [
  {
    path: "/user/",
    icon: <Image src="/images/icon.svg" width={20} height={20} />,
    title: "Updates",
    roles: ["admin", "user"],
  },

  {
    path: "/user/your-impact",
    icon: <Image src="/images/icon1.svg" width={20} height={20} />,
    title: "Your Impach",
    roles: ["user", "admin"],
  },
  {
    path: "/user/fund-extra",
    icon: <Image src="/images/fund.svg" width={20} height={20}/>,
    title: "Fund Extra",
    roles: ["user", "admin"],
  },
  {
    path: "/user/community",
    icon: <Image src="/images/com.svg" width={20} height={20} />,
    title: "Community",
    roles: ["user", "admin"],
  },
  {
    path: "/user/account",
    icon: <Image src="/images/account.svg" width={20} height={20} />,
    title: "Account",
    roles: ["user", "admin"],
  },
  
  {
    path: "/user/gift",
    icon: <Image src="/images/icom4.svg" width={20} height={20} />,
    title: "Gift",
    roles: ["user", "admin"],
  },
    
 
];

export default routes;
