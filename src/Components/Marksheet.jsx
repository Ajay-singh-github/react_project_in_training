import { useState } from "react"
import Swal from "sweetalert2"

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
  const [error,setError] = useState([{status1:'',message1:""},{status2:'',message2:""},{status3:'',message3:""},{status3:'',message3:""}])
  
  
  const submitf=()=>{
   if(!firstname.trim().length>0 ){
     return setError({status1:"firstname",message1:"PLease fill First Name"})   //break kaam karega ye return aur aake ka function nhi chalega.
    }else if(!lastname.trim().length>0){
      return  setError({status2:"lastname",message2:"PLease Fill Last Name"})
    }else if(!mobileno?.trim()?.length>0 )  // ?    optional chaining
    {
      return setError({status3:"mobileno",message3:"PLease Fill Mobile No."}) 
    }


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
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes !"
        }).then((result) => {
          if(result.isConfirmed)
          {

            setStatus(true)
          }
        });
        
  }
  
  
  return (
    <>{status==false?
    <div style={{ width: "100%", height: "100vh", backgroundColor: "#a1a7b3", margin: "0px important", display: 'flex', justifyContent: "center", alignItems: "center" }}>
    <div style={{ width: "60%", height: "70%", backgroundColor: "#e4e9f2", borderRadius: "10px" }}>
      <div style={{ margin: "7px", display: "flex", justifyContent: "space-evenly" }}>
       <span style={{color:"red"}}>*</span> 
       
       <div >
         <input type="text"  placeholder="Enter Ur First Name" style={{ width: "250px" }} onFocus={()=>setError({status1:"",message1:""})}  onChange={(e)=>setFirstname(e.target.value)}/>
         {error.status1=="firstname"?<div style={{color:"red"}}>{error.message1}</div>:""}
      </div>

      <div >
        <input type="text" placeholder="Enter Ur Last Name" style={{ width: "250px" }} onFocus={()=>setError({status2:"",message2:""})} onChange={(e)=>setLastName(e.target.value)}/>
        {error.status2=="lastname"?<div style={{color:"red"}}>{error.message2}</div>:""}
      </div>
        

      <div >
        <input type="text" placeholder="Enter Ur Mobile No." maxLength={10} style={{ width: "250px" }} onFocus={()=>setError({status3:"",message3:""})} onChange={(e)=>setMobileNo(e.target.value)}/>
        {error.status3=="mobileno"?<div style={{color:"red"}}>{error.message3}</div>:""}
        </div>
      </div>
      
      <div style={{ marginLeft: "38px", marginTop: "20px",marginRight:"38px" ,display:'flex',justifyContent:"space-between"}}>
        <div>
        <div>Gender</div>
        Male<input  type="radio" name="gender" value="Male" onClick={(e)=>setGender(e.target.value)}/>Female<input name="gender" type="radio" value="Female" onClick={(e)=>setGender(e.target.value)}/>
        </div>
        
        <select onChange={(e)=>setSgp(e.target.value)}>
          <option>-Select-</option>
          <option>Percentage</option>
          <option>Grade</option>
        </select>
        <input type="text" placeholder="Enter English Marks" style={{ width: "250px" }} maxLength={2} onChange={(e)=>setEnglishMarks(e.target.value)}/>

      </div>
      <input type="number" placeholder="Enter Math Marks" style={{ width: "250px" }} max={2} onChange={(e)=>setMathMarks(e.target.value)}/>
      <input type="number" placeholder="Enter Science Marks" maxLength={2} style={{ width: "250px" ,margin:"10px"}} onChange={(e)=>setScienceMarks(e.target.value)}/>
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

  <div style={{marginTop:"50px"}}><input type="button" value="Marksheet Form" onClick={()=>setStatus(false)}/></div>
  </div>
    }
     
   </>
  )
}