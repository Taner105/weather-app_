const Results = ({weather}) => {
    return(
        <>
        {weather.main != undefined && (
        <div className="result">
            <div className="city">{weather.name}, {weather.sys.country}</div>
            <div className="detail">
                <div className="degree">{Math.round(weather.main.temp)}°C</div>
                <div className="status">{weather.weather[0].description}</div>
            </div>
            
        </div>
        )}
         
        </>
       
    )
}
export default Results;