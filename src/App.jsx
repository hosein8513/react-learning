import { useEffect, useState } from "react"

const App = () => {
  const [count, setcount] = useState(0)
  const [notif, setnotif] = useState(null)


  useEffect(() => {
    if (count % 10 == 0 && count !== 0) {
      setnotif(`you riched to ${count}`)
      setTimeout(() => {
        setnotif(null)
      }, 3000);
    }
  })

  return (
    <div className="flex justify-center items-center">
      <div className="w-[300px] h-[400px] border rounded-lg flex flex-col gap-4 items-center">
        <h1>smart counter</h1>
        <div className="w-[80%] h-[40%] flex justify-center items-center relative">
          <span className="text-[30px] font-bold">
            {count}
          </span>
         {count !==0 && (
           <div className="absolute w-[40px] h-[20px] bg-blue-400 text-white rounded-full top-[20px] right-[40px] text-center">
            {count %2 ===0 ?"zoj":"fard"}
           </div>
         )}
        </div>
        <div className="w-[90%] flex h-[30%]">
          <button className="w-[45%] h-full " onClick={()=>setcount(count+1)}>+</button>
          <button className="w-[45%] h-full " onClick={()=>setcount(count-1)}>-</button>
        </div>
        <button className="w-[60px] h-[30px]" onClick={()=>setcount(0)}>reset</button>
      </div>

     {notif &&(
       <div className="w-[200px] h-[100px] fixed bottom-[30px] right-[40px] rounded-lg p-4 bg-blue-400 text-white transition-all transform animate-bounce">
        {notif}
       </div>
     )}
    </div>

  )

}
export default App