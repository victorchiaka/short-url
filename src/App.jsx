const App = () => {
  return (
    <>
      <div className=" bg-soothblack w-screen h-screen">
        <div className="container w-[95%] mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col md:w-[60em] w-full text-center mb-28">
            <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-soothblack"><span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">Url</span> Shrinker</h1>
            <form className="py-10 my-8 w-[100%] shadow-sm shadow-blue-500 rounded-3xl" action="">
              <input className="bg-grayblack rounded-3xl h-12 w-[70%] mx-1 p-2 outline-none focus:border border-blue-400 text-white" type="text" />
              <button className="h-12 w-[6rem] mx-1 rounded-3xl text-white bg-gradient-to-b from-blue-400 to-blue-600" type="submit">Shrink</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;