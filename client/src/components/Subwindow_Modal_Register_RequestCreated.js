import React, { useState } from 'react';
import { Accounts_Login } from '../api/API_Accounts';

export default function Forms_Landing_Login() {
    const [Form_Data, Form_Data_Set] = useState(
        {
            Email: "",
            Password: ""
        }
    );

    const [Message, Message_Set] = useState("");

    const handleChange = (e) => {
        Form_Data_Set({...Form_Data, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await Accounts_Login(Form_Data);
            Message_Set("Login successful");
            console.log("Login successful.");
        } catch (Error) {
            Message_Set(Error.response?.data?.message || "Login failed.");
            console.log(Error.response?.data || Error.message);
        }
    }
    return (
        <div className="Landing_Form_Content">
            <h1 className="Landing_Form_Title" Margin_Vertical>
                Log in
            </h1>
            <form className="Input_Form" Composition="Linear" onSubmit={handleSubmit}>
                <label className="Input_Label">
                    Email address
                </label>
                <input name="Email" className="Input_Text" type="text" placeholder='Email address' onChange={handleChange} />
                <label className="Input_Label">
                    Password
                </label>
                <input name="Password" className="Input_Text" type="password" placeholder='Password' onChange={handleChange} />
                <button type="submit" className="General_Button" Override_Form_Composition>
                    Log in
                </button>
            </form>
            <div className="Landing_Form_AltPagePrompt">
                <h4 className="Landing_Form_AltPagePrompt_Title">
                    Don't have an account?
                </h4>
                <button className="General_Button" onClick={() => window.Element_Attribute_Set('Landing_Form', 'Form', 'Register')}>
                    Register
                </button>
            </div>
        </div>
    );
}
