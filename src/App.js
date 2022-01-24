import React, { useState } from "react";
import Background from "./components/Background";
import Results from "./components/Results";

import Search1 from "./components/Search1";
import "./index.css"

function App() {
 const [weather, setWeather] = useState({})
  
  return (
   <section className="container-app">
     <Background  background={weather.weather && weather.weather[0].main}/>
     <div id="header">Weather App</div>
     <Search1 setWeather={setWeather} />
     <Results weather={weather} />

   </section>
  );
}

export default App;
