import { useState } from "react";

const Search1 = ({setWeather}) => {
  const api = {
    key: "70b9d2ccff240359583c0cb6c4918d3c",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [parametre, setParametre] = useState("");

  const call = (e) => {
    if( e.key === "Enter"){
        fetch(`${api.base}?q=${parametre}&units=metric&lang=tr&appid=${api.key}`)
        .then(response => response.json())
        .then(result => {
            setParametre("");
            setWeather(result)
            console.log(result);

        })
    }
  }
  return (
    <div className="search">
      <input 
      type="text" 
      className="search-input" 
      placeholder="City" 
      onChange={(e) => setParametre(e.target.value)}
      value={parametre}
      onKeyPress={call}



      />
    </div>
  );
};
export default Search1;
