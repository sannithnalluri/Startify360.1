import React from 'react';
import Webnavbar from './Webnavbar';
import Phonenavbar from './Phonenavbar';

const Mainpage = () => {
    return (
        <div>
            <div className='webnav'>
            <Webnavbar/>
            </div>
            <div className='phonenav'>
                <Phonenavbar/>
            </div>
           
        </div>
    );
}

export default Mainpage;
