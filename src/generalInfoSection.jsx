import { useState } from "react";
function SubmitBtn({firstName, lastName}){
    const [disabled, setDisabled] = useState(false);
    const submitAction = () => {
        setDisabled(true);
        const fullName = `${firstName} ${lastName}`;
        const paragraph = document.createElement("p");
        paragraph.textContent = fullName;
        document.getElementById("CVHtml").appendChild(paragraph);
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach(input => input.classList.add("invisible"));

    };
    return(
        <button onClick={submitAction} disabled= {disabled}>Submit</button>
    );
}

function EditBtn(){
    const EditAction = () => {
        const inputs = document.querySelectorAll("input[type='text']");
        inputs.forEach(input => input.classList.remove("invisible"));
    };
    return(
        <button onClick={EditAction}>Edit</button>
    );
}

export function GeneralInfoSection() {
    const [name, setname] = useState({
        firstName:'',
        lastName:''
    });
    
    return(
        <div>
           <h1>Please Input General Info </h1> 

           <input type="text" placeholder="First Name" value={name.firstName} onChange={((e) => setname({...name, firstName: e.target.value}))} />
           <input type="text" placeholder="Last Name" value={name.lastName} onChange={((e) => setname({...name, lastName:e.target.value}))} />
           <SubmitBtn firstName = {name.firstName} lastName = {name.lastName}  />
           <EditBtn />
           <div id="CVHtml"></div>
        </div>
    );
}