import React from 'react';
import './Pricing.css';
import {BsPcDisplay} from 'react-icons/bs';
import {AiOutlineSetting,AiOutlineDatabase} from 'react-icons/ai';
import{BiCustomize}from 'react-icons/bi'
const Pricing = () => {
    return (
        <div className='Pricing_section'>
            <h1>Pricing Plan</h1>
            <div className='Pricing_container'> 
            <div className='price_contain'>
                <div className='mini_icon'>
                    <img src={require('./Assests/compassblack.png')} alt='compassblack'/>
                </div>
                <h3>App development</h3>
                <h1>Rs:29999/-</h1>
                <hr/>
                <p>Includes</p>
               <h4><BsPcDisplay size={20} style={{marginRight:10 }}/>UX/UI and Backend</h4>
               <h4><AiOutlineSetting style={{marginRight:10 }} size={20}/>6 Month Free Maintaince</h4>
               <h4><BiCustomize  style={{marginRight:10 }} size={20}/>Any Time Customized</h4>
                <div className='Pricing_button'>
                    <button><a  href='#Contact'>Get Started</a> </button>
                </div>
            </div>
            <div className='price_contain'>
                <div className='mini_icon'>
                    <img src={require('./Assests/compassblack.png')} alt='compassblack'/>
                </div>
                <h3>Web Application</h3>
                <h1>Rs:19999/-</h1>
                <hr/>
                <p>Includes</p>
               <h4><BsPcDisplay size={20} style={{marginRight:10 }}/>Frontend and Backend</h4>
               <h4><AiOutlineSetting style={{marginRight:10 }} size={20}/>3 Month Free Maintaince</h4>
               <h4><BiCustomize  style={{marginRight:10 }} size={20}/>Any Time Customized</h4>
               <h4><AiOutlineDatabase  style={{marginRight:10 }} size={20}/>Free DataBAse For 6 Months</h4>
               
               <div className='Pricing_button'>
                    <button><a  href='#Contact'>Get Started</a> </button>
                </div>
            </div>
            <div className='price_contain'>
                <div className='mini_icon'>
                    <img src={require('./Assests/compassblack.png')} alt='compassblack'/>
                </div>
                <h3>Web And Mobile Application</h3>
                <h1>Rs:39999/-</h1>
                <hr/>
                <p>Includes</p>
               <h4><BsPcDisplay size={20} style={{marginRight:10 }}/>Frontend and Backend</h4>
               <h4><AiOutlineSetting style={{marginRight:10 }} size={20}/>6 Month Free Maintaince</h4>
               <h4><BiCustomize  style={{marginRight:10 }} size={20}/>Any Time Customized</h4>
               <h4><AiOutlineDatabase  style={{marginRight:10 }} size={20}/>Free DataBase For 6 Months</h4>
               
               <div className='Pricing_button'>
                    <button><a href='#Contact'>Get Started</a> </button>
                </div>
            </div>
           
            </div>    
        </div>
    );
}

export default Pricing;
