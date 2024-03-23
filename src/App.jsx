import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [step, setStep] = useState(1);
  const prevstep = () => {
    setStep(step - 1);
  };
  const nextstep = () => {
    setStep(step + 1);
  };

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="flex justify-center items-center p-4">
        <button
          className="p-2 w-2 h-2 bg-gray-200 flex justify-center items-center"
          onClick={prevstep}
        >
          -
        </button>
        <div>Step : {step}</div>
        <button
          className="p-2 w-2 h-2 bg-gray-200 flex justify-center items-center"
          onClick={nextstep}
        >
          +
        </button>
      </div>

      <div className="flex justify-center items-center p-4">
        <button
          className="p-2 w-2 h-2 bg-gray-200 flex justify-center items-center"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <div>Count : {count}</div>
        <button
          className="p-2 w-2 h-2 bg-gray-200 flex justify-center items-center"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>

      <p className="flex justify-center items-center p-4">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

export default App;
