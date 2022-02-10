import React from 'react';
import './SearchPageOptions.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import ImageIcon from '@material-ui/icons/ImageOutlined';
import ShoppingIcon from '@material-ui/icons/LocalOfferOutlined';
import VideosIcon from '@material-ui/icons/OndemandVideoRounded';
import BooksIcon from '@material-ui/icons/BookOutlined';
import MoreIcon from '@material-ui/icons/MoreVertRounded';

function SearchPageOptions() {
    return (
        <div className='searchpage-options'>
            <div className='searchpage-options-left'>
                <div className='searchpage-option'>
                    <SearchIcon />
                    <Link to='/all'>
                        All
                    </Link>
                </div>
                <div className='searchpage-option'>
                    <ImageIcon />
                    <Link to='/images'>
                        Images
                    </Link>
                </div>
                <div className='searchpage-option'>
                    <ShoppingIcon />
                    <Link to='/shopping'>
                        Shopping
                    </Link>
                </div>
                <div className='searchpage-option'>
                    <VideosIcon />
                    <Link to='/videos'>
                        Videos
                    </Link>
                </div>
                <div className='searchpage-option'>
                    <BooksIcon />
                    <Link to='/books'>
                        Books
                    </Link>
                </div>
                <div className='searchpage-option'>
                    <MoreIcon />
                    <Link to='/more'>
                        More
                    </Link>
                </div>
            </div>
            <div className='searchpage-options-right'>
                <div className='searchpage-option'>
                    <Link to='/tools'>
                        Tools
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchPageOptions