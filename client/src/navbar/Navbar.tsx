import React, { ReactNode } from "react";

const Navbar = ({ children }: { children: ReactNode }) => {
  return <nav>{children}</nav>;
};

export default Navbar;
