import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Incubator from './Incubator/Incubator'
import StartupInfo from './Incubator/StartupInfo/StartupInfo'
import {useSelector} from 'react-redux'
import Error from './Error'
const Root = () => {
    return (      
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Incubator/>}/>
                    <Route exact path='/startup/:startupId' component={() => <StartupInfo/>}/>
                    
       
                    
                </Switch>
        </BrowserRouter>
     
    );
};


export default Root;