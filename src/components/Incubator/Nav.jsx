import React from 'react';
import logo from '../../images/Group2.png'
import search from '../../images/Vector.png'
import {FiTwitter}  from 'react-icons/fi'
import {RiFacebookBoxLine} from 'react-icons/ri'
import {RiLinkedinBoxLine} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
const Nav = () => {
    return (
        <div>
              <nav className='main_nav'>
                <div className="nav_left">
                    <div className="nav_logo">
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="nav_links">
                         <FiTwitter className='svg'/> 
                         <RiFacebookBoxLine className='svg' />
                         <RiLinkedinBoxLine className='svg'/>
                         <RiInstagramLine className='insta'/>
                    </div>
                </div>
                <ul className="nav_right">
                    <li>Home</li>
                    <li>Startups</li>
                    <li>Learn</li>
                    <div className='nav_search'>
                        <img src={search} alt="" />
                    </div>
                </ul>
            </nav>
            <div className="nav_startup">
                <div className='nav_header'>Invest directly into minority innovations.</div>
                <button className='nav_btn'>View Startups</button>
            </div>
        </div>
    );
};

export default Nav;