import React from "react";
import Footer from "./footer";
import Nav from "./nav";


function Layout({ children }) {
  return (
    <>
      <Nav />
      <footer />
      {children}
      
    </>
  );
}

export default Layout;
