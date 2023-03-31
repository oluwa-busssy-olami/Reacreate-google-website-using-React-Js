// import React from "react";

import AppLauncherIcon from "./AppLauncherIcon";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem title={"Gmail"} />
        {/* prop.title "Gmail" */}
        <MenuItem title={"images"} />
        <AppLauncherIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
