import React from 'react';
import './Footer.css';
import {BsInstagram,BsGoogle, BsPhone} from 'react-icons/bs';
import {FaLinkedin, FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <div>
            <div className='Footer_Section'>
            <img src={require('./Assests/logowhite.png')} alt='logo-img'/>
            <div className='Links_section_1'>
                Quick Link
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#Aboutus'>About Us</a></li>
                    <li><a href='#Pricing'>Pricing</a></li>
                    <li><a href='Faq'>FAQ</a></li>
                </ul>
            </div>
            <div className='Social_media_link'>
                Follow us
                <ul>
                    <li><a href='www.instagram'><BsInstagram  style={{marginRight:10 }}color='white'/>Instagram</a></li>
                    <li><a href='www.twitter.in'><FaTwitter style={{marginRight:10 }}color='white'/>Twitter</a></li>
                    <li><a href='www.linkedin.in'><FaLinkedin style={{marginRight:10 }} color='white'/>Linkedin</a></li>
                </ul>
            </div>
            <div className='contactus'>
                <h1>Contact Us</h1>
                <ul>
                <li><a href='www.sannithnalluri@gmail.com'><BsGoogle style={{marginRight:10 }} color='white'/>sannithnalluri@gmail.com</a></li>
                <li><BsPhone color='white'/>+91 9398112724</li>
                <li><a href='#Contact'>Terms and Conditions</a></li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Footer;
