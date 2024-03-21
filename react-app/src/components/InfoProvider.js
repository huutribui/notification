import React, { useEffect, useState } from 'react';

export const InfoContext = React.createContext();

let MOCK_DATA = [
    {
        "id": 0,
        "type": "billing",
        "message": "Your cloud credits will expire soon. Only $50 left.",
        "date": new Date() - 500000,
        "status" : "new"
    },
    {
        "id": 1,
        "type": "billing",
        "message": "Your cloud credits will expire soon. Only $50 left.",
        "date": new Date(),
        "status" : "new"
    },
    {
        "id": 2,
        "type": "EC2",
        "message": "Your instance \"learning-server\" is provisioned and running.",
        "date": new Date(),
        "status" : "new"
    },
    {
        "id": 3,
        "type": "newProduct",
        "message": "Run you AI-processing with our new Habana Gaudi 2 instances.",
        "date": new Date(),
        "status" : "new"
    },
    {
        "id": 4,
        "type": "downtime",
        "message": "Intel Developer Could instances will be unavailable from 2:00am to 2:30am on June 2nd.",
        "date": new Date(),
        "status" : "new"
    },
]

const InfoProvider = ({ children }) => {
    const [notifications, setNotifications] = useState(MOCK_DATA);

    const removeNotification = (id) => {
        console.log("removed noti:", id);
    }

    const viewedNotification = (id) => {
        console.log("viewed noti: ", id);
    }
    
    return (
		<InfoContext.Provider
			value={{
				notifications: notifications,
				viewedNotification: viewedNotification,
				removeNotification: removeNotification,
			}}
		>
			{children}
		</InfoContext.Provider>
	);
}
export default InfoProvider;