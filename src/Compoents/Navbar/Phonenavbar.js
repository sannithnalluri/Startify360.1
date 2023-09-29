import React, { useState } from 'react';
import './Phoneweb.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from 'react-icons/rx'
import { motion } from 'framer-motion';
const Phonenavbar = () => {
     const [isMenuclicked,setMenuclicked] = useState(false)

    const handleclick =()=>{
        setMenuclicked(!isMenuclicked)
    }

    return (
        <div>
            <div className='phone_header'>
                <div className='phone_logo'>
                    <img src={require('../Assests/whitenbg.png')} alt='offerimg'/>
                </div>
                <div className='Menu_icons'>
                    <motion.div onClick={handleclick} style={{display:isMenuclicked?'none':'block'}}>
                        <GiHamburgerMenu size={30} color='white'/>
                    </motion.div>
                    <motion.div onClick={handleclick} style={{display:isMenuclicked?'block':'none'}}>
                        <RxCross2 size={30} color='white'/>
                    </motion.div>
                    
                </div>

            </div>
        </div>
    );
}

export default Phonenavbar;
