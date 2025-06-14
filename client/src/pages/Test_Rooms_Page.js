import React, {useEffect, useState} from 'react';
import { Rooms_Get } from '../api/API_Test';
import Test_Rooms_Form from '../components/Test_Rooms_Form';
import Test_Rooms_List from '../components/Test_Rooms_List';

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
        <div>
            <h1>
                Room Management
            </h1>
            <Test_Rooms_Form onRoomCreate={Rooms_Load}/>
            <Test_Rooms_List Rooms={Rooms} onRoomDeleted={Rooms_Load}/>
        </div>
    )
}