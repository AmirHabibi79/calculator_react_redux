import {useEffect} from "react"
import "../styles/button.css"
// custom hook for keydown and key up events
// it checks if the key or code match the user pressed key 
// and calls cb and passes the type of event
const useKey=(key,code,cb)=>{
    useEffect(()=>{
        function keydownHandle(e){
            if(e.key===key||e.code===code){
                cb({type:"keyDown"})
            }
        }
        function keyupHandle(e){
            if(e.key===key||e.code===code){
                cb({type:"keyUp"})
            }
        }
        document.addEventListener("keydown",keydownHandle)
        document.addEventListener("keyup",keyupHandle)
        
    },[])
}
// button component
const Button=({name,color,onclick})=>{
    //getting props from buttons component
    const [dispatch,action,key,keyCode]=onclick
    // it is used for creating a button
    let button
    // if the key props passed code will be set that
    // and code used for button id  
    let code=key?key:name
    let clickhandler=(e)=>{ 
        // this is cb and what it does is when the user press a key
        // it adds a class to that specific button that makes it like
        // it's being clicked and when user stop pressing it removes
        // the class and also we are passing this to on click event
        if(!e){
            dispatch(action(name))
        }
        else if(e.type==="keyDown"){
            document.getElementById(code).classList.add("active")
            dispatch(action(name))
        } 
        else if(e.type==="keyUp"){
            document.getElementById(code).classList.remove("active")
        }
    };
    // we are passing key(code) and keycode because sometimes
    // key doesnt match like if passing c and user clicks C 
    useKey(code,keyCode,clickhandler)

            button=()=>(
                <button id={code}  onClick={()=>clickhandler()} className={color?"btn color":"btn"}>
                {name}
                </button>
            )
       
    return(
        button()
    )
}
export default Button