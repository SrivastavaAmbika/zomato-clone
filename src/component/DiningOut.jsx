import React from 'react';
import DiningCollection from './DiningCollection';
import './DiningOut.css';
import Filter from './samecontent/Filter';
import ExploreSection from './samecontent/ExploreSection';
import diningdata from './diningdata.js';

const CollectionList = [
    {
        id:1,
        title:"Live Sports Screenings",
        cover:"https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
        places:"18 Places",
    },
    {
        id:2,
        title:"Trending This Week",
        cover:"https://b.zmtcdn.com/data/collections/9662e85f2ba360c0da1d95153169ffbc_1625736567.png",
        places:"30 Places",
    },
    {
        id:3,
        title:"Best Bars & Pubs",
        cover:"https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
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

const Dining_Fliter_item=[{
    id:1,
    icon:<i class="fi fi-rr-filter icon-css"></i>,
    title:"Filters",
},
{
    id:2,
    
    title:"Pure Veg",
},
{
    id:3,
    icon:<i class="fi fi-rr-interlining icon-css"></i>,
    title:"Delivery Time",
},
{
    id:4,
    
    title:"Rating 4.0+",
},
{
    id:5,
    
    title:"Great Offer",
},
{
    id:6,
    
    title:"Online bookings",
},
{
    id:7,
    
    title:"Open Now",
},
{
    id:8,
    
    title:"Outdoor Seating",
},
{
    id:9,
    
    title:"Alcohal Served",
},
]

const diningList = diningdata;
const DiningOut = () => {
    return (
        <>
        <div>
           <DiningCollection  list={CollectionList} />
           <div className="container">
               <Filter filterList={Dining_Fliter_item} />
           </div>
           <ExploreSection  list={diningList} collectionName="Dine-Out Restaurants in Lucknow"/>
        </div>
        </>
    )
}

export default DiningOut
