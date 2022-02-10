import React from 'react'
import { useStateValue } from '../../Components/StateProvider'

function SearchPage() {

    const [{text},dispatch] = useStateValue();

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