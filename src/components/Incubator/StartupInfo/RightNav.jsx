import React from 'react';
import {useSelector} from 'react-redux'
const RightNav = () => {
    const startupData=useSelector(s=>s.reducer.startupData)

    return (
        <div>
          {startupData.map((s)=>(
         <div>
               <div >
           <p>About</p>
             {s.about_startup}
           </div> 
           <div>
               Vision
               <p>{s.vision}</p>
           </div>
         </div>      
         
          ))}
                 
        </div>
    );
};

export default RightNav;