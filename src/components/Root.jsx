import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Incubator from './Incubator/Incubator'
import StartupInfo from './Incubator/StartupInfo/StartupInfo'
import {useSelector} from 'react-redux'

import Home from './Home'
import Error from './Error'
const Root = () => {
    const startupData=useSelector(s=>s.reducer.startupData)
    return (      
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Home/>}/>
                    <Route exact path='/main' component={() => <Incubator/>}/>
                    
                       {(Object.entries(startupData).length === 0) ? '' : startupData.error ? <Error/> :
                                <Route exact path='/startup/:startupId' component={() => <StartupInfo/>}/>

            }
                    
                </Switch>
        </BrowserRouter>
     
    );
};


export default Root;