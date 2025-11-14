import { useEffect, useRef } from "react";

const TimerControls = ({ onToggle, onReset, isRunning }) => {
  const starButtontRef = useRef(null);

  useEffect(() => {
    if (starButtontRef.current) {
      starButtontRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={starButtontRef}
        onClick={onToggle}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 mr-3"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={onReset}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-800"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
