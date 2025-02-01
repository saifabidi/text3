
import './App.css';
// import About from './component/About';
import Alert from './component/Alert';
import NavBar from './component/NavBar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';



function App() {
  const [mode, setmode] = useState("light" );
  const [btn, setbtn] = useState("enbale dark mode");
  const [alert, setalert] = useState(null);
  // const [mode, setmode] = useState("dark");

  let showalert = (message , type) =>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1800);
  }




  const togglemode = () =>{
    if (mode == "light") {
      setmode("dark")
      setbtn("Dark mode Enable")
      document.body.style.backgroundColor = "grey"
      showalert("Dark mode has been enable " , "success")
      document.title= "Turner Home Dark mode"
      // setInterval(() => {
      //   document.title = "Turner Home "
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Download Turner with Amazing experience"
      // }, 2000);
    }
    
    else{
      setmode("light")
      setbtn("Light mode Enable")
      document.body.style.backgroundColor = "white"
      showalert("Light mode has been enable" , "success")
       document.title= "Turner Home Light mode"
    }

  }
  return (
  
      <>
        

<NavBar title = 'Turner' home = 'Home'   togglemode={togglemode} button = {btn} mode = {mode} 
></NavBar>
<Alert alert={alert}/>

<div className="container my-3">

          <TextForm showalert={showalert}  heading = 'Enter your text here' head = 'Text Summary' mode = {mode} ></TextForm>
         
         
        

      





</div>


        {/* <About></About> */}
      
      </>
     
  );
}

export default App;
