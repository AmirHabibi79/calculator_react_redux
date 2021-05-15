import Button from "./button"
import "../styles/buttons.css"
import {useDispatch} from "react-redux"
import {addtoView,erase,eraseall,erasein,op,change} from "../Store/actions/action"
// buttons component
const Buttons=()=>{
    const dispatch=useDispatch();
    return(
        <div className="buttons">
            <div className="row">
            {
            // rendering button component with four props
            // name: innerHTML
            // color: it changes the default color 
            // onclick: for onclick event
            }
            <Button name="CE" color  onclick={[dispatch,erasein,"","KeyE"]}/>
            <Button name="C" color  onclick={[dispatch,eraseall,"","KeyC"]}/>
            <Button name="&#x232b;" color onclick={[dispatch,erase,"","Backspace"]}/>
            <Button name="×" color  onclick={[dispatch,op,"*"]}/>
            </div>
            <div className="row">
            <Button name="7" onclick={[dispatch,addtoView]}/>
            <Button name="8" onclick={[dispatch,addtoView]}/>
            <Button name="9" onclick={[dispatch,addtoView]}/>
            <Button name="÷" color  onclick={[dispatch,op,"/"]}/>
            </div>
            <div className="row">
            <Button name="4" onclick={[dispatch,addtoView]}/>
            <Button name="5" onclick={[dispatch,addtoView]}/>
            <Button name="6" onclick={[dispatch,addtoView]}/>
            <Button name="+" color  onclick={[dispatch,op]}/>
            </div>
            <div className="row">
            <Button name="1" onclick={[dispatch,addtoView]} />
            <Button name="2" onclick={[dispatch,addtoView]}/>
            <Button name="3" onclick={[dispatch,addtoView]}/>
            <Button name="-"  onclick={[dispatch,op]} color/>
            </div>
            <div className="row">
            <Button name="+/-"  onclick={[dispatch,change,"","Tab"]}/>
            <Button name="0" onclick={[dispatch,addtoView]}/>
            <Button name="." onclick={[dispatch,addtoView]}/>
            <Button name="=" color  onclick={[dispatch,op,"=","Enter"]}/>
            </div>
        </div>
    )
}

export default Buttons