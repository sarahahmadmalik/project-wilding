import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faDollarSign, faComments, faCog, faGift, faStar } from '@fortawesome/free-solid-svg-icons';

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

export default routes;
