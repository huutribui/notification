import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './NavBar.css';
import { useContext } from 'react';
import { InfoContext } from './InfoProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NEW_STATUS = "new";

const NavBar = () => {
    const history = useHistory();
    const context = useContext(InfoContext);
    const [notiCount, setNotiCount] = useState(0);

    useEffect(() => {
        let newNotifications = context.notifications;
        newNotifications = newNotifications.map(noti => noti.status === NEW_STATUS);
        setNotiCount(newNotifications.length);
    }, [context.notifications]);

    const handleRedirect = (e, link) => {
        e.preventDefault();
        console.log(link)
        try {
			history.push(link);
		} catch (err) {
            console.log(err);
			window.alert('ERROR: ', err.message);
		}
    }

    return(
        <AppBar position="static" className='navBar'>
            <Toolbar className='navBarContents'>
                <div className='navBarLogo' onClick={e => handleRedirect(e, '/')}>Home</div>
            
                <IconButton
                    size="large"
                    aria-label="show new notifications"
                    color="inherit"
                    onClick={e => handleRedirect(e, '/notifications')}
                >
                    <Badge badgeContent={notiCount} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;