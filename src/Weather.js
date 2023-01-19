import "./Weather.css";
import { useState } from "react";

function Weather() {
  let time = new Date();
  const [isExpanded, setisExpanded] = useState(false);
  function handleClick() {
    setisExpanded(!isExpanded);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={isExpanded ? "expanded" : "notExpanded"}
      >
        <h1>11&#176;C</h1>
        <h2>Karachi,Pakistan</h2>
        <h3>
          {time.getHours()}:{time.getMinutes()}
        </h3>
      </div>
    </>
  );
}
export default Weather;
