import React, { useState } from 'react';

function RegistrationForm(props) {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div class="wrapper">
        <div class="form-left">
            <h2 class="text-uppercase">Information</h2>
            <div class="form-field">
                <input onClick={()=>props.onFormSwitch('LoginForm')} type="submit" class="account" value='Have an Account?'/>
            </div>
        </div>
        <form class="form-right" onSubmit={handleSubmit}>
                    <h2 class="text-uppercase">Registration Form</h2>
            <div class="row">
                <div class="first_name">
                    <label>First Name</label>
                    <input type="text" name="first_name" id="first_name" class="input-field"/>
                </div>
                <div class="last_name">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="input-field"/>
                </div>
            </div>
            <div class="email">
                <label>Your Email</label>
                <input type="email" class="input-field"  placeholder="abc@gmail.com"name="email" required/>
            </div>
            <div class="row">
                <div class="password">
                    <label>Password</label>
                    <input type="password" name="password" id="password" class="input-field"/>
                </div>
                <div class="confirm_password">
                    <label>Comfirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" class="input-field"/>
                </div>
            </div>
            <div class="mb-3">
                <label class="option">I agree to the <a href="#">Terms and Conditions</a>
                    <input type="checkbox" checked/>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="form-field">
                <input  type="submit" value="Register" class="register" name="register"/>
            </div>
        </form>
    </div>
  );
}
export default RegistrationForm;