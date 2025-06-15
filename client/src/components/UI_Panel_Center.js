import React from 'react';
import {useAuth} from '../Contexts/AuthContext';

export default function UI_Panel_Center() {
    const {Account, Loading} = useAuth();

    if (Loading) {
        return null;
    }

    return (
        <ui-panel Center>
            <p className='General_Paragraph'>
                Welcome, {Account?.Name}. Pag nakita mo to, gumana HAHAHAHAHA CONGRATS
            </p>
        </ui-panel>
    );
}
