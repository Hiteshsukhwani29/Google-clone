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
  const { data } = useGoogleSearch(text);

  //const data = Response;

  console.log(data);
  
  return (
    <div className='searchpage'>
      <div className='searchpage-header'>
        <Link to='/'>
          <img className='searchpage-logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png' />
        </Link>
        <div className='searchpage-searchbox'>
          <Search />
          <SearchPageOptions />
        </div>
      </div>

      {text && (
        <div className='searchpage-results'>
          <p className="searchpage-results-stats">
            {`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime} seconds)`}
          </p>

          {data?.items.map(item => (
            <div className='searchpage-result'>
              <a className='searchpage-result-url' href={item.link}>{item.displayLink}</a>
              <a href={item.link}><div className='searchpage-result-title'>{item.title}</div></a>
              <div className='searchpage-result-desc'>{item.snippet}</div>
            </div>
          )
          )}

        </div>
      )}
    </div>
  )
}

export default SearchPage