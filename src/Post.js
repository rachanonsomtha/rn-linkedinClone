import React, { forwardRef } from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import { ChatOutlined, ShareOutlined, SendOutlined } from '@material-ui/icons';


const Post = forwardRef(({ name, description, message, photoUrl }, ref)  => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="grey" />
                <InputOption Icon={ChatOutlined} title="Comment" color="grey" />
                <InputOption Icon={ShareOutlined} title="Share" color="grey" />
                <InputOption Icon={SendOutlined} title="Send" color="grey" />
            </div>
        </div>
    )
})

export default Post
