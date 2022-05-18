import { useState } from "react";
import "./ContactCard.Module.css";

function ContactCard(props){
    const {Name, Email, Phone ,Imgage}= props;
    const [Active,SetActive]=useState(true)
    return (<div>
     <div className="container">
     <div><img src={Imgage} alt={Name}/></div>
     <div>{Name}</div>
    <div>{Email}</div>


<div>
    {Active? (<div onClick={()=> SetActive(!Active)}>{" "}More Info{" "}</div>):
    (<div onClick={()=> SetActive(!Active)}>{Phone}</div>)}
</div>
    </div>
    </div>
    )
}

export default ContactCard;