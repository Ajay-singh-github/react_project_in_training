import"../css/Cardmenu.css"

export default function Cardmenu({name,time,information,image}){
    
return (
<div className="slider-container2">

<div className="small-container2">
<img src={image}/>
<h1>{name}</h1>
<h3>{time}</h3>
<h4>{information}</h4>
</div>

</div>
);
}