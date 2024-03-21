import React, { useEffect, useState } from 'react';

export const InfoContext = React.createContext();

const NEW_STATUS = "new";

const InfoProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [newNotificationCount, setNewNotificationCount] = useState(0);

    const removeNotification = (id) => {
        try{
            let notificiationsArr = [...notifications];
            let notificiationIdx = notificiationsArr.findIndex(e => e.id === id);
            if (notificiationIdx > -1) {
                if (notificiationsArr[notificiationIdx].status === NEW_STATUS) {
                    let count = newNotificationCount - 1;
                    setNewNotificationCount(count);
                }
                notificiationsArr.splice(notificiationIdx, 1);
                setNotifications(notificiationsArr);
            }
        } catch(e) {
            console.log("error removing notification: ", e);
        }
    }

    const viewedNotification = (id) => {
        try{
            let notificiationsArr = [...notifications];
            let notificiationIdx = notificiationsArr.findIndex(e => e.id === id);
            if (notificiationIdx > -1 && notificiationsArr[notificiationIdx].status === NEW_STATUS) {
                notificiationsArr[notificiationIdx].status = "viewed";
                let count = newNotificationCount - 1;
                setNewNotificationCount(count);
                setNotifications(notificiationsArr);
            }
        } catch(e) {
            console.log("error setting notification: ", e);
        }
    }

    const setNewNotifications = (data) => {
        try{
            let count = 0;
            data.forEach(e => {
                if (e.status === NEW_STATUS) count++;
            })
            setNotifications(data);
            setNewNotificationCount(count);
        } catch(e) {
            console.log("error setting new notifications: ", e)
        }
    }
    
    return (
		<InfoContext.Provider
			value={{
				notifications: notifications,
                newNotificationCount: newNotificationCount,
                setNewNotifications: setNewNotifications,
				viewedNotification: viewedNotification,
				removeNotification: removeNotification,
			}}
		>
			{children}
		</InfoContext.Provider>
	);
}
export default InfoProvider;