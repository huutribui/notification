import React from 'react';
import NotificationBlock from './NotificationBlock';
import { useContext } from 'react';
import { InfoContext } from '../../components/InfoProvider';
import './Notifications.css';

const Notifications = () => {
	const context = useContext(InfoContext);

	return (
		<div className='Notifications'>
			<div className="pageHeader">Notifications</div>
			{context.notifications.map((notification, idx) => {
				return <NotificationBlock key={idx} data={notification} />;
			})}
		</div>
	);
};

export default Notifications;
