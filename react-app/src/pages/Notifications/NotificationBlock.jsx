import React from 'react';
import MemoryIcon from '@mui/icons-material/Memory';
import PaymentIcon from '@mui/icons-material/Payment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import { InfoContext } from '../../components/InfoProvider';
import { formatDate } from '../../utilities/Helper';
import './NotificationBlock.css';

const NEW_STATUS = "new";
const EC2_TYPE = "EC2";
const BILLING_TYPE = "billing";
const NEW_PRODUCT_TYPE = "newProduct";
const DOWN_TIME_TYPE = "downtime";
const TYPE_MAP = {
    "billing" : {
        "text": "Billing",
        "className": "iconPicBillingNew"
    },
    "EC2": {
        "text": "Compute engine",
        "className": "iconPicEC2New"
    },
    "newProduct": {
        "text": "New product available!",
        "className": "iconPicProductNew"
    },
    "downtime": {
        "text": "Scheduled downtime",
        "className": "iconPicDowntimeNew"
    }
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
                        {props.data.type === EC2_TYPE && <MemoryIcon className={'iconPic ' + (props.data.status === NEW_STATUS ? TYPE_MAP[props.data.type].className : 'iconPicViewed')}/>}
                        {props.data.type === BILLING_TYPE && <PaymentIcon className={'iconPic ' + (props.data.status === NEW_STATUS ? TYPE_MAP[props.data.type].className : 'iconPicViewed')}/>}
                        {props.data.type === NEW_PRODUCT_TYPE && <NotificationsNoneIcon className={'iconPic ' + (props.data.status === NEW_STATUS ? TYPE_MAP[props.data.type].className : 'iconPicViewed')}/>}
                        {props.data.type === DOWN_TIME_TYPE && <ErrorOutlineIcon className={'iconPic ' + (props.data.status === NEW_STATUS ? TYPE_MAP[props.data.type].className : 'iconPicViewed')}/>}
                        
                    </div>
                    <div className={'textContent ' + (props.data.status !== NEW_STATUS ? "textGreyedOut" : "")}>
                        <div>
                            <span className='contentTextBold'>{TYPE_MAP[props.data.type].text} </span>{props.data.message}
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