import React from 'react';
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

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <Link style={{ textDecoration: 'none' }} to='/'><span>DMGB Social</span></Link>
                <HomeOutlined></HomeOutlined>
                <DarkModeOutlined></DarkModeOutlined>
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
                    <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="user" />
                    <span>Ganesh Babu</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar
