import "./HourlyWeather.css";
function HourlyWeather() {
  var quarterHours = ["00", "15", "30", "45"];
  var times = [];
  var weathers = [];
  for (var i = 0; i < 24; i++) {
    times.push(i + ":" + quarterHours[0]);
    weathers.push(quarterHours[0]);
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            {times.map(function (hour, map) {
              return (
                <td key={map}>
                  <h3>{hour}</h3>
                </td>
              );
            })}
          </tr>
          <tr>
            {weathers.map(function (hour, map) {
              return (
                <td key={map}>
                  <h3>{hour}</h3>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default HourlyWeather;
