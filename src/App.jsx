
const App = () => {

  return (
    <div className="w-[100dvw] h-[100dvh] bg-gradient-to-br from-blue-600 via-purple-500 to-pink-600 ">
      <header className="w-full h-[5%] flex items-center justify-center bg-white/15 space-x-[800px]">
        <div className="flex gap-2">
          <div className="w-[30px] h-[30px] rounded-full bg-white text-center">R</div>
          <span className="text-white">ReactUI</span>
        </div>
        <button className="text-white bg-green-600 w-[100px] h-[90%]">Sign in</button>
      </header>
      <main className="w-full h-[95%]">

        <div className="w-full h-[50%] flex justify-center items-center gap-8">
          <div className="w-[40%] flex flex-col gap-4 text-left">
            <span className="text-white text-[30px] font-semibold">Modern UI</span>
            <span className="text-[30px] font-semibold text-blue-400">Built with Tailwind</span>
            <span className="text-[13px] text-gray-400">A beautiful and responsive user interface built with react and tailwind css <br /> perfect for modern web applications</span>
            <div dir="ltr" className="w-[90%] flex gap-5 ">
              <button className="w-[45%] h-[60px] bg-white text-purple-400">Get Started</button>
              <button className="w-[45%] h-[60px] bg-transparent border border-white text-white">Learn More</button>
            </div>
          </div>
          <div className="w-[30%] h-[100px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 rounded-lg shadow-gray-300"></div>
        </div>
        <div className="w-full h-[50%] flex flex-col justify-center items-center gap-4 bg-white/10">
        <span className="text-white text-[25px] font-semibold">
          Key Fatures
        </span>
        <span className="text-gray-400 text-[15px]">
          Everything you need to build amazing user interfaces
        </span>
        <div className="w-full flex justify-center items-center gap-4">
        <div className="w-[25%] h-[200px] bg-white/25 rounded-lg flex flex-col gap-4 p-4">
        <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-center text-white">1</div>
        <span className="text-white text-[25px]">Responsive Design</span>
        <span className="text-[15px] text-gray-600">Fully responsive components that look geat on <br /> any device,from mobile to desktop</span>
        </div>
        <div className="w-[25%] h-[200px] bg-white/25 rounded-lg flex flex-col gap-4 p-4">
        <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-center text-white">2</div>
        <span className="text-white text-[25px]">Modern UI</span>
        <span className="text-[15px] text-gray-600">Beautiful,modern design with attention to <br /> detail and user experiance</span>
        </div>
        <div className="w-[25%] h-[200px] bg-white/25 rounded-lg flex flex-col gap-4 p-4">
        <div className="w-[30px] h-[30px] rounded-full bg-blue-600 text-center text-white">3</div>
        <span className="text-white text-[25px]">Tailwind Powered</span>
        <span className="text-[15px] text-gray-600">Built with Tailwind CSS for rapid UI development <br /> and easy customization</span>
        </div>
        </div>
        </div>
      </main>
    </div>
  )

}
export default App