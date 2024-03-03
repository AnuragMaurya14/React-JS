import React,{useState} from "react";

function LoginForm(props) {
    const [loginDataata, setLoginData] = useState({
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
            <input onClick={()=>props.onFormSwitch('RegistrationForm')} type="submit" class="account" value='Create Account'/>
        </div>
    </div>    
    <form class="form-right" onSubmit={handleSubmit}>
                    <h2 class="text-uppercase">Login Form</h2>
            <div class="email">
                <label>Email</label>
                <input type="email" class="input-field"  placeholder="abc@gmail.com"name="email" required/>
            </div>
            <div class="row">
                <div class="password">
                    <label>Password</label>
                    <input type="password" name="password" id="password" class="input-field"/>
                </div>
            </div>    
            <div class="form-field">
                <input  type="submit" value="login" class="login" name="login"/>
            </div>
    </form>
</div>    
);
}
export default LoginForm;