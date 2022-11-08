import {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as icon from 'react-bootstrap-icons';


function  Contact()
{
    return <>
      <img src="/Images/i1.jpeg" width="100%" height="300" alt="Alternate text" /> 
      <div >
        <div align="center" style={{ backgroundColor: 'lightyellow',float:'left',width:'50%',borderRight:'1px solid darkgray'}} >
            <br/>
            <h2 >Send Us your Queries Here!</h2>
            <br/><br/>
            <textarea  rows="8" cols="50"></textarea> 
            <br/><br/><br/>
            <button className=" btn btn-primary">Send</button>
            <br/>
        </div>
        <div align="center" style={{ backgroundColor: 'lightyellow'}}>
            <br/>
            <h2>Contact Us Here!</h2>
            <br/><br/>
            <icon.Facebook color="royalblue" size={50} />
            <h3><a href="#" style={{textDecoration:'none'}}> Facebook.com</a></h3>
            <br/>
            <icon.Instagram color="royalblue" size={50}/>
            <h3><a href="#" style={{textDecoration:'none'}}> Instagram.com</a></h3>
            <br/>
            <icon.Twitter color="royalblue" size={50}/>
            <h3><a href="#" style={{textDecoration:'none'}}> Twitter.com</a></h3>
        </div>
        </div>              
    </>;
};
 export default Contact; 