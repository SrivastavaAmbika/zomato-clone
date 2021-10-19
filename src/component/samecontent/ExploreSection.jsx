import React from 'react';
import restaurant from './restaurant';
import './ExploreSection.css';
import ExploreCard from './ExploreCard';

const ExploreSection = ({list,collectionName}) => {
    return (
        <>
        <div className="container explore-section">
        <div className="collection">
        {collectionName}
        </div>
<div className="explore-grid">
    {list.map((restaurant)=>{
        return <ExploreCard restaurant={restaurant}  />
    })}
</div>
        
            
        </div>
        </>
    )
}

export default ExploreSection
