export const addtoView=(num)=>
{
    return{
        type:"addtoView",
        payload:num
    }
}

export const erase=()=>
{
    return{
        type:"erase"
    }
}

export const eraseall=()=>
{
    return{
        type:"eraseall"
    }
}

export const erasein=()=>
{
    return{
        type:"erasein"
    }
}

export const earsehistory=()=>{

    return{
        type:"earsehistory"
    }
}

export const change=()=>
{
    return{
        type:"change"
    }
}

export const op=(oper)=>{
    return{
        type:"op",
        payload:oper
    }
}
export const toggleCard=()=>{
    return{
        type:"toggleCard"
    }
}