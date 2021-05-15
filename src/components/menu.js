import {useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import Carditem from "./menu_card_item"
import {toggleCard,earsehistory} from "../Store/actions/action"
import "../styles/menu.css"
const useMouse=(clas,cb)=>{
       useEffect(()=>{
        function clickHandle(e){
            if(e.target.closest(clas)){
                cb()
            }
        }
        document.addEventListener("mousedown",clickHandle)
       },[])
}
const useResize=(clas,cb)=>{
    useEffect(()=>{
        function resizeHandle(e){
            let ele=e[0];
                cb(ele.contentRect)
        }
        let observer=new ResizeObserver(resizeHandle)
        observer.observe(document.querySelector(clas))
    },[])
}
const Menu=()=>{
    const historys=useSelector(state=>state.calc[3])
    const togglestate=useSelector(state=>state.menu)
    const dispatch=useDispatch();
    const resizeHandle=(e)=>{
        if(e.height>window.innerHeight-70){
        document.getElementById("menu-card").style.overflowY="scroll"
        document.querySelector(".trash").classList.add("over")
        }
        else{
        document.getElementById("menu-card").style.overflowY=""
        if(document.querySelector(".trash")){
                document.querySelector(".trash").classList.remove("over")
        }
        }
    }
    
    useMouse(".shadow",()=>dispatch(toggleCard()))
    useResize(".items",resizeHandle)
    return(
        <>
        <div className="menu">
        <button onClick={()=>dispatch(toggleCard())} className="menu-btn">
        &#x2630;
        </button>
        <div id="menu-card" className={togglestate?"menu-card show":"menu-card"}>
        <div  className="items">
           
        {historys.length===0?<h1>there is no history</h1>:
            
                historys.map((history,i)=>(
                    <Carditem key={i} num1={history.num1} num2={history.num2} op={history.op} result={history.result}/>
                    ))
            
            
        }
        
        </div>
        {historys.length>0?<button onClick={()=>dispatch(earsehistory())} className="trash">&#128465;</button>:""}
        </div>
        </div>
        <div className={togglestate?"shadow show-shadow":"shadow"}/>
        </>
    )
}

export default Menu