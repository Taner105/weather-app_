import Rainy from "../../assets/rainy.jpg"
import Foggy from "../../assets/foggy.jfif"
import Cloud from "../../assets/cloud.jpg"
import Karli from "../../assets/karli.jpg"
import Rainbow from "../../assets/rainbow-weather.jpg"
import Storm from "../../assets/storm.png"
import Sunny from "../../assets/sunny.jpg"

const TakeImg = ({situation}) => {
        switch(situation){
            case "Rain":
                return <img className="background-img" src={Rainy} alt="Rainy" />
            case "Drizzle":
                return <img className="background-img" src={Rainy} alt="Rainy" />
            case "Clear":
                return <img className="background-img" src={Sunny} alt="Sunny" />
            case "Mist":
                return <img className="background-img" src={Foggy} alt="Foggy" />
            case "Snow":
                return <img className="background-img" src={Karli} alt="karlı" />
            case "Storm":
                return <img className="background-img" src={Storm} alt="Storm" />
            case "Clouds":
                return <img className="background-img" src={Cloud} alt="Cloud" />
            default:
                return <img className="background-img" src={Rainbow} alt="rainbow" />
        }
    }

    export default TakeImg;