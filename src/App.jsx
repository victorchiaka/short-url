import Title from "./components/title";
import Form from "./components/form";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "Short Urls";
  }, []);

  return (
    <>
      <div className=" bg-soothblack w-[100%] h-[100%]">
        <div className="container mx-auto h-[90%] flex flex-col items-center justify-center space-y-8">
          <Title />
          <Form />
        </div>
      </div>
    </>
  );
};

export default App;
