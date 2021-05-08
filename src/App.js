import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let now =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();

  const [count, setCount] = useState(now);

  function update() {
    let now =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();
    setCount(now);
  }

  /*
   * Didn't get the flow of react
   * in which direction it is working
   * first return function then update then setCount ??
   */

  setInterval(update, 1000);

  return (
    <div className="items-center w-screen h-screen header grid justify-items-center">
      <div
        className="inline px-4 py-2 m-2 font-sans text-3xl bg-red-300 border-8 border-red-300 rounded-full hover:border-red-600"
        onClick={update}
      >
        {count}
      </div>
    </div>
  );
}

export default App;
