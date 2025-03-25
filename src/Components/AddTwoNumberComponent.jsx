
import { useState } from "react"



export default function AddTwoNumberComponent(){

    const [firstnumber, setFirstNumber] = useState()     //20
    const [secondnumber, setSecondNumber] = useState()  //50
    const [total , setSeetanker]  =useState()      //70
    const [message, setMessage] = useState()   //multiple

    const addNumber = (props) =>{
        if(props=="ADD")
        {
            setSeetanker(parseInt(firstnumber) + parseInt(secondnumber)) //70
            setMessage("ADD :")
        }

        if(props == "Subtract")
        {
            setSeetanker(parseInt(firstnumber) - parseInt(secondnumber)) //70
            setMessage("Subtract :")
        }

        if(props == "Multiple")
        {
            setSeetanker(parseInt(firstnumber) * parseInt(secondnumber)) //70
            setMessage("Multiple :")
        }

        if(props == "Divide")
        {
            setSeetanker(parseInt(firstnumber) / parseInt(secondnumber)) //70
            setMessage("Divide :")
        }
    }
    
    return(<div>
      <div style={{marginTop:"50px"}}>
        <input type="number" placeholder="Enter First Number" style={{marginRight:"20px"}} onChange={(e)=>setFirstNumber(e.target.value)}/> 

        <input type="number" placeholder="Enter Second Number" style={{marginRight:"20px"}} onChange={(e)=>setSecondNumber(e.target.value)}/>

        <input type="button" value="ADD" style={{marginRight:"10px"}} onClick={()=>addNumber("ADD")}/>    
        <input type="button" value="Subtract" style={{marginRight:"10px"}} onClick={()=>addNumber("Subtract")}/> 
        <input type="button" value="Multiple" style={{marginRight:"10px"}} onClick={()=>addNumber("Multiple")}/> 
        <input type="button" value="Divide" style={{marginRight:"10px"}} onClick={()=>addNumber("Divide")}/> 
        {/* <div>{message}{message?.length>0?":":""}   {total }</div> */}
        <div>{message}  {total }</div>



        
        </div>
    </div>)
}











