import { useState } from "react";

function App() {
  const [counter , setCounter] = useState(0)
  return (
    <>
    <p>
    {counter}
    </p>
    <button onClick={() => {
      setCounter((prev) => {
        return prev > 5 ? prev + 1 : 5
      })
    }}>
      increment
    </button>
     <button onClick={() => {
      setCounter((prev) => {
        return prev > 0 ? prev - 1 : 0
      })
    }}>
     decrement
   </button>
   </>
  );
}

export default App;
