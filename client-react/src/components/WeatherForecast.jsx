import {useState, useEffect} from 'react';
import './WeatherForecast.css';

/** 
 * A component for rendering a weather forecast
 * @constructor
 */
function WeatherForecast() {
    const fakeData = [{"date":"2025-09-27","temperatureC":7,"temperatureF":44,"summary":"Sweltering"},{"date":"2025-09-28","temperatureC":9,"temperatureF":48,"summary":"Warm"}];
    const [forecast, setForecast] = useState([]);

    // Fetch the current forecast when the component is loaded    
    useEffect(() => {
        fetch('/api/weatherforecast')
        .then(res => res.json())
        .then(data => setForecast(data))
    }, [])

    // Return the rendered forecast
    return (
        <div>
            <h1>Upcoming Weather...</h1>
            <div className='weather-forecast-wrapper'>
                {forecast.map((day) => <WeatherForecastDay key={day.date} {...day} />)}
            </div>
        </div>
    )
}

/** A component representing a single day in a weather forecast  
 * @constructor
 * @param {object} params An object representing forecast data, with expected keys:
 *  - date:DateTime 
 *  - temperatureC:float 
 *  - temperatureF:float
 *  - summary:string
*/
function WeatherForecastDay({date, temperatureC, temperatureF, summary}) {
    return(
        <div className="weather-forecast-card">
            <div>{date}</div>
            <h3>{temperatureF}°F</h3>
            <p>{summary}</p>
        </div>
    )
}

export default WeatherForecast;