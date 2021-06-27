import React from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
//components
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';

//material icons
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';

import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {

    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationIcon} title='Notifications' />
                <HeaderOption onclick={logoutOfApp} title="me" avatar={true} />
            </div>
        </div>
    )
}

export default Header
