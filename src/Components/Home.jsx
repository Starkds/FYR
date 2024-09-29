import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Livingdetails from "./Livingdetails";


function  Home(){

return(<>
<Link className="Home" to="/">
<div className="flex  flex-col mt-20 ">
<Sidebar/>
{/* <Header/>
 <Livingdetails/> */}
</div>

</Link>
       
    </>
    );
}
export default Home;