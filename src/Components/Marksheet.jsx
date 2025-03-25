


export default function Marksheet()
{
    const [status,setStatus] = useState(false)

    const showmarksheet = ()=>{
     setStatus(true)
    }


    return(<div>
     

     <div>


        <input type="button" value="submit" onClick={()=>showmarksheet()}/>
     </div>

      {status == "true"?<div>marksheet result</div>:""}
      

    </div>)
}