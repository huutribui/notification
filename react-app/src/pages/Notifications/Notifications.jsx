import React from 'react';
import NotificationBlock from './NotificationBlock';
import { useState, useContext } from 'react';
import { InfoContext } from '../../components/InfoProvider';

const Notifications = () => {
    const context = useContext(InfoContext);

    return(
        <>
            <h1>Notifications</h1>
            {context.notifications.map((notification, idx) => {
                return <NotificationBlock key={idx} data={notification}/>

            })}
        </>
    )
}

export default Notifications;