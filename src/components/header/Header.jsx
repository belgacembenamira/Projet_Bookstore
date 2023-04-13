/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 12/04/2023 - 06:15:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { useState } from "react";
import "./header.css";
import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
        <HeaderTop toggle={toggle} setToggle={setToggle} />
        <HeaderMiddle />
        <Navbar setToggle={setToggle} toggle={toggle} />
    </header>
  );
};

export default Header;
