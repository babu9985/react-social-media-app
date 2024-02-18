import React, { useState } from 'react';
import './Post.scss';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const [isliked,setLiked]= useState(false);

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="user-info">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className="date">1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" onClick={()=>setLiked(!isliked)}>
                        {!isliked ? <FavoriteBorderOutlinedIcon  className='icon'></FavoriteBorderOutlinedIcon> : <FavoriteOutlinedIcon className='icon'></FavoriteOutlinedIcon>}
                        <span>12 Likes</span>
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon className='icon'></TextsmsOutlinedIcon>
                       <span> 10 Comments</span>
                    </div>
                    <div className="item">
                        <ShareOutlinedIcon className='icon'></ShareOutlinedIcon>
                        <span>Shares</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
