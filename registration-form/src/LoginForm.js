import React, { useState } from "react";

function LoginForm(props) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const validEmail = (email) => {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email)
    }

    const [errors, setErrors] = useState({ email: "", password: "" })

    const validation = () => {
        let newErrors = {};

        if (!loginData.email) {
            newErrors.email = "Email is required";
        } else if (!validEmail(loginData.email)) {
            newErrors.email = "Invalid Email";
        }
        if (!loginData.password) {
            newErrors.password = "Password Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    console.log(errors)

    const handleSubmit = (e) => {
        e.preventDefault();

        const valid = validation();
        if (valid) {
            console.log("login", loginData)
        } else {
            console.log("Login fail")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    return (
        <div className="wrapper" onSubmit={handleSubmit}>
            <div className="form-left">
                <h2 className="text-uppercase">Don't have an account?</h2>
                <div className="form-field">
                    <input onClick={() => props.onFormSwitch('RegistrationForm')}
                        type="submit"
                        className="account"
                        value='Create Account' />
                </div>
            </div>
            <form className="form-right">
                <h2 className="text-uppercase">Login Form</h2>
                <div className="email">
                    <label>Email</label>
                    <input type="email"
                        className="input-field"
                        placeholder="abc@gmail.com"
                        name="email"
                        value={loginData.email}
                        onChange={handleChange}
                    />

                    <div className="error">{errors.email}</div>

                </div>
                <div className="row">
                    <div className="password">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            id="password"
                            className="input-field"
                            value={loginData.password}
                            onChange={handleChange}
                        />
                    <div className="error">{errors.password}</div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="option">I agree to the <a href="#">Terms and Conditions</a>
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="form-field">
                    <input type="submit"
                        value="login"
                        className="login"
                        name="login" />
                </div>
            </form>
        </div>
    );
}
export default LoginForm;