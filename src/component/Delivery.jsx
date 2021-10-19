import React from 'react';
import './Delivery.css';
import Filter from './samecontent/Filter';
import DeliveryCollection from './DeliveryCollection';
import TopBand from './TopBand';
import ExploreSection from './samecontent/ExploreSection';
import restaurant from './samecontent/restaurant';


const Delivery_Fliter_item=[{
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
]

const restaurantList = restaurant;

const Delivery = () => {
    return (
        <>
        <div>
         <Filter filterList={Delivery_Fliter_item} />
        </div>
        <DeliveryCollection />
        <TopBand />
        <ExploreSection list={restaurantList} collectionName="Delivery resuarants in Delhi" />
        </>
    )
}

export default Delivery
