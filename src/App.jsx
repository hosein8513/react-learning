import { useState } from "react"
import User from "./User"
import Guest from "./guest"

const App=()=>{
const[islogined,setislogined]=useState(false)
return(
  <div>
    <button onClick={()=>setislogined(!islogined)}>
      {islogined?"logout":"login"}
    </button>
    {islogined?<User/>:<Guest/>}
  </div>
)

}
export default App