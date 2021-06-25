import React,{useEffect} from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {updateStartupData} from '../redux/reducers/reducer'
const Home = () => {
    const dispatch=useDispatch()
   
   

    return (
        <div>
          
            <Link to='/main' onClick={()=>dispatch(updateStartupData())}>Login</Link>
        </div>
    );
};

export default Home;