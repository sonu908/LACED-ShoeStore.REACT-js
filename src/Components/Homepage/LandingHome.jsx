import React from "react";
import NavTop from "./NavigationBar/NavTop";
import MenuBase from "./Menu/MenuBase";
import BaseComponent from "../Homepage/Card/BaseComponent";
function LandingHome() {
  return (
    <div>
      <NavTop />
      <MenuBase />
      <BaseComponent />
    </div>
  );
}

export default LandingHome;
