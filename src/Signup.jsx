import PropTyes from "prop-types";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";

const Signup = ({ updateLogin }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirnmPassword] = useState("");
  

  const Signup= async ()=> {
    const { data } = await axios.post("http://localhost:3000/users//createUser", {
        userName,
        password,
        confirmPassword,
   
    },
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

  return (
    <>
      <div className="h-screen w-screen bg-gray-400 flex items-center justify-center">
        <div className="h-5/6 w-1/4 bg-white rounded-md">
          <div className="h-1/4">
            <p className=" text-3xl fort-semibold w-full h-full flex justify-center items-center">
              {"SignUp Form"}
            </p>
          </div>
          <div className="h-2/4 flex flex-col justify-center p-2">
            <label className="text-lg font-semibold py-2 text-gray-600">
              Username
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="text"
              placeholder="username"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <label className="text-lg font-semibold py-2 text-gray-600">
              Password
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="password"
              placeholder="Enter Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label className="text-lg font-semibold py-2 text-gray-600">
              Confirm Password
            </label>
            <input
              className="bg-gray-200 border-2 p-2 outline-none border-gray-300 rounded-md"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => {
                setConfirnmPassword(e.target.value);
              }} 
            />
            
            

            <p>
              {"Dont have any account ?"} {""}
              <span
                onClick={() => {
                  updateLogin(true);
                }}
                className=" hover:underline hover:text-blue-400 cursor-pointer"
              >
                {"Login"}
              </span>
            </p>

            <div className=" w-full flex justify-center items-center p-2">
              <button
              onClick={Signup}
                disabled={!userName || !password || !confirmPassword}
                className="bg-blue-500 w-full text-white py-2 rounded-md text-xl font-semibold disabled:bg-gray-200"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  Signup.propTypes = {
    updateLogin: PropTypes.func,
  };
};

export default Signup;
