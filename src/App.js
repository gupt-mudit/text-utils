import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';


function App() {
  const [mode,setMode]=useState("light");
  const [alerttext,setAlerttext]=useState(null);
  let toggle=()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="rgb(20,19,61)";
      setMode("dark");
       setAlerttext("dark mode is enabled");
       setTimeout(() => {
        setAlerttext(null);
       }, 3000);
    }
    else{
      document.body.style.backgroundColor="rgb(255,255,255)";
      setMode("light");
      setAlerttext("light mode is enabled");  
      setTimeout(() => {
        setAlerttext(null);
       }, 3000);
      }
  };
  return (
    
   <>

  <Navbar title="Text Utils" mode={mode} toggle={toggle}/>
  <Alert alerttext={alerttext}/>
   <Form mode={mode} alerttext={alerttext} setAlerttext={setAlerttext}/>
   
   

   
   </>
  );
}

export default App;
