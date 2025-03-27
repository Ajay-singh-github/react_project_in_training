import { useState } from "react"

export default function Marksheet() {
  const [firstname, setFirstname] = useState('')
  const [lastname,setLastName] = useState('')
  const [mobileno,setMobileNo] = useState()
  const [sgp,setSgp] = useState('')
  const [englishmarks,setEnglishMarks] = useState()
  const [mathhmarks,setMathMarks] = useState()
  const [sciencehmarks,setScienceMarks] = useState()
  const [ssciencehmarks,setSscienceMarks] = useState()
  const [hindihmarks,setHindiMarks] = useState()
  const [gradesystem,setGradeSystem]= useState('')
  // const [male,setMale] = useState('')
  // const [female,setFemale] =useState('')
  const [gender,setGender] = useState('')
  const [status,setStatus] =useState(false)

  //&& and 
  // || or
  // != not operator
  
  const submitf=()=>{
    var percentage = (parseInt(englishmarks)+parseInt(mathhmarks)+parseInt(sciencehmarks)+parseInt(ssciencehmarks)+parseInt(hindihmarks))/5

    if(percentage>=90 && percentage<=100)
    {
      setGradeSystem("A")
      
    }else if(percentage>=80 && percentage<90)
    {
      setGradeSystem("B")
    }else if(percentage>=70 && percentage<80)
      {
        setGradeSystem("c")
      }else if(percentage>=60 && percentage<70)
        {
          setGradeSystem("D")
        }else{
          setGradeSystem("sorry You are fail.")
        }

    setStatus(true)    
  }
  
  return (
    <>{status==false?
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#a1a7b3", margin: "0px important", display: 'flex', justifyContent: "center", alignItems: "center" }}>
    <div style={{ width: "60%", height: "70%", backgroundColor: "#e4e9f2", borderRadius: "10px" }}>
      <div style={{ margin: "7px", display: "flex", justifyContent: "space-evenly" }}>
        <input type="text" placeholder="Enter Ur First Name" style={{ width: "250px" }} onChange={(e)=>setFirstname(e.target.value)}/>
        <input type="text" placeholder="Enter Ur Last Name" style={{ width: "250px" }} onChange={(e)=>setLastName(e.target.value)}/>
        <input type="text" placeholder="Enter Ur Mobile No." style={{ width: "250px" }} onChange={(e)=>setMobileNo(e.target.value)}/>
      </div>
      <div style={{ marginLeft: "38px", marginTop: "20px",marginRight:"38px" ,display:'flex',justifyContent:"space-between"}}>
        <div>
        <div>Gender</div>
        Male<input type="radio" name="gender" value="Male" onClick={(e)=>setGender(e.target.value)}/>Female<input name="gender" type="radio" value="Female" onClick={(e)=>setGender(e.target.value)}/>
        </div>
        
        <select onChange={(e)=>setSgp(e.target.value)}>
          <option>-Select-</option>
          <option>Percentage</option>
          <option>Grade</option>
        </select>
        <input type="text" placeholder="Enter English Marks" style={{ width: "250px" }} onChange={(e)=>setEnglishMarks(e.target.value)}/>

      </div>
      <input type="number" placeholder="Enter Math Marks" style={{ width: "250px" }} onChange={(e)=>setMathMarks(e.target.value)}/>
      <input type="number" placeholder="Enter Science Marks" style={{ width: "250px" ,margin:"10px"}} onChange={(e)=>setScienceMarks(e.target.value)}/>
      <input type="number" placeholder="Enter Socal Science Marks" style={{ width: "250px" }} onChange={(e)=>setSscienceMarks(e.target.value)}/>
      <input type="number" placeholder="Enter Hindi Marks" style={{ width: "250px" }} onChange={(e)=>setHindiMarks(e.target.value)}/>
      <div style={{marginTop:"50px",paddingLeft:"100px"}}>
      <input type="button" value="submit" onClick={()=>submitf()}/>
      </div>
    </div>
  </div>
    :
    <div style={{width:"100%",height:"100vh",background:"#8893a6"}}>
    <div>First Name :{firstname}</div>
    <div>Last Name:{lastname}</div>
    <div>Mobile No:{mobileno}</div>
    <div>Gender:{gender}</div>
    <div>Prefer:{sgp}</div>
    <div>English Marks:{englishmarks}</div>
    <div>Math Marks:{mathhmarks}</div>

    <div>Science Marks:{sciencehmarks}</div>
    <div>Social Science Marks:{ssciencehmarks}</div>
    <div>Hindi Marks:{hindihmarks}</div>

     {sgp=="Grade"?<div style={{marginTop:"50px"}}>Grade System:{gradesystem}</div>
     :
     <div style={{marginTop:"50px"}}>Percentage:{(parseInt(englishmarks)+parseInt(mathhmarks)+parseInt(sciencehmarks)+parseInt(ssciencehmarks)+parseInt(hindihmarks))/5}</div>
}
  </div>
    }
     
   </>
  )
}