import Title from "./components/title";
import Form from "./components/form";

const App = () => {
  return (
    <>
      <div className=" bg-soothblack w-[100%] h-[100%]">
        <div className="container mx-auto flex flex-col items-center h-[100%] justify-center space-y-4">
          <Title />
          <Form />
        </div>
      </div>
    </>
  );
};

export default App;
