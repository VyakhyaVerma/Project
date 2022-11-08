import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,Routes,Link, Outlet,BrowserRouter as Router} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import * as Icon from 'react-bootstrap-icons';


const routing=(
  <Router>
    <Link to="/Register">Register</Link> 
    <Link to="/Login">Login</Link> 
    <Link to="/Contact">Contact</Link>
    <Routes>
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();