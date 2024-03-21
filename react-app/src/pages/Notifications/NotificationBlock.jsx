import React from 'react';
import MemoryIcon from '@mui/icons-material/Memory';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import { InfoContext } from '../../components/InfoProvider';
import { formatDate } from '../../utilities/Helper';
import './NotificationBlock.css';

const NEW_STATUS = "new";
const TYPE_MAP = {
    "billing" : "Billing",
    "EC2": "Compute engine",
    "newProduct": "New product available!",
    "downtime": "Scheduled downtime"
};

const NotificationBlock = (props) => {
    const context = useContext(InfoContext);
    const [open, setOpen] = useState(true);

    const handleCloseNotification = (e) => {
        e.preventDefault();
        console.log("id: ", props.data.id);
        context.removeNotification( props.data.id);
    }

    const handleViewedNotification = (e) => {
        e.preventDefault();
        context.viewedNotification(props.data.id);
    }
    
    return(
        <div className='notificationBlock' onClick={handleViewedNotification}>
            
            <Collapse in={open}>
                <div className='blockContent'>
                    <div className='iconBlock'>
                        <MemoryIcon className={props.data.status === NEW_STATUS ? 'iconPic' : 'iconPicViewed'}/>
                    </div>
                    <div className={'textContent ' + (props.data.status !== NEW_STATUS ? "textGreyedOut" : "")}>
                        <div>
                            <span className='contentTextBold'>{TYPE_MAP[props.data.type]} </span>{props.data.message}
                        </div>
                        <div className='dateTimeText'>{formatDate(props.data.date)}</div>
                    </div>
                    <IconButton
                    aria-label="close"
                    color="disabled"
                    size="large"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                        <CloseIcon fontSize="inherit" onClick={handleCloseNotification}/>
                    </IconButton>

                </div>
            </Collapse>
        </div>
    )
}

export default NotificationBlock;