import {useState} from "react"


export default function ExampleOfLoop()
{
    const [arr,setArr] = useState(["mp","up","hr","uttarkhand"])

    return(<div>
        {arr.map((item)=>{
           return (<div>{item}</div>)
        })}
    </div>)
}