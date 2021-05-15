import Views from "./views"
import Buttons from "./buttons"
import "../styles/calculator.css"
// Calculator components
const Calculator=()=>{
    return(
        <div className="calc">
            <Views/>
            <Buttons/>
        </div>
    )
}

export default Calculator