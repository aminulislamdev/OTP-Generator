import { useState, useEffect, useRef } from "react";

export const OTPGenerator = () => {
  const [displayOtp, setDisplayOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  const handleDisplayOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setDisplayOtp(newOtp);
    setTimeLeft(5);
    setIsRunning(true);
  };
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {displayOtp || "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="assertive">
        {isRunning && timeLeft > 0 && `Expires in: ${timeLeft} seconds`}
        {!isRunning &&
          displayOtp &&
          "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        id="generate-otp-button"
        onClick={handleDisplayOtp}
        disabled={isRunning}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;
