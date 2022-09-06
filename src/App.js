import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
let name="tehreem";
function App() {
  
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
    
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#003F5D';
      showAlert("Dark mode is enabled","success");
      document.title="TextUtils-Dark Mode";
      setInterval(() => {
        document.title="TextUtils is amazing";
      }, 2000);
      setInterval(() => {
        document.title="Download textutils";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
      document.title="TextUtils-Light Mode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title={name} mode={mode} togleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
      {/* <About/> */}
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} textwrite="Enter the text you want to analyze"/>}/>
        </Routes>
    </div>
    </Router>
</>
  );
}

export default App;
