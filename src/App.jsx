import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [Laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {}, []);

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
        <div className="flex justify-between gap-60">
          <div className="border-4 border-white-500 p-0 w-80 h-80 flex flex-row items-center justify-center mb-8 rounded-full">
            <h1 className="text-white text-6xl font-bold font-mono ">
              {formatTime(time)}
            </h1>
          </div>
          <div className="flex flex-row mt-28 gap-8 ">
            {/* start button */}
            <button
              onClick={() => {
                setIsRunning(true);
              }}
              className="px-10 py-8 w-28 h-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-green-200 hover:border-blue hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
            >
              Start
            </button>

            <button
              onClick={() => {
                setIsRunning(true);
                setLaps([...Laps, formatTime(time)]);
              }}
              className="px-10 py-8 w-28 h-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-yellow-100 hover:border-blue hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
            >
              Lap
            </button>

            {/* stop */}
            <button
              onClick={() => {
                setIsRunning(false);
              }}
              className="px-6 py-4 w-28 h-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-red-200 hover:border-blue hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
            >
              Stop
            </button>

            {/* reset */}
            <button
              onClick={() => {
                setIsRunning(false);
                setTime(0);
              }}
              className="px-6 py-4 w-28 h-28 font-bold flex flex-col items-center justify-center border-l-8 border-rose-400 rounded-3xl text-rose-400 bg-violet-200 hover:border hover:border-blue-500 hover:border-[4px] transition-all duration-300"
            >
              Reset
            </button>
          </div>
        </div>
        <div className=" border-2 border-rose-300 rounded w-80 ml-[550px] mt-[-28px] p-6 flex flex-col items-center justify-center text-white font-bold">
          <h4 className="mt-[-12px]"> Laps: </h4>
          <div className="flex justify-between">
            {/* here all the laps are listed */}
            <ul className="flex flex-col gap-2 w-full max-h-40 overflow-y-auto">
              {Laps.map((lap, index) => (
                <li
                  key={index}
                  className="text-xl border-b border-gray-600 pb-1"
                >
                  <div className="flex justify-between">
                    <div>Lap {index} -&nbsp;</div>
                    <div>{lap}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
