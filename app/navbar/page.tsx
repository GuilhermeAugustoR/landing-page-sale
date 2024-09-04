import React from "react";
import Logo from "./logo";
import { NavigationMenuBar } from "./navigation-bar";
import ActionButton from "./action-button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b h-20">
      <Logo />
      <NavigationMenuBar />
      <ActionButton />
    </div>
  );
};

export default Navbar;
