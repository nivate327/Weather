import React, { useState } from 'react'
import { useEffect } from 'react';

const WeatherData = ({ weatherDetails }) => {

    const [weatherStatus, setWeather] = useState()

    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        country,
        speed,
        sunset,
        name
    } = weatherDetails;

    let sec = sunset;

    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()} : ${date.getMinutes()}`;

    let mydate=new Date();

    useEffect(() => {
        switch (weatherMood) {
            case "Clouds":
                setWeather("wi-day-cloudy")
                break;

            case "Haze":
                setWeather("wi-fog")
                break;

            case "Clear":
                setWeather("wi-day-sunny")
                break;

            case "Rain":
                setWeather("wi-day-rain")
                break;

            default:
                setWeather("wi-day-sunny")
                break;
        }

    }, [weatherMood]);
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 myCard">
                    <div className="weatherIcon">
                        <i class={`wi ${weatherStatus} sun`}></i>
                    </div>

                    <div className="row tempDetails">
                        <div className="col-xl-8 col-lg-8 col-md-8 col-8 leftside">
                            <h3 className='temp'>{temp} °C</h3>

                            <div className="climents-and-loc">
                                <h5 className='climent'>{weatherMood}</h5>
                                <p className="city">{name}, {country}</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-4 rightside">
                            <p className="date">{mydate.toLocaleDateString()}</p>
                            <p className="time">{mydate.toLocaleTimeString()}</p>
                        </div>
                    </div>

                    <div className="otherTemp">
                        <div className="sunset typeWeather">
                            <i class="fa-solid fa-sun"></i>

                            <div className="sunsetDetails">
                                <p>{timeStr} PM</p>
                                <p>Sunset</p>
                            </div>
                        </div>

                        <div className="sunset typeWeather">
                            <i class={"wi wi-humidity"}></i>

                            <div className="sunsetDetails">
                                <p>{humidity}</p>
                                <p>Humidity</p>
                            </div>
                        </div>

                        <div className="sunset typeWeather">
                            <i class="fa-solid fa-cloud-showers-heavy"></i>

                            <div className="sunsetDetails">
                                <p>Pressure</p>
                                <p>{pressure} MM</p>
                            </div>
                        </div>

                        <div className="sunset typeWeather">
                            <i class="fa-solid fa-wind"></i>

                            <div className="sunsetDetails">
                                <p>{speed}</p>
                                <p>Wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherData;
