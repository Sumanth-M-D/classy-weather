import React from "react";
import Day from "./Day";

//.

class Weather extends React.Component {
  componentWillUnmount() {
    console.log("Weather will unmount");
  }

  render() {
    const {
      temperature_2m_max: maxTemps,
      temperature_2m_min: minTemps,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2> Weahter in {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, i) => (
            <Day
              date={date}
              maxTemp={maxTemps[i]}
              minTemp={minTemps[i]}
              code={codes[i]}
              key={date}
              isToday={i === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
