import React, { useState } from 'react';
import { Accounts_Register } from '../api/API_Accounts';

export default function Forms_Landing_Login() {
    const [Form_Data, Form_Data_Set] = useState({
        Name: "",
        Email: "",
        Password: "",
        Password_Confirm: ""
    });

    const [Message, Message_Set] = useState("");

    const handleChange = (e) => {
        Form_Data_Set({...Form_Data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Form_Data.Password !== Form_Data.Password_Confirm){
            Message_Set("Password doesn't match");
            return;
        }

        try {
            const res = await Accounts_Register(Form_Data);
            Message_Set(res.data.message);
        } catch (Error) {
            Message_Set(Error.response?.data?.message || "Registration failed.");
            console.log(Error.response?.data || Error.message);
        }
    };

    return (
        <div className="Landing_Form_Content">
            <h1 className="Landing_Form_Title" Margin_Vertical>
                Register
            </h1>
            <form className="Input_Form" Composition="Linear" onSubmit={handleSubmit}>
                <label className="Input_Label">
                    Email address
                </label>
                <input name="Email" className="Input_Text" type="text" placeholder='Email address' onChange={handleChange}/>
                
                <label className="Input_Label">
                    Full name
                </label>
                <input name="Name" className="Input_Text" type="text" placeholder='Full name' onChange={handleChange}/>

                <label className="Input_Label">
                    Password
                </label>
                <input name="Password" className="Input_Text" type="password" placeholder='Password' onChange={handleChange}/>

                <label className="Input_Label">
                    Repeat password
                </label>
                <input name="Password_Confirm" className="Input_Text" type="password" placeholder='Repeat password' onChange={handleChange}/>
                <button type="submit" className="General_Button" Override_Form_Composition>
                    Send account registration request
                </button>
                {Message && <p>{Message}</p>}
            </form>
            <div className="Landing_Form_AltPagePrompt">
                <h4 className="Landing_Form_AltPagePrompt_Title">
                    Already have an account?
                </h4>
                <button className="General_Button" onClick={() => window.Element_Attribute_Set('Landing_Form', 'Form', 'Login')}>
                    Login
                </button>
            </div>
        </div>
    );
}
