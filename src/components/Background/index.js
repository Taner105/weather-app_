
import TakeImg from "./imgTake";


const Background = ({background}) => {
    
    return(
        <div className="background">
            <div className="overlay"></div>
            <TakeImg situation={background}/>

        </div>
    )
}
export default Background;