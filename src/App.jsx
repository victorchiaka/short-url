const App = () => {
  return (
    <>
      <div className=" bg-soothblack w-screen h-screen">
        <div className="container w-[95%] h-full flex items-center justify-center">
          <div className="flex flex-col">
            <div className="my-3">
              <h1 className="text-7xl text-transparent bg-clip-text bg-gradient-to-b from-white to-soothblack"><span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600">Url</span> Shrinker</h1>
            </div>
            <form className="w-[100%]" action="">
              <input className="bg-grayblack rounded-3xl h-12 w-[60%]" type="text" />
              <button className="h-12 rounded-3xl w-[30%] text-white bg-gradient-to-b from-blue-400 to-blue-600" type="submit">Shrink</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;