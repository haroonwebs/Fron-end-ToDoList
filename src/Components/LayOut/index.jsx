import { useState } from "react";
import Home from "../../home";
import Header from "./Header";

const Index= ()=> {
    const [header, setHeader]= useState("Home")

    console.log("header set states:", header)
    return (
        <div className="w-full h-full">
            <Header setHeader={setHeader}/>
            <Home header={header}/>
        </div>
    
      );
}

export default Index;