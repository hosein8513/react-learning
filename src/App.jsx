import User from "./User"
const App=()=>{
  const user = [
    {id:1,name:"hosein",phone:990,job:"developer"},
    {id:2,name:"ali",phone:991,job:"trainer"},
    {id:3,name:"javad",phone:913,job:"engenier"}
  ]
    return(
<div>
 {user.map((user)=>(
    <User key={user.name} id={user.id} name={user.name} phone={user.phone} job={user.job}/>
 ))}
</div>
    )



}
export default App