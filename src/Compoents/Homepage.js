import React from 'react';
import Mainpage from './Navbar/Mainpage';
import './Homepage.css'
import Offer from './Offer';
import Pricing from './Pricing';
import Faq from './Faq';
import Footer from './Footer';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const Homepage = () => {
    useEffect(() => {
        try {
          ReactGA.pageview(window.location.pathname + window.location.search);
        } catch (error) {
          console.error('Error in Google Analytics tracking:', error);
        }
      }, []);
   
    return (
        <div>
            <Mainpage/>
            <div className='hero_section'>
            <div className='heroimg2'>
                <img src={require('../Compoents/Assests/heroimg.png')} alt='logoimage'/>
              </div>
              <div className='content'>
                <h1>
                We Craft Your Digital Story, You Write Your Success Story
                </h1>
                <p>
                Streamline your digital presence with Startify360 – your one-stop solution for affordable, hassle-free startup growth.
                </p>
                <div className='cta_section'>
                   <a href='#Offer'>View More</a> 
                    <button ><a  href='#Contact'>Get Started</a></button>
                </div>
              </div>
              <div className='heroimg'>
                <img src={require('../Compoents/Assests/heroimg.png')} alt='heroimage'/>
              </div>
            </div>
            <div  id='Aboutus' className='About_us'>
               <div className='about_img'>
                <img src={require('./Assests/aboutus2.jpg')} alt='aboutimage'/>
                </div>
                <div className='About_content'>
                <h1>About Us</h1>
                    <h2>About Startify360: Crafting Your Digital Success Story</h2>
                    <p>"At Startify360, we're dedicated to simplifying the digital landscape for startups. We offer a comprehensive range of services, from building websites and apps to executing effective marketing strategies. Our mission is to alleviate the digital hassles so you can focus entirely on growing your business. With affordability at the core of our ethos, we provide top-notch solutions that empower startups to thrive online. Trust us to handle</p>
                </div>
               

            </div>
            <div id='Offer'>
            <Offer/>
            </div>
          
            <div id='Pricing'>
                <Pricing/>
            </div>
            <div id='Faq'>
                <Faq/>
            </div>
            <div id='Contact'>
                <Footer/>
            </div>
        </div>
    );
}

export default Homepage;
