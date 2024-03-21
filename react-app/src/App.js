import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Notifications from './pages/Notifications/Notifications';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { InfoContext } from './components/InfoProvider';
import { useContext, useEffect } from 'react';

let MOCK_DATA = [
	{
		id: 0,
		type: 'billing',
		message: 'Your cloud credits will expire soon. Only $50 left.',
		date: '6/7/2023 12:59 PM',
		status: 'new',
	},
	{
		id: 1,
		type: 'billing',
		message: 'Your cloud credits will expire soon. Only $50 left.',
		date: '6/7/2023 4:45 AM',
		status: 'viewed',
	},
	{
		id: 2,
		type: 'EC2',
		message: 'Your instance "learning-server" is provisioned and running.',
		date: '6/7/2023 2:59 AM',
		status: 'new',
	},
	{
		id: 3,
		type: 'newProduct',
		message: 'Run you AI-processing with our new Habana Gaudi 2 instances.',
		date: '6/2/2023 12:59 PM',
		status: 'new',
	},
	{
		id: 4,
		type: 'downtime',
		message:
			'Intel Developer Could instances will be unavailable from 2:00 am to 2:30 am on June 2nd.',
		date: '6/1/2023 1:00 PM',
		status: 'new',
	},
];

function App() {
	const context = useContext(InfoContext);

	useEffect(() => {
		context.setNewNotifications(MOCK_DATA);
	}, []);

	return (
		<div className="App">
			<Router>
				<NavBar />
				<div className="pageContainer">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/notifications" component={Notifications} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
