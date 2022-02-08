import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core'

function Search() {

    const [input, setInput] = useState('');

  return <div className='search'>
      <div className='search-box'>
          <SearchIcon className='search-icon'/>
          <input type='text' value={input} onChange={e=> setInput(e.target.value)} />
          <MicIcon className='mic-icon'/>
      </div>
      <div className='search-btns'>
          <Button onClick={Search}>Google Search</Button>
          <Button>I'm Feeling Lucky</Button>
      </div>
      
  </div>;
}

export default Search;

