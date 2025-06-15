import React, {useEffect, useState} from 'react';
import UI_Header from '../components/UI_Header';
import UI_Ribbon from '../components/UI_Ribbon';
import UI_NavigationRail from '../components/UI_NavigationRail';
import UI_Panel_Left from '../components/UI_Panel_Left';
import UI_Panel_Center from '../components/UI_Panel_Center';
import UI_Panel_Right from '../components/UI_Panel_Right';
// import Test_Rooms_List from '../components/Test_Rooms_List';

export default function DR_Main(){
    

    return (
        <ui-main>
            <UI_Header/>
            <UI_Ribbon/>
            <UI_NavigationRail/>
            <ui-panels>
                <UI_Panel_Left/>
                <UI_Panel_Center/>
                <UI_Panel_Right/>
            </ui-panels>
        </ui-main>
        
    )
}