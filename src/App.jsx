import { Fragment } from "react"
import User from "./User"


const App = ()=>{
    return(
<div>
<User id={1} name={"hosein"} phone={9909302575} job={"developer"} />
<User id={2} name={"javad"} phone={9133323046} job={"methal engenier"} />
</div>
    )
}

export default App

