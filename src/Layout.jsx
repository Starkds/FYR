import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function Layout(){
return(

    <>
    <div className="flex gap-10">
    <Navbar />
    
    </div> 
    
     <Outlet/>

    {/* <Footer className="z-30" />  */}
    </>
);
}

export default Layout;