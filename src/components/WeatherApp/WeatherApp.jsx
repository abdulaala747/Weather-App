import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import wind_icon from "../Assets/wind.png";
import humidtiy_icon from "../Assets/humidity.png";

const WeatherApp = () => {
    let api_key = "98d8a8dcce40414424032f7c2edbd0e8";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+ "%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp)+ "°C";
        location[0].innerHTML = data.name;

       

    }

    return (
        <div className='container'>
            <h1>Weather App</h1>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search Your City' />
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-temp">_°C</div>
            <div className="weather-location">City</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidtiy_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">_%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">_km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
