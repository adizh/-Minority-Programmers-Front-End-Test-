import React from 'react'
import {Link} from 'react-router-dom'
import IncubatorStartUps from './IncubatorStartUps'
const IncubatorLLink=()=>{
    return(
     <div>
            <div className='link_starts_blocks'>
 
 <div className='link_startup_first'>
     <Link className='link_startup_btn'>Advice  a startup</Link>
 </div>

<div className='link_startup_second'>
     <Link id ='second_link_startup' className='link_startup_btn'>Join Minority Ventures Cohort</Link>
 </div>

<div className='link_startup_third'>
     <Link className='link_startup_btn'>Help Code</Link>
 </div>

</div>
<IncubatorStartUps/>
     </div>
    )
}
export default IncubatorLLink