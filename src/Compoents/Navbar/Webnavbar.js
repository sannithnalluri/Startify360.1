import React from 'react';
import './Webnavbar.css'
const Webnavbar = () => {
    return (
        <div>
            <div className='web_navbar'>
                <div className='web_logo'>
                <img src={require('../Assests/logowhite.png')} alt='offerimg'/>
                </div>
                <div className='web_nav'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#Aboutus'>About Us</a></li>
                    <li><a href='#Offer'>Offer</a></li>
                    <li><a href='#Pricing'>Pricing</a></li>
                </ul>
                </div>
                <div className='web_contact_btn'>
                <button ><a href='#Contact'>Contact Us</a></button>

                </div>
            </div>
        </div>
    );
}

export default Webnavbar;
