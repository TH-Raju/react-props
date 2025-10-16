import { useRef, useState } from "react";

const RefHook = () => {
  const [count, setCount] = useState(0); // store kore rakha
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State: ", count);
    console.log("Ref: ", countRef.current);
  };

  return (
    <div>
      <div className="flex  justify-center items-center h-screen">
        <div>
          <h1 className="text-4xl py-5 text-center">Count: {count}</h1>
          <button
            onClick={handleIncrement}
            className=" border border-green-600 px-5 mr-5"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefHook;
