import PropTyes from "prop-types"
import Login from "./Login";


const Signup= ({updateLogin})=> {

    return ( 
         <div className="w-1/4 h-3/5 bg-gray-300 flex flex-col gap-y-7 justify-center items-center">
            <p>SignUp</p>
            <p>{"Already have any account ?"} {""} <span

             onClick={()=>{
                updateLogin(true)
            }}
            
            className=" hover:underline hover:text-blue-400 cursor-pointer">SignIn</span></p>
        </div>
        
     );
     Signup.propTypes = {
  updateLogin: PropTypes.func,
};
}

export default Signup;