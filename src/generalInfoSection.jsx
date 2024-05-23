import { useState } from "react";
function SubmitBtn({firstName, lastName, email,status ,setStatus}){
    // const [disabled, setDisabled] = useState(false);
    const submitAction = () => {
        const fullName = `${firstName} ${lastName}`;
        const paragraph = document.createElement("p");
        paragraph.textContent = `Name: ${fullName}, Email: ${email}`;
        document.getElementById("CVHtml").appendChild(paragraph);
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.classList.add("invisible"));
        setStatus(true);
    };
    return(
        <button id="SubmitBtn" onClick={submitAction} disabled= {status}className={status ? "disabled" : ""}>Submit</button>
    );
}

/*used status to enable disable submit button
passed status and setstatus to submitbtn function and passes btndisabler to edit butn
it was causing error cuz i didnt passed it as {BtnDisabler}
*/

function EditBtn({BtnDisabler}){ 
    const EditAction = () => {
        document.getElementById("CVHtml").innerHTML = '';
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.classList.remove("invisible"));
        BtnDisabler();
    };
    return(
        <button onClick={EditAction}>Edit</button>
    );
}

export function GeneralInfoSection() {
    const [name, setname] = useState({
        firstName:'',
        lastName:'',
        email: '',
    });
    const [status, setStatus] = useState(false)
    const BtnDisabler = () => {
        setStatus(false);
    }
    return(
        <div className="general-info">
           <h1>Please Input General Info </h1> 

           <input type="text" placeholder="First Name" value={name.firstName} onChange={((e) => setname({...name, firstName: e.target.value}))} />
           <input type="text" placeholder="Last Name" value={name.lastName} onChange={((e) => setname({...name, lastName:e.target.value}))} />
           <input type="email"  placeholder="Email"value={name.email}onChange={e => setname({ ...name, email: e.target.value })}/>
           <SubmitBtn firstName={name.firstName} lastName={name.lastName} email={name.email} status = {status}  setStatus = {setStatus}/>
           <div id="CVHtml"></div>
           <EditBtn BtnDisabler = {BtnDisabler}/>
      
    </div>
    );
}