import React from 'react';
import './Collection.css';

const Collection = ({item}) => {
    return (
        <>
        <div className="Collection-cover">
        <img src={item.cover} alt={item.title}  className="Collection-cover-image"/>
        </div>
        <div className="Collection-cover-title">{item.title}</div>
        </>
    )
}

export default Collection
