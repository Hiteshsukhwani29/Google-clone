import React from 'react';
import './Home.css';
import MoreAppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className='home'>
            <div className='home-header'>

                <div className='home-header-left'>
                    <Link to='about'>About</Link>
                    <Link to='store'>Store</Link>
                </div>

                <div className='home-header-right'>
                    <Link to='gmail'>Gmail</Link>
                    <Link to='images'>Images</Link>
                    <MoreAppsIcon />
                    <Avatar />
                </div>

            </div>

            <div className='home-body'>
                <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
            </div>
        </div>
    );
}

export default Home;
