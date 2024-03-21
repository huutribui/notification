import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './NavBar.css';
import { useContext } from 'react';
import { InfoContext } from './InfoProvider';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
	const history = useHistory();
	const context = useContext(InfoContext);

	const handleRedirect = (e, link) => {
		e.preventDefault();
		console.log(link);
		try {
			history.push(link);
		} catch (err) {
			console.log(err);
			window.alert('ERROR: ', err.message);
		}
	};

	return (
		<AppBar position="static" className="NavBar">
			<Toolbar className="navBarContents">
				<div className="navBarLogo" onClick={(e) => handleRedirect(e, '/')}>
					Home
				</div>

				<IconButton
					size="large"
					aria-label="show new notifications"
					color="inherit"
					onClick={(e) => handleRedirect(e, '/notifications')}
				>
					<Badge badgeContent={context.newNotificationCount} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
