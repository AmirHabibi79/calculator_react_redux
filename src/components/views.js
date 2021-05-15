import "../styles/views.css"
import {useSelector} from "react-redux"
// views components
const Views=()=>{
    const calc=useSelector(state=>state.calc)
    return(
        <div className="views">
            {
            //show after operating or selecting an operator
            }
            <h1 className="result">{calc[1] ==="0" ? "" : calc[1]}</h1>
            {
            //show user input
            }
            <h1 className="input">{calc[0]}</h1>
        </div>
    )
}

export default Views;