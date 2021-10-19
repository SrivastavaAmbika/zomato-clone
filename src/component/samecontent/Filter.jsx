import React from 'react';
import './Filter.css';
import FilterItem from './FilterItem';


const Filter = ({filterList}) => {
    return (
        <div>
        <div className="container">
        <div className="row">
            
            <div className="col-6 FilterItem"> {filterList && filterList.map((CurrElem)=>{
        return <div>
            <FilterItem CurrElem={CurrElem} key={CurrElem.id} />
        </div>
    })

    }
    </div>
        </div>
           
        </div>
            
        </div>
    )
}

export default Filter
