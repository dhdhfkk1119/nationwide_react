import Logo from "./header/Logo.jsx";
import Navbar from "./header/Navbar.jsx";    
import UserInfo from "./header/UserInfo.jsx";    
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <UserInfo />
    </header>
  );
}

