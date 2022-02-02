import React from 'react-router-dom';
import Routes from ''
import { Main } from './main';

function Search () {
    return(
      
        <nav className='search-container'>
          { Main }
          <ul className='search-list'>
            { SearchItems.map((SearchLinks, index) => {
              return <li>
                      <a className= {searchLinks.name} href= {searchLinks.url}>
                        {searchLinks.title}
                      </a>
                     </li>
            } )
            }
          </ul>
        </nav>
   
    )}

export default Search;