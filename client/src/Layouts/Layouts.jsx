import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";


export const Layouts = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};
