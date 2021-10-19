import React from 'react';
import './FilterItem.css';

const FilterItem = ({CurrElem}) => {
    return (
        <>
          <div className="filter-Item">
              {CurrElem.icon && CurrElem.icon}
              <div>{CurrElem.title}</div>
          </div>  
        </>
    )
}

export default FilterItem




