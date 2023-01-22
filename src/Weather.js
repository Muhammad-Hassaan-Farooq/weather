import "./Weather.css";
import { useState, useEffect } from "react";
import HourlyWeather from "./HourlyWeather";
import api_key from "./key.js";

function Weather() {
  let time = new Date();
  const [isExpanded, setisExpanded] = useState(false);
  const [showTable, setshowTable] = useState(false);
  const [Temp, setTemp] = useState("----");
  function handleClick() {
    if (isExpanded) {
      setshowTable(false);
    }
    setisExpanded(!isExpanded);
  }
  function show() {
    if (isExpanded) {
      setshowTable(true);
    }
  }
  useEffect(() => {
    var key = api_key;

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=1174872&units=metric&appid=" +
        key
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTemp(data.main.temp);
      });
  }, []);

  return (
    <>
      <div
        onClick={handleClick}
        className={isExpanded ? "expanded" : "notExpanded"}
        onAnimationEnd={show}
      >
        <h1>{Temp}</h1>
        <h2>Karachi,Pakistan</h2>
        <h3>
          {time.getHours()}:{time.getMinutes()}
        </h3>

        {showTable && (
          <>
            <h2>HourlyWeather</h2>
            <HourlyWeather />
          </>
        )}
      </div>
    </>
  );
}
export default Weather;
