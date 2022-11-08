import {useState}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import  {dataServicesObj}  from "./DataServices";
import {useNavigate} from "react-router-dom";
import Register from "./Register";


function Login()
{
    let [uid, setUid]  = useState("");
    let [pwd, setPwd]  = useState("");
    let [result, setResult]  = useState("");
    //let [uname, setUname]  = useState("");
    //let [password, setPassword]  = useState("");
    let navigate=useNavigate();
    function inputUidChange(event)
    {
        setUid(event.target.value);   
    }

    function inputPwdChange(event)
    {
        setPwd(event.target.value);   
    }
    //let  [customersArray, setCustomersArray] = useState([]);
       
      /*let uname=[];
      let password=[];
      for(let item of customersArray)
      {
        uname.push(item.uname);
        password.push(item.password);
      }
      console.log(pwd);*/
      let  str="";
    let loginClick  = function()
    {
            dataServicesObj.getAllCustomers().then( response =>  
            { 
                let customersArray = response.data ;

               var Obj = customersArray.find( item => item.uname==uid && item.password==pwd );

               if(Obj!=null)
               {
                //alert('User Logged In');
                str  = "Welcome";
                navigate(`/Register`);
               }
                
                else
                {
                    str  = "Invalid User ID or Password";
                } 
                setResult(str);
            }); 
            
           
            
        
    }

    return (
        <>
            <fieldset align="center" className="text-bg-dark">
                <legend align="center">User Login</legend>
                <hr/>
                User Id  :  
                <input type="text"  onChange={inputUidChange}  />
                <br/><br/>
                Password :  
                <input type="password"  onChange={inputPwdChange}  />
                <br/><br/>
                <input type="button" className=" btn btn-primary" value="Login"  onClick={loginClick}  />
                <hr/>
                <p>{result}</p>
            </fieldset>

        </>
    );
}
export default Login;
