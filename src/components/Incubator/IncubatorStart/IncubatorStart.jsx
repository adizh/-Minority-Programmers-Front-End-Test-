import React from 'react';


import StartUpCard from './StartUpCard'
const IncubatorStart = () => {

    return (
        <div className='main_incube'>
<div>
<div className='incub_header'>Featured Startups</div>
            <div className='incub_subheader'>Invest in the next billion dollar company today</div>
</div>
<StartUpCard/>

        </div>
    );
};

export default IncubatorStart;