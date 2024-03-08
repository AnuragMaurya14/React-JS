import React, { useState,useEffect } from 'react';

function RegistrationForm(props) {
  const [registrationData, setRegistrationData] = useState({
    first_name:'',
    last_name:'',
    email: '',
    password: '',
    confirm_password:'',
  });

const handleSubmit=(e)=>{
    e.preventDefault();
}

const handleChange=(e)=>{
const {name,value}=e.target;

setRegistrationData({
    ...registrationData,
    [name]:value,
});
};

const validEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email)
}
const [errors, setErrors] = useState({ email: "", password: "" })

    const validation = () => {
        let newErrors = {};

        if(!registrationData.first_name){
            newErrors.first_name="First name is required"
        }
        if(!registrationData.last_name){
            newErrors.last_name="Last name is required"
        }
        if (!registrationData.email) {
            newErrors.email = "Email is required";
        } else if (!validEmail(registrationData.email)) {
            newErrors.email = "Invalid Email";
        }
        if (!registrationData.password) {
            newErrors.password = "Password Required";
        }
        if(!registrationData.confirm_password){
            newErrors.confirm_password="Please confirm your Password"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

  return (
    <div className="wrapper">
        <div className="form-left">
            <h2 className="text-uppercase">Information</h2>
            <div className="form-field">
                <input onClick={()=>props.onFormSwitch('LoginForm')} 
                type="submit" 
                className="account" 
                value='Have an Account?'/>
            </div>
        </div>
        <form className="form-right" onSubmit={handleSubmit}>
                    <h2 className="text-uppercase">Registration Form</h2>
            <div className="row">
                <div className="first_name">
                    <label>First Name</label>
                    <input type="text" 
                    name="first_name" 
                    id="first_name" 
                    className="input-field" 
                    value={registrationData.first_name}
                    onChange={handleChange}/>
                </div>
                
                <div className="last_name">
                    <label>Last Name</label>
                    <input type="text" 
                    name="last_name" 
                    id="last_name" 
                    className="input-field" 
                    value={registrationData.last_name}
                    onChange={handleChange}/>
                </div>
                
            </div>
            <div className="email">
                <label>Your Email</label>
                <input type="email" 
                className="input-field" 
                placeholder="abc@gmail.com" 
                name="email" 
                value={registrationData.email}
                onChange={handleChange}/>
            </div>
            <div className="row">
                <div className="password">
                    <label>Password</label>
                    <input type="password" 
                    name="password" 
                    id="password" 
                    className="input-field" 
                    value={registrationData.password}
                    onChange={handleChange}/>
                </div>
            
                <div className="confirm_password">
                    <label>Comfirm Password</label>
                    <input type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    className="input-field" 
                    value={registrationData.confirm_password}
                    onChange={handleChange}/>
                </div>
                
            </div>
            <div className="mb-3">
                <label className="option">I agree to the <a href="#">Terms and Conditions</a>
                    <input type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className="form-field">
                <input  type="submit" 
                value="Register" 
                className="register" 
                name="register"/>
            </div>
        </form>
    </div>
  );
}
export default RegistrationForm;