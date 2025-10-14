import { useState } from "react";
import Users from "./Users";
import Posts from "./Posts";
const App = () => {
   const [page, setPage] = useState("posts");
  return (
    <div className="min-w-screen flex justify-center items-center p-4 gap-3">
      <div className="w-[70%] rounded-lg border bg-orange-200 flex flex-col p-4 gap-4 justify-center items-center">
      <h1 className="text-[25px] font-bold text-indigo-500 text-center">React App</h1>
        <div className="w-full flex gap-4 p-4 justify-center items-center">
          <button className={`w-[15%] h-[40px] rounded-lg border-0 ${page === "users" ?"bg-indigo-600 text-white":"bg-gray-300 text-black"}`} onClick={()=>setPage("users")}>USERS</button>
          <button className={`w-[15%] h-[40px] rounded-lg border-0 ${page === "posts" ?"bg-indigo-600 text-white":"bg-gray-300 text-black"}`} onClick={()=>setPage("posts")}>POSTS</button>
        </div>
        <div className="p-4">
          {page === "users" && <Users/>}
          {page === "posts" && <Posts/>}
        </div>
      </div>
    </div>
     );
}
export default App;