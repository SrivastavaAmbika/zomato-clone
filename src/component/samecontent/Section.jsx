import React from 'react';
import './section.css';



const tabs=[{
id:1,
name:"Delivery",
active_image:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
backdrop:"rgb(252, 238, 192)",
inactive_image:"https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",   
},
{
    id:2,
    name:"Dining Out",
    active_image:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop:"rgb(252, 238, 192)",
    inactive_image:"https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",   
    },
    {
        id:3,
        name:"NightLife",
        active_image:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop:"rgb(252, 238, 192)",
        inactive_image:"https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",   
        },
            
]


const Section = ({activeTab,setActiveTab}) => {
    return (
        <>

<div className="container tab-option">
<div className="row">

<div className="col-6">
<div className="tab-wrap"> 
        {tabs.map((currElem)=>{
            return(
                <div onClick={()=>setActiveTab(currElem.name)} className={`tab_item absoulteCenter cur_poi ${activeTab===currElem.name && "active-Tab"}`}>
<div className="absoulteCenter tab_image-contain" style={{backgroundColor:`${activeTab===currElem.name?currElem.backdrop:""}`}}>
<img src={activeTab==currElem.name?currElem.active_image:currElem.inactive_image} alt="" className="tab_image" />
</div>
<div className="tab_name">{currElem.name}</div>
                </div>
                
            )
        })}
        
         </div>
</div>


</div>
</div>




        
        </>
    )
}

export default Section
