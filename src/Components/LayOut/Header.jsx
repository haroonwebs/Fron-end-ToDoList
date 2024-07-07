import propTypes from "prop-types"

const Header= ({setHeader})  => {
    return (
        <div className="w-full h-16 absolute flex bg-blue-500">
            <div className="w-1/4 sm:w-1/2 h-full flex justify-center ">
                  <div className="w-3/4 h-full flex items-center">
                  <p className="text-lg font-semibold text text-white cursor-pointer">Muhammd Haroon</p>
                  </div>
            </div>

            <div className="w-3/4 sm:w-1/2 h-full flex justify-center ">
                 <div className="w-4/5 sm:w-3/4 h-full  flex justify-end ">
                 <div className="w-4/5 h-full flex items-center justify-between">

                 <p 
                 onClick={() => {
                  setHeader("Home")
                 }}
                 className="text-xl font-semibold text text-white cursor-pointer">
                    <span className="max-[640px]:hidden">{'Home'}</span>
                    {"🏚️"}</p>

                  <p
                   onClick={() => {
                  setHeader("Tasks")
                 }}
                  className="text-xl font-semibold text text-white cursor-pointer">
                    <span className="max-[640px]:hidden">{'Tasks'}</span>
                    {"📝"}</p>

                  <p
                   onClick={() => {
                  setHeader("Profile")
                 }}
                  
                  className="text-xl font-semibold text text-white cursor-pointer">
                    <span className="max-[640px]:hidden">{'Profile'}</span>
                    {"👨‍💼"}</p>

                  <p
                   onClick={() => {
                  setHeader("LogOut")
                 }}
                  className="text-xl font-bold bg-white cursor-pointer py-1 px-2 text-blue-800 rounded-lg">
                    <span className="max-[640px]:hidden">{"LogOut"}</span>
                    {"↪"}</p>

                 </div>
                 </div>
            </div>
        </div>
         
     );
}

      Header.propTypes = {
    setHeader: propTypes.func
      }
export default Header;