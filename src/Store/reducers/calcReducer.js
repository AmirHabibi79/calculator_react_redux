const Calcreducer=(state=["0","0","",[]],action)=>{
    switch(action.type){
        case "addtoView":
            var letters = /^[A-Za-z]+$/;
            if(state[0].match(letters)){
                return [action.payload,state[1],state[2],state[3]]
            }
            if(state[1].match(letters)){
                return [state[0],'',state[2],state[3]]
            }
            if(state[0]==="0"){
                if(action.payload==="."){
                    return [state[0]+action.payload,state[1],state[2],state[3]]
                }
                else{
                    return [action.payload,state[1],state[2],state[3]]
                }
            }
            else if(state[0].includes(".")&&action.payload==="."){
                return [state[0],state[1],state[2],state[3]]
            }else{
                return [state[0]+action.payload,state[1],state[2],state[3]];
            }
        case "erase":
            return state[0].length===1?["0",state[1],state[2],state[3]]:[state[0].substr(0,state[0].length-1),state[1],state[2],state[3]];
        case "eraseall":
            return ["0","","",state[3]]
        case "erasein":
            return ["0",state[1],state[2],state[3]]
        case "earsehistory":
            return [state[0],state[1],state[2],[]]
        case "change":
            return [(parseFloat(state[0])*-1).toString(),state[1],state[2],state[3]]
        case "op":
            return calcOp(state[0],state[1],state[2],action.payload,state[3])
           
        default:
            return [state[0],state[1],state[2],state[3]]
    }

}
   
const calcOp=(state1,state2,op,payload,history)=>{
    let num
    if(state1==="0"&&op.length===0){
        
        return ["0",state2,op,history]
    }
    else if(state1==="0"&&op.length===1&&payload!=="="){
        return ["0",state2.substr(0,state2.length-1)+` ${payload}`,payload,history]
    }
    else if(state1==="."){
        return [state1,state2,"",history]
    }
    if(payload==="="){
        
        if(state1.split(".")[1]===""){
            state1+="0"
        }

        if(op==="+"){
            num=parseFloat(state1)+parseFloat(state2.substr(0,state2.length-1))
            return [num.toString(),"","",[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]
        }
        else if(op==="-"){
            num=parseFloat(state2.substr(0,state2.length-1))-parseFloat(state1)
            return [num.toString(),"","",[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]
        } 
        else if(op==="÷"){
            num=parseFloat(state2.substr(0,state2.length-1))/parseFloat(state1)
            return [num.toString(),"","",[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]    
        }
        else if(op==="×"){
            
            num=parseFloat(state1)*parseFloat(state2.substr(0,state2.length-1))
            return [num.toString(),"","",[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]    
        }
        else{
            return [state1,"","",history]  
        }
    }
    else{
        if(state1.split(".")[1]===""){
            state1+="0"
        }
       
        switch(op){
            case "+":
                 num=parseFloat(state1)+parseFloat(state2.substr(0,state2.length-1))
                return ["0",num.toString()+` ${payload}`,payload,[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]
            case "-":
                 num=parseFloat(state2.substr(0,state2.length-1))-parseFloat(state1)
                 return ["0",num.toString()+` ${payload}`,payload,[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]
            case "×":
                num=parseFloat(state1)*parseFloat(state2.substr(0,state2.length-1))
                return ["0",num.toString()+` ${payload}`,payload,[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]
            case "÷":
                num=parseFloat(state2.substr(0,state2.length-1))/parseFloat(state1)
                return ["0",num.toString()+` ${payload}`,payload,[...history,{num1:state2.substr(0,state2.length-1),num2:state1,op:op,result:num}]]   
            default:
                return ["0",state1+` ${payload}`,payload,history]
        }
    }
}

export default Calcreducer
// 