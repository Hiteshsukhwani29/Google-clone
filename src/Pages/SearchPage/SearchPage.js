import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../../Components/StateProvider';
import useGoogleSearch from '../../useGoogleSearch';
import Response from '../../response';
import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import SearchPageOptions from './SearchPageOptions';

function SearchPage() {

  const [{ text }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(text);
  //const apikey = process.env.REACT_APP_CUSTOM_SEARCH_API

  const data = Response;

  console.log(data);
  //console.log(apikey);
  return (
    <div className='searchpage'>
      <div className='searchpage-header'>
        <Link to='/'>
          <img className='searchpage-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' />
        </Link>
        <div className='searchpage-searchbox'>
          <Search />
          <SearchPageOptions/>
        </div>
      </div>


      <div className='searchpage-results'>

      </div>
    </div>
  )
}

export default SearchPage