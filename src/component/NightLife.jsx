import React from 'react';
import './NightLife.css';
import DiningCollection from './DiningCollection';
import Filter from './samecontent/Filter';
import ExploreSection from './samecontent/ExploreSection';
import nightlifedata from './nightlifedata';


const Night_Fliter_item=[{
    id:1,
    icon:<i class="fi fi-rr-filter icon-css"></i>,
    title:"Filters",
},
{
    id:2,
    
    title:"Pubs and Bars",
},
{
    id:3,
    icon:<i class="fi fi-rr-interlining icon-css"></i>,
    title:"Distance",
},
{
    id:4,
    
    title:"Rating 4.0+",
},
{
    id:5,
    
    title:"Great Offer",
},
]


const CollectionList = [
    {
        id:1,
        title:"Where's The Party?",
        cover:"https://b.zmtcdn.com/data/collections/46380426f0382033b1f2dc5fbb06afd3_1614073530.jpg",
        places:"18 Places",
    },
    {
        id:2,
        title:"Beer in a Bar",
        cover:"https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg",
        places:"30 Places",
    },
    {
        id:3,
        title:"Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/d2a823d826014bcac2bc0cbf810b8f91_1614323136.jpg",
        places:"15 Places",
    },
    {
        id:4,
        title:"Most Romantic Restaurants",
        cover:"https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg",
        places:"11 Places",
    },
    {
        id:5,
        title:"Kebab Places",
        cover:"https://b.zmtcdn.com/data/collections/738be706f86548e91081290544449919_1427112719_l.jpg",
        places:"6 Places",
    },
    {
        id:6,
        title:"Great Buffets",
        cover:"https://b.zmtcdn.com/data/collections/1c0daad79bed143d6a59f67efb6fe196_1535355063.jpg",
        places:"12 Places",
    },
]

const nightList = nightlifedata;
const NightLife = () => {
    return (
        <>
        <div>
        <DiningCollection list={CollectionList} />
        <Filter filterList={Night_Fliter_item} />
        <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Lucknow"/>
        </div>
        </>
    )
}

export default NightLife
