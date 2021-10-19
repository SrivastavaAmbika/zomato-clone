import React from 'react';
import './DiningCollection.css';
import Slider from "react-slick";
import Nextarrow from './samecontent/Nextarrow';
import PrevArrow from './samecontent/PrevArrow';


const settings = {
    
    infinite: false,
    
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<Nextarrow />,
    prevArrow:<PrevArrow />,
  };





const DiningCollection = ({list}) => {
    
    return (
        <>
        <div className="container-fluid collection-wraper">
        <div className="container collection">
            <div className="collection-title">
                Collections
            </div>
            <div className="collection-subtitle-row">
<div className="collection-subtitle-title">
Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends 
</div>
<div className="collection-location">
    <div>
    All collections in Lucknow
    </div>
    <i class="fi fi-rr-caret-right caret-a"></i>
</div>
            </div>
<Slider {...settings}>
{list.map((item)=>(
    <div>
        <div className="collection-cover">
<img src={item.cover} className="collection-image" alt={item.title} />
<div className="gradient"></div>
<div className="caret-a collection-card-title">{item.title}</div>
<div className="collection-card-subtitle">
     <div className="collection-caret">
         {item.places}
         <i class="fi fi-rr-caret-right caret-a"></i>
     </div>
</div>
        </div>
    </div>
))}
</Slider>

        </div>
            
        </div>
        </>
    )
}

export default DiningCollection
