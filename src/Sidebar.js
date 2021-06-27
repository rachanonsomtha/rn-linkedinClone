import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg" alt="" />
                <Avatar className="sidebar_avatar" />
                <h2>Rachanon Somtha</h2>
                <h4>rachanon.som@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar_statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar_statNumber">5,543</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJs')}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('design')}
                {recentItem('developers')}
            </div>
        </div>
    )
}

export default Sidebar
