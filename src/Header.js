import React from 'react'
import './Header.css'

//components
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';

//material icons
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationIcon} title='Notifications' />

                <HeaderOption avatar="https://image.flaticon.com/icons/png/512/174/174857.png" title="me" />
            </div>
        </div>
    )
}

export default Header
