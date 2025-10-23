import { useState } from "react";
import Childcomp from "./Childcomp";
import Counter from "./Counter";

const App = () => {
console.log("app rerendered");

const [count,setcount]=useState(0)
  return (
    <div className="flex flex-col justify-center items-center">
<Childcomp/>
<Counter count={count} setcount={setcount}/>
    </div>
  );
}
export default App;