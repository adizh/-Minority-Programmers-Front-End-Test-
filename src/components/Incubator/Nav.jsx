import React from 'react';
import logo from '../../images/Group2.png'
import search from '../../images/Vector.png'
import twitter  from '../../images/Vector (1).png'
import facebook  from '../../images/Vector (2).png'
import linkedin  from '../../images/Vector (3).png'
import insta  from '../../images/insta.png'

const Nav = () => {
    return (
        <div>
              <nav className='main_nav'>
                <div className="nav_left">
                    <div className="nav_logo">
                        <img src={logo} alt='logo' />
                    </div>
                    <div className="nav_links">
                         <img src={twitter} className='nav_icon'/>
                         <img src={facebook} className='nav_icon'/>
                         <img src={linkedin} className='nav_icon'/>
                         <img src={insta} className='nav_icon'/>
                       
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