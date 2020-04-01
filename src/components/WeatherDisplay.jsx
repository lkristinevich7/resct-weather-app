import React from "react"

export class WeatherDisplay extends React.Component{
    constructor(){
        super();
        this.state= {
            weatherData: null
        };
    }
    componentDidMount(){
        const id= this.props.id;

        fetch("http://api.openweathermap.org/data/2.5/weather?id="+id+"&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial")
        .then(res=>res.json())
        .then(data=>{
            this.setState({ weatherData: data })
        })
        
    }
    render(){
        const weatherData = this.state.weatherData;
        if(!weatherData) {
            return <div>Loading...</div>
            }
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div>
                <h1>
                {weather.main} in {weatherData.name}
                <img src={iconUrl} alt={weatherData.description} />
                </h1>
                <p>Current: {((weatherData.main.temp-32)/1.8).toFixed(0)}°C</p>
                <p>High: {((weatherData.main.temp_max-32)/1.8).toFixed(0)}°C</p>
                <p>Low: {((weatherData.main.temp_min-32)/1.8).toFixed(0)}°C</p>
                <p>Wind Speed: {(weatherData.wind.speed*1.609).toFixed(0)} km/hr</p>
            </div>
        )
    }
}