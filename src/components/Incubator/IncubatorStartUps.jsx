import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom';
import range from '../../images/Group 312.png'
import image from '../../images/startImage.png';
const IncubatorStartUps = () => {
    const startupData=useSelector(s=>s.reducer.startupData)
    return (
    <div className='upcoming_startups'>
            <div>
            <div className='incub_header'>Upcoming Startups</div>
                    <div className='incub_subheader'>These visionary companies and disruptors are on their journey to change the world.</div>
        </div>
            <div className='incubator_main_page'>
                {startupData.map((s)=>(
                       <Link  to={`/startup/${s.startup_id}`} key={s.startip_id} className='startup_card'>
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
                 <Link className='link_startup'>Learn more</Link> 


                </div>
                 
                   </Link>
                ))}
            </div>
            <button className='incubator_footer_btn'>Learn more</button>
        </div>
    
    );
};

export default IncubatorStartUps;