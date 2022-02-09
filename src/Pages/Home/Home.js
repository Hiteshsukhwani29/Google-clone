import React from 'react';
import './Home.css';
import MoreAppsIcon from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Search from '../Search/Search';

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
                    <MoreAppsIcon className='moreappsicon' />
                    <Avatar src='https://avatars.githubusercontent.com/u/55627571?v=4' />
                </div>

            </div>

            <div className='home-body'>
                <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
                <div className='home-body-search'>
                    <Search btns/>
                </div>
            </div>  
        </div>
    );
}

export default Home;
