import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";


function  Home(){

return(<>
<Link className="Home" to="/">
<Header/>
<Sidebar/>
</Link>
       
    </>
    );
}
export default Home;