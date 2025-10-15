import Users from "./Users";
import Posts from "./Posts";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
const App = () => {
  return (
    <div className="min-w-screen flex justify-center items-center p-4 gap-3">
      <div className="w-[70%] rounded-lg border bg-orange-200 flex flex-col p-4 gap-4 justify-center items-center">
        <h1 className="text-[25px] font-bold text-indigo-500 text-center">React App</h1>
        <div className="w-full flex gap-4 p-4 justify-center items-center">
          <NavLink to={"/users"} className={({ isActive }) => isActive ? "bg-indigo-600 text-white w-[15%] h-[40px] rounded-lg border-0 text-center" : "bg-gray-200 w-[15%] h-[40px] rounded-lg border-0 text-center"}>USERS</NavLink>
          <NavLink to={"/posts"} className={({ isActive }) => isActive ? "bg-indigo-600 text-white w-[15%] h-[40px] rounded-lg border-0 text-center" : "bg-gray-200 w-[15%] h-[40px] rounded-lg border-0 text-center"}>POSTS</NavLink>
        </div>
        <div className="p-4">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}
export default App;