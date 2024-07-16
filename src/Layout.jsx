import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function Layout(){
return(

    <>
    <Navbar />
        <Header />
    <Outlet/>
    </>
);
}

export default Layout;