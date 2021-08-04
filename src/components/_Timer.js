import React, { useState, /* useRef, */ useEffect } from "react";
import { Typography } from "@material-ui/core";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  //   const countRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Typography align="center" variant="h4">
        {timer}
      </Typography>
    </>
  );
};

export default Timer;
