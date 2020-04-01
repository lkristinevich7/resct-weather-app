import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { WeatherDisplay } from './components/WeatherDisplay';


const places = [
  { name: "Kraków", id: "3094802" },
  { name: "Warsaw", id: "4312734" },
  { name: "Wrocław", id: "3081368" },
  { name: "Gdańsk", id: "3099434" },
];

class  App extends React.Component{
  
  constructor(){
    super();
    this.state={
      activePlace: 3094802,
    };
  }
  render(){
    const activePlace = this.state.activePlace;

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <section className="city-panel"> 
          {places.map((place)=>(
            <button 
              key={place.id} 
              onClick={()=>{
                this.setState({activePlace: place.id})
              }}>
              {place.name}
            </button>
          
          ))} 
        </section> 
        <section className="weather-display">
          <WeatherDisplay key ={activePlace} id={activePlace}/> 
        </section>
      </main>
    </div>
  );
}
}

export default App;