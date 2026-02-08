import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    return min + ":" + sec;
  }

  return (
    <>
      <section className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <div className="border-4 border-white-500 p-0 w-80 h-80 flex flex-row items-center justify-center mb-8 rounded-full">
          <h1 className="text-white text-6xl font-bold font-mono ">
            {formatTime(time)}
          </h1>
        </div>
        <div className="flex flex-row mt-8 gap-8">
          {/* start button */}
          <button
            onClick={() => {
              setIsRunning(true);
            }}
            className="px-10 py-8 w-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-green-200 hover:border-blue hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
          >
            Start
          </button>

          {/* stop */}
          <button
            onClick={() => {
              setIsRunning(false);
            }}
            className="px-6 py-4 w-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-red-200 hover:border-blue hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
          >
            Stop
          </button>

          {/* reset */}
          <button
            onClick={() => {
              setIsRunning(false);
              setTime(0);
            }}
            className="px-6 py-4 w-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-violet-200 hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
          >
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
