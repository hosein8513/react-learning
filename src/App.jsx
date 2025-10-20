import Users from "./Users";
import Posts from "./Posts";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from "react-router";
import Adduser from "./adduser";
import Userdetails from "./Userdetails";

const App = () => {
const navigate = useNavigate()

const handlenavigate = ()=>{
  alert("STARTING...")
  navigate("/users")
}

  return (
    <div className="min-w-screen flex justify-center items-center p-4 gap-3">
      <div className="w-[70%] rounded-lg border bg-orange-200 flex flex-col p-4 gap-4 justify-center items-center">
        <h1 className="text-[25px] font-bold text-indigo-500 text-center">React App</h1>
        <div className="w-full flex gap-4 p-4 justify-center items-center">
          <NavLink to={"/users"} className={({ isActive }) => isActive ? "bg-indigo-600 text-white w-[15%] h-[40px] rounded-lg border-0 text-center" : "bg-gray-200 w-[15%] h-[40px] rounded-lg border-0 text-center"}>USERS</NavLink>
          <NavLink to={"/posts"} className={({ isActive }) => isActive ? "bg-indigo-600 text-white w-[15%] h-[40px] rounded-lg border-0 text-center" : "bg-gray-200 w-[15%] h-[40px] rounded-lg border-0 text-center"}>POSTS</NavLink>
        </div>
        <div className="p-4">
          <button className="w-[80px] h-[40px] rounded-lg text-white m-4 bg-green-300" onClick={handlenavigate}>START</button>
          <Routes> 
            <Route path="/users" element={<Users />}>
            <Route path="adduser" element={<Adduser/>}/>
            <Route path="user-details/:userId" element={<Userdetails/>}/>
            </Route>
            <Route path="/posts" element={<Posts />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}
export default App;