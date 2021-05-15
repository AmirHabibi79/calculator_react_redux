const Carditem=({num1,num2,op,result})=>{

    return(
        <div className="item">
            <span>{num1}</span>
            <span>{op+" "}</span>
            <span>{num2+" "}</span>
            <span>=</span>
            <span>{" "+result}</span>
            <div className="line"/>
        </div>
    )
}

export default Carditem