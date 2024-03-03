import React,{useState}from 'react'
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm'
function App() {
  const [currentForm,setCurrentForm]=useState('RegistrationForm')
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      {
        currentForm==="RegistrationForm"? <RegistrationForm onFormSwitch={toggleForm}/>:<LoginForm onFormSwitch={toggleForm}/>
      }
   
    
    </div>
  );
}
export default App;

