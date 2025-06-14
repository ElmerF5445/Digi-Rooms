import React, {useEffect, useState} from 'react';
import { Rooms_Get } from '../api/API_Test';
import DR_Logo from '../Assets/Images/DR_Logo.png';
import RED_Logo from '../Assets/Images/RED_Logo.png';
import Background from '../Assets/Images/NSDAPS_Main_Facade.png';
import Form_Landing_Login from '../components/Form_Landing_LogIn';
import Form_Landing_Register from '../components/Form_Landing_Register';
// import Test_Rooms_List from '../components/Test_Rooms_List';

export default function Rooms_Page(){
    const [Rooms, Room_Set] = useState([]);

    const Rooms_Load = async () => {
        const res = await Rooms_Get();
        Room_Set(res.data);
    }

    useEffect(() => {
        Rooms_Load();
       
    }, []);

    return (
        <div className="Landing">
        <div className="Landing_Content">
            <div className="Landing_Logo_DR">
                <img className="Landing_Logo_DR_Image" src={DR_Logo} draggable="false" loading="lazy"/>
            </div>
            <div className="Landing_Form" id="Landing_Form" Form="Login">
                <Form_Landing_Login/>
                <Form_Landing_Register/>
            </div>
            <div className="Landing_Logo_RED">
                <img className="Landing_Logo_RED_Image" src={RED_Logo} draggable="false" loading="lazy"/>
            </div>
            <div className="Landing_Version">
                <p className="Landing_Version_Text">
                    Prototype A [Version 1.0]. Please test the system thoroughly!
                </p>
            </div>
        </div>
        <div className="Landing_Banner">
            <img className="Landing_Banner_Image" src={Background} draggable="false" loading="lazy"/>
        </div>
    </div>
    )
}