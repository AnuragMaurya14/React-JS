import React,{useState}from 'react'
import './App.css';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm'
function App() {
  const [currentForm,setCurrentForm]=useState('LoginForm')
  const toggleForm=(formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      {
        currentForm==="LoginForm"? <LoginForm onFormSwitch={toggleForm}/>:<RegistrationForm onFormSwitch={toggleForm}/>
      }
   
    
    </div>
  );
}
export default App;

