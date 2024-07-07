
import { useEffect, useState } from "react"
import axios from "axios"


const  Home= ()=> {

    const [ getAllUsers, setgetAllUsers] = useState([]);
    
    const  AllUsers= async ()=> {
    const { data } = await axios.get("http://localhost:3000/users/getAllUsers", {params : {pageNo:1 , limit:5}},
    {

        withCredentials:true,
    },

       );
        // if condition 

        console.log(data)
       if(data.error) { 
        return  alert(data.error.message)
       }  
        return (data.response.message)
    }
     
    useEffect(()=>{
        void AllUsers();
    },[]);
    return ( 

    <>
        <h1>Users Here</h1>
    </>

     )

 
}

export default Home;