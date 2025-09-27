import { useState } from "react"
import Childcomponent from "./childcomponent"

const App=()=>{
    const [first,last]=useState("hello world")
    const changetext=()=>{
        last("hello hosein")
    }
    return(
<div>
    <button onClick={changetext}>click</button>
    <span >{first}</span>
    <childcomponent text={first}>
        <p>children</p>
    </childcomponent>
</div>
    )



}
export default App