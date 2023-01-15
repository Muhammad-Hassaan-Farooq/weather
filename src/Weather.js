import "./Weather.css";

function Weather() {
  let time = new Date();
  return (
    <>
      <div>
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
