import React from 'react';
import Nav from './Nav'
import IncubatorStart from './IncubatorStart/IncubatorStart'
import IncubatorLLink from './IncubatorLLink'
const Incubator = () => {
    return (
        <div>
          <Nav/>
          <IncubatorStart/>
         < IncubatorLLink/>
        </div>
    );
};

export default Incubator;