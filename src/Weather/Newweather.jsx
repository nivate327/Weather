import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import WeatherData from './WeatherData';

const Newweather = () => {

  const [search, setSearch]=useState("Mumbai");
 
  const [weatherDeatils, setWeather]=useState({});

  const change=(event)=>
  {
    setSearch(event.target.value);
  }

  useEffect(()=>
  {
    const getApi=async()=>
    {
      try {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d6f736264fea7a05b64dc573806d9170`;
        let res=await fetch(url);
        let data=await res.json();

        //setCity(data.main)
        const {temp, pressure, humidity}=data.main;
        const {main: weatherMood}=data.weather[0];
        const {country, sunset}=data.sys;
        const {speed}=data.wind;
        const {name}=data;

        const myWeatherInfo={
          temp,
          pressure,
          humidity,
          weatherMood,
          country,
          speed,
          sunset,
          name
        }

        
        setWeather(myWeatherInfo);
      } catch (error) {
        console.log(error);
      }
    }

    getApi();

  }, [search]);

  return (
    <>
      <div className="container myCont">
        <div className="search mt-4">
          <input type="text" name="" id="" className='searchInput' onChange={change} value={search} placeholder='Search Weather...' />
        </div>

        
        <WeatherData weatherDetails={weatherDeatils}/>
      </div>
    </>
  )
}

export default Newweather
