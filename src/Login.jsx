import propTypes from "prop-types"

const Login= ({updateLogin})=> {

    return ( 

        <div className="w-1/4 h-3/5 bg-gray-300 flex flex-col gap-y-7 justify-center items-center">
            <p>Login</p>
            <p>{"Dont have any account ?"} {""} <span

            onClick={()=>{
                updateLogin(false)
            }}
             className=" hover:underline hover:text-blue-400 cursor-pointer">SignUp</span></p>
        </div>

     )

     Login.propTypes = {
  updateLogin: PropTypes.func,
};
}

export default Login;