import React from 'react';
import MemoryIcon from '@mui/icons-material/Memory';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import { InfoContext } from '../../components/InfoProvider';
import './NotificationBlock.css';

const NotificationBlock = (props) => {
    const context = useContext(InfoContext);
    const [open, setOpen] = useState(true);

    const handleCloseNotification = (e, id) => {
        e.preventDefault();
        console.log("id: ", id);
        context.removeNotification(id);
    }
    return(
        <div className='notificationBlock'>
            
            <Collapse in={open}>
                <div className='blockContent'>
                    <div className='iconBlock'>
                        <MemoryIcon className='iconPic'/>
                    </div>
                    <div className='textContent'>
                        <div>
                            <span className='contentTextBold'>Testing </span>Your instance "learning-server" is provisioned and running.
                        </div>
                        <div className='dateTimeText'>6/7/2023 12:59PM</div>
                    </div>
                    <IconButton
                    aria-label="close"
                    color="disabled"
                    size="large"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                        <CloseIcon fontSize="inherit" onClick={(e) => {handleCloseNotification(e, 1)}}/>
                    </IconButton>

                </div>
            </Collapse>
        </div>
    )
}

export default NotificationBlock;