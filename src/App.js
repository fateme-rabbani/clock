import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
  return () => {
    clearInterval(timerID);
    //clean mount
    };
  }, []);
return time.toLocaleTimeString();
};

export default App;
