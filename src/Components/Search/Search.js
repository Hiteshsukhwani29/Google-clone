import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Search.css';
import SearchIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import { actionType } from '../../reducer';
import { useStateValue } from '../StateProvider';

function Search({btns}) {

    
    const [{},dispatch] = useStateValue();
    const [input, setInput] = useState('');


    const history = useHistory();

    const search = (e) =>{
        e.preventDefault();
        dispatch({
            type:actionType.Set_Search_Term,
            text:input
        })
        history.push('/search');
    }

  return <form className='search'>
      <div className='search-box'>
          <SearchIcon className='search-icon'/>
          <input type='text' value={input} onChange={e=> setInput(e.target.value)} />
          <MicIcon className='mic-icon'/>
      </div>
      {btns?(
      <div className='search-btns'>
          <Button type='submit' onClick={search}>Google Search</Button>
          <Button>I'm Feeling Lucky</Button>
      </div>)
      :(<></>)}
      
  </form>;
}

export default Search;

