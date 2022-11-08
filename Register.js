import {  useState } from 'react';
import './Register.css';
import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.css';
import  dataServiceObj  from "./DataService";
 
function Register()
{
    let  [A, setA] = useState([]);
    const [result, setResult] = useState("");
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState({  
            uname  :  "",            
            password  :  "",            
            email :  ""
    });
    function getDataClick()
  {  
        dataServiceObj.getDept().then( response =>  
        { 
            setA( response.data );
        } );  
  }
   
    function addDataClick()
    {  
          let Obj = {};
          Obj.password = password;
          Obj.uname = uname;
          Obj.email = email;
  
          dataServiceObj.addDept( Obj ).then( response => 
            {
                alert("User is Registered");   
            } );
  
    }
  

    function onSubmitClick(event)
    {
        event.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        let tempErrorObj = Object.assign({}, errors);

        tempErrorObj.uname =  (uname.length === 0)? "User Name is required..!" : "";
        tempErrorObj.password =  (password.length < 8)? "Password required 8 chars..! " : "";
        tempErrorObj.email =  validEmailRegex.test(email)? '': 'Email is not valid!';
        
        setErrors(tempErrorObj);

        let valuesArray = Object.values(tempErrorObj);
        let index  = valuesArray.findIndex( item => item.length !== 0 );

        if(index === -1)
        {
                // Logic to send this data to server using AJAX              
              setResult("Form Data is Valid -- Proceed to Login");              
        }
        else
        {           
         
           setResult("Form Data is invalid");
        }
    }

    

 
    return (
        <div>

            <fieldset className="text-bg-dark">
                <legend align="center" >User Registration</legend>
                <br/><br/>
                <form  onSubmit={onSubmitClick}  noValidate align="center" >

                 User Name  :  <input type="text" name="uname" onChange={(e) => setUname(e.target.value)}  />
                 <span className="error">{errors.uname}</span>
                 <br/><br/>

                 Password  :  <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}  />
                 <span className="error">{errors.password}</span>
                 <br/><br/> 

                 E-mail  :  <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}  />
                 <span className="error">{errors.email}</span>
                 <br/><br/> 
                <input className=" btn btn-primary"type="submit"   value="Verify"  />| |
                <button onClick={addDataClick} className=" btn btn-danger">Add User</button>
                <br/><br/>
                <h3>{result}</h3>
                </form>    
            </fieldset>

        </div>
    );   
}
export default Register;