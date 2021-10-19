import React, { Component }  from 'react';
import './DeliveryCollection.css';
import Nextarrow from './samecontent/Nextarrow';
import PrevArrow from './samecontent/PrevArrow';
import Slider from "react-slick";
import Collection from './samecontent/Collection';




const Delivery_collection =[
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id:2,
        title:"Biryani",
        cover:"https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
    },
    {
        id:3,
        title:"Chicken",
        cover:"https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
    },
    {
        id:4,
        title:"Paratha",
        cover:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    },
    {
        id:5,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
    },
    {
        id:6,
        title:"Kebab",
        cover:"https://b.zmtcdn.com/data/o2_assets/71905bd8920905bf47ad57b406cc3ced1632716602.png",
    },
    {
        id:7,
        title:"Paneer",
        cover:"https://b.zmtcdn.com/data/o2_assets/9428a39fba2a97f7470b8f3f26af86af1632716606.png",
    },
    {
        id:8,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    },
]


const DeliveryCollection = () => {
    const settings = {
    
        infinite: false,
        
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow:<Nextarrow />,
        prevArrow:<PrevArrow />,
      };
    return (
        <>
        <div className="deliverycollection">
        <div className="container deliveryContent">
         <div className="row">
    
    <div className="col-6 collection-title">
    Eat What make you Happy
    </div>
    <Slider  {...settings}>
        {Delivery_collection.map((item)=>{
            return <Collection item={item} />
        })}
    </Slider>
</div>
        </div>
        </div>
        
        </>
        
    )
}

export default DeliveryCollection
