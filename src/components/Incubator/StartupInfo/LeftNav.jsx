import React from 'react';
import {useSelector} from 'react-redux'
const LeftNav = () => {
    const startupData=useSelector(s=>s.reducer.startupData)
    return (
        <div className='left_nav_startup'>
            {startupData.map((s)=>(
                <div>
                    <div className='start_date'>{s.startup_foundation}</div>
                    <div className='start_site'><p>website</p>
                    <p className='website_startUP'>{s.website}</p>
                    </div>
                    <div className='start_site'>Location
                    <p className='start_date'>{s.location}</p>
                    </div>
                    <div className='team_size_start'>
                      <p className='start_site'> Team Size</p> 
                        <p className='start_date'>{s.teamSize}</p>
                    </div>
                    <div className='team_block'>
<p className='startup_team_header'>Meet the team</p>
                      <div className='team_info_block'>

<span></span>
                    <div>{s.founder}
                        <p>Founder</p>
                        </div>
                      </div>

                      <div className='team_info_block'>

<span></span>
                        <div>{s.coFounder}
                        <p>Cofounder</p>
                        </div>

</div>
<div className='team_info_block'>

<span></span>
                        <div>{s.headGrowth}
                        <p>Head of Growth</p>
                        </div>

</div>
<div className='team_info_block'>

<span></span>
                        <div>{s.headProduct}
                        <p>Head of Product</p>
                        </div>
</div>



                    </div>
                </div>
            ))}
            <div className='startup_tags'>
                <div className='tags_header'>Tags</div>
                <span>Crypto</span>
                <span>Exchanges</span>
                <span>NFT</span>
                <span>Blockchain</span>
            </div>
        </div>
    );
};

export default LeftNav;