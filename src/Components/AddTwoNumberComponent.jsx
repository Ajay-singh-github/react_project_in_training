
import { useState } from "react"



export default function AddTwoNumberComponent(){
    const [firstnumber, setFirstNumber] = useState()
    const [secondnumber, setSecondNumber] = useState()
    const [total , setSeetanker]  =useState()
    

    const addNumber = () =>{
        setSeetanker(parseInt(firstnumber) + parseInt(secondnumber))
    }
    
    return(<div>
        <div style={{marginTop:"50px"}}>
        <input type="number" placeholder="Enter First Number" style={{marginRight:"20px"}} onChange={(e)=>setFirstNumber(e.target.value)}/>

        <input type="number" placeholder="Enter Second Number" style={{marginRight:"20px"}} onChange={(e)=>setSecondNumber(e.target.value)}/>

        <input type="button" value="ADD" onClick={()=>addNumber()}/>
        <div>Add:{total} </div>
        </div>
    </div>)
}








