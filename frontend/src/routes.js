import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/register';
import Profile from './pages/profile';
import NewIncidente from './pages/newIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncidente}/>
            </Switch>
        
        
        </BrowserRouter>


    )

}

