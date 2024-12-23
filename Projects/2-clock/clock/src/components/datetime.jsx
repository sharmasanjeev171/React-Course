import React, { useState, useEffect } from "react";
import { format } from "date-fns";

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      Current date and time:{" "}
      {format(currentDateTime, "MMMM do yyyy, h:mm:ss a")}
    </div>
  );
}

export default DateTime;
