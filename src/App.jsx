import { useState } from "react"
import User from "./User"
const user = [
  {id:1,name:"hosein",phone:990,job:"developer"},
  {id:2,name:"ali",phone:991,job:"trainer"},
  {id:3,name:"javad",phone:913,job:"engenier"}
]
const App=()=>{

  const[puser,fuser]=useState(user)

  const handledelete = (name)=>{
    fuser((preuser)=>{
  const newuser = preuser.filter((user) => user.name !== name)
  return newuser

})
    }

    const setsearch = (char)=>{
const newuser= user.filter((user)=>user.name.toLocaleLowerCase().includes(char.toLocaleLowerCase())||user.job.includes(char))
fuser(newuser)
    }
    return(
<div>
  <input type="text" onChange={(e)=>setsearch(e.target.value)} />
 {puser.map((user)=>(
    <User key={user.name} id={user.id} name={user.name} phone={user.phone} job={user.job} handledelete={()=>handledelete(user.name)}/>
 ))}
</div>
    )



}
export default App