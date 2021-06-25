import React from 'react';
import {useParams,Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import  './Info.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import logo from '../../../images/Group2.png'
import search from '../../../images/Vector.png'
import range from '../../../images/Group 312.png'
import image from '../../../images/startImage.png';
import arrow from '../../../images/Arrow left (1).png'
import twitter  from '../../../images/Vector (1).png'
import facebook  from '../../../images/Vector (2).png'
import linkedin  from '../../../images/Vector (3).png'
import insta  from '../../../images/insta.png'
import blueTwit from '../../../images/Twitter.png'
import blueLin from '../../../images/Linkedin.png'
import blueFac from '../../../images/Facebook.png'
function StartupInfo  ()  {
    const {startupId} = useParams();
    const startup=useSelector(s => s.reducer.startupData.filter((el) => el.startup_id === +startupId))
    const [startupObj] = startup;
    console.log(startupObj)
    const startupData =useSelector(s=>s.reducer.startupData)
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

           
            <div className='main_startup_infoBlock'>

<div>
{
       <div className='startup_card' id='startup_card_infoBlock'>
           <Link  className='back_arrow'to='/main' >

               <img src={arrow} className='arrow'/>
           </Link>
       <div className="card_header">
           <img src={image} alt="" />
           <div className="card_name">{startupObj.startup_name}</div>
       </div>
 
<div className='card_price_progress'>
<div className="card_info" id='card_info_block'>
 <div className="card_fund" id='card_fund_block'>Fund raise</div>
 <div className="card_progress" id='card_progress_block'>50% complete</div>
 </div>
 <div className="card_price">{startupObj.startup_price}</div>
</div>
 <div className="card_range" >
     <img src={range} alt=""id='card_range_img' />
 </div>
 <div className="card_button">
 <button className='btn_fund'>Fund Startup</button>
               </div>
 
   </div>
}

</div>

             <div className='centre_block_startup'>
             {
                   <div className='left_nav_startup'>
                    <div className='start_date' id='info_startup'>{startupObj.startup_foundation}</div>
                    <div ><p className='start_site'>website</p>
                   <div className='left_navlinks' >
                   <p className='website_startUP'>{startupObj.website}</p>
                    <div className='startup_svg_block'>
                    <img src={blueTwit}  className='nav_icon' alt='icon'/>
                    <img src={blueLin} className='nav_icon'  alt='icon'/>
                    <img src={blueFac} className='nav_icon'  alt='icon'/>
                   

                    </div>
                   </div>
                    </div>
                    <div><p  className='start_site'>
                    Location
                    </p>
                    <p className='start_date'>{startupObj.location}</p>
                    </div>
                    <div className='team_size_start'>
                      <p className='start_site'>Team Size</p> 
                        <p className='start_date' id='info_startup'>{startupObj.teamSize}</p>
                    </div>
                    <div className='team_block'>
<p className='startup_team_header'>Meet the team</p>
                      <div className='team_info_block'>

<span></span>
                    <div><p className='team_names'>{startupObj.founder}</p>
                        <p className='startup_team'>Founder</p>
                        </div>
                      </div>

                      <div className='team_info_block'>

<span></span>
                        <div><p className='team_names'>{startupObj.coFounder}</p>
                        <p className='startup_team'>Cofounder</p>
                        </div>

</div>
<div className='team_info_block'>

<span></span>
                        <div ><p className='team_names'>
                        {startupObj.headGrowth}
                        </p>
                        <p className='startup_team'>Head of Growth</p>
                        </div>

</div>
<div className='team_info_block'>

<span></span>
                        <div><p className='team_names'>
                        {startupObj.headProduct}
                        </p>
                        <p className='startup_team'>Head of Product</p>
                        </div>
</div>



                  
                    <div  id='info_startup_third' className='startup_tags'>
                <div className='tags_header'>Tags</div>
               <div className='tags_block'>
               <span>Crypto</span>
                <span>Exchanges</span>
                <span>NFT</span>
                <span>Blockchain</span>
               </div>
               </div>
            </div>
                </div>
             
             }


<div>
    {
        
       <div className='right_nav_startup'>

<div>
    <p className='nav_right_header'>About startup</p>
    <div className='nav_right_info'>{startupObj.about_startup}</div>
</div>


            <div>
                <p className='nav_right_header'>Vision</p>
              <div className='nav_right_info'> {startupObj.vision}</div>
                </div>
            
            
            
            
            
            
            </div>
    }
</div>
             </div>
             <Slider  id =' slider'className='slider'>
  {startupData.map((s, index) => <div key={index}>

  <Link  to={`/startup/${s.startup_id}`} key={s.startip_id} className='startup_card' id='slide_startup_data'>
      <div className="card_header">
          <img src={image} alt="" />
          <div className="card_name">{s.startup_name}</div>
      </div>
<div className="card_descr">{s.startup_descr}</div>
<div className="card_info">
<div className="card_fund">Fund raise</div>
<div className="card_progress">50% complete</div>
</div>
<div className="card_price">{s.startup_price}</div>
<div className="card_range">
    <img src={range} alt="" />
</div>
<div className="card_button">
<button className='btn_fund'>Fund Startup</button>
{ <Link className='link_startup'>Learn more</Link> }
</div>

  </Link>
              
    
  </div>)}
</Slider>
            </div>
          
        </div>
    );
};

export default StartupInfo;