import React, { useContext } from 'react';
import './NavBar.scss';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import GridViewOutlined from '@mui/icons-material/GridViewOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlined from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlined from '@mui/icons-material/NotificationsOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext';
import Tooltip from '@mui/material/Tooltip';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const {toggle,darkMode} = useContext(DarkModeContext);
    const {user} = useContext(AuthContext);

    return (
        <div className='navbar'>
            <div className="left">
                <Link style={{ textDecoration: 'none' }} to='/'><span>DMGB Social</span></Link>
                <HomeOutlined></HomeOutlined>
                { !darkMode ? (<Tooltip title="Dark Mode" placement="bottom-start"><DarkModeOutlined onClick={toggle}></DarkModeOutlined></Tooltip>) : (<Tooltip title="Light Mode" placement="bottom-start"><WbSunnyOutlined onClick={toggle}></WbSunnyOutlined></Tooltip>)}
                <GridViewOutlined></GridViewOutlined>
                <div className="search">
                    <SearchOutlined></SearchOutlined>
                    <input type="text" placeholder='Search...'></input>
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlined></PersonOutlineOutlined>
                <EmailOutlined></EmailOutlined>
                <NotificationsOutlined></NotificationsOutlined>
                <div className="user">
                    <img src={user.profilePicture} alt="user" />
                    <span>{user.name}</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
