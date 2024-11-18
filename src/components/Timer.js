import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer({ initialTime, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp(); // Notify when the timer ends
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return <div className="timer">{formatTime(timeLeft)}</div>;
}

export default Timer;



// import React, { useState, useEffect } from "react";
// import "./Timer.css";

// function Timer({ initialTime, onTimeUp }) {
//   const [timeLeft, setTimeLeft] = useState(initialTime);

//   useEffect(() => {
//     if (timeLeft <= 0) {
//       onTimeUp(); // Notify when the timer ends
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup the timer
//   }, [timeLeft, onTimeUp]);

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
//   };

//   return <div className="timer">{formatTime(timeLeft)}</div>;
// }

// export default Timer;
