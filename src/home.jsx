import propTypes from "prop-types"
import Landing from "./Components/Home/index";
import Profile from "./Components/profile";
import Tasks from "./Components/tasks";


const Home= ({header})=> {
   
    return (
        <div className="w-full h-full px-32 pt-24 py-8">
            <div className="bg-white w-full h-full ">
                {header== "Home" && <Landing/>}
                {header== "Profile" && <Profile/>}
                {header== "Tasks" && <Tasks/>}
            </div>
        </div>
    
      );
}
 

export default Home;