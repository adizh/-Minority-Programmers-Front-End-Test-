import React from 'react'
import {useSelector} from 'react-redux'
import image from '../../../images/startImage.png';
import range from '../../../images/Group 312.png';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const StartUpCard=()=> {
const startupData=useSelector(s=>s.reducer.startupData)

    return (
      <div>

<Slider className='slider'>
  {startupData.map((s, index) => <div key={index}>

  <Link  to={`/main/${s.startup_id}`} key={s.startip_id} className='startup_card' id='slide_startup_data'>
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
    )
}

  
  export default StartUpCard 