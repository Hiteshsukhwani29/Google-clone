import React from 'react'
import { useStateValue } from '../../Components/StateProvider'
import useGoogleSearch from '../../useGoogleSearch';

function SearchPage() {

  const [{ text }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(text);
  const apikey = process.env.REACT_APP_CUSTOM_SEARCH_API

  console.log(data);
  console.log(apikey);
  return (
    <div className='searchpage'>
      <div className='searchpage-header'>
        <h2>{text}</h2>
      </div>

      <div className='searchpage-results'>

      </div>
    </div>
  )
}

export default SearchPage