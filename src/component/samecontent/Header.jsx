import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
        <div className="container">
        <div className="row ">
            
            <div className="col-10 header-item ">
                <img className="logo" src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomato-logo" />
            <div className="header-right">
                <div className="header-location">
                    <div className="location-wrap">
                        <div className="location-icon">
                        <i class="fi fi-rr-marker loc-icon location-icon-color"></i>
                        <div>Lucknow</div>
                        </div>
                        {/* <div className="location-drop down-icon"> */}
                        <i class="fi fi-rr-caret-down loc-icon"></i>
                        </div>
                        <div className="seperator"></div>
                        
                        
                        <div className="searchbar">
                        <i class="fi fi-rr-search searchbarA"></i>
                        <input type="text"  placeholder="Search for restaurant, cuisine or a dish" className="searchinput"/>
                        </div> 
                    </div>
                    
                
                <div className="profile-wrap">
                        <img src="https://images.vexels.com/media/users/3/182532/isolated/lists/a1439565590d2efbb1d518c13382534f-cup-yellow-icon.png" alt="" className="profile-pic" />
                        <span className="profile-name">Ambika</span>
                        <i class="fi fi-rr-angle-small-down drop-icon"></i>
                    </div>

            </div>
            
            </div>
<div className="col-1"></div>
        </div>  
        </div> 
        </>
    )
}

export default Header
