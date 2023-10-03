import Title from "./components/title";
import Form from "./components/form";

const App = () => {
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
