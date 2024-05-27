import AppStyle from './App.css';
import { useState } from "react";
import { WeatherCard } from "./components/WeatherCard";
import { WeatherInput } from "./components/WeatherInput";
import { WeatherButton } from './components/WeatherButton';
import { Title } from "./components/Title/Title";

function App() {
  var [local, setLocal] = useState('');

  const InputChangeHandler = event => {
    setLocal(event.target.value)
  }

  var [temperature, setTemperature] = useState('');
  var [weather, setWeather] = useState('');

  const APIKey = '5a69e1a297ec15a6c66557de2e5a8e60';
  
  var URL = `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${APIKey}&lang=pt_br`;;

  const APIFetch = () => {
    console.log(local);
    fetch(URL)
    .then((response) => response.json())
    .then(json => {
        setTemperature(`${Math.round(json.main.temp - 273.15)}ºc`);
        setWeather(json.weather[0].description);
    })
  }
  return (
    <div className="div-app">
      <Title>react-weather-card</Title>
      <div className='div-data'>
        <WeatherInput onChange={InputChangeHandler}/>
        <WeatherButton onClick={APIFetch}></WeatherButton>
      </div>
      <WeatherCard capital={local} temperature={temperature} weather={weather}/>
    </div>
  );
}

export default App;
