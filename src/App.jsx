import { useEffect, useState } from "react";
import ApiCall from "./ApiCall";

const App = () => {
  const [count, setCount] = useState(0); // store kore rakha

  // useEffect(()=> {}, [])

  useEffect(() => {
    // main code to run
    console.log(count);

    // return optional function
    return () => {
      console.log("Cleand up!");
    };
  }, [count]); // dependency list

  return (
    <div>
      <div className="flex  justify-center items-center h-screen">
        <div>
          <h1 className="text-4xl py-5 text-center">Count: {count}</h1>
          <button
            onClick={() => setCount(count + 1)}
            className=" border border-green-600 px-5 mr-5"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className=" border border-blue-600 px-5 mx-5"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count - 1)}
            disabled={count == 0 ? true : false}
            className=" border border-red-600 px-5 ml-5"
          >
            Decrement
          </button>
        </div>
      </div>
      <ApiCall />
    </div>
  );
};

export default App;
