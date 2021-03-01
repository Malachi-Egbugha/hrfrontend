import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Manageemployee from './Pages/Manageemployee'
import Addemployee from './Pages/Addemployee'
import Leaveapplication from './Pages/Leaveapplication'
import Leaveapply from './Pages/Leaveapply'
import {PrivateRoute,HrPrivateRoute} from './auth/Privateroute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/hrsystem" exact component={Signin} />
                <PrivateRoute path="/hrsystem/hrdashboard" exact component={Dashboard} />
                <PrivateRoute path="/hrsystem/profile" exact component={Profile} />
                <PrivateRoute path="/hrsystem/manageemployee" exact component={Manageemployee} />
                <PrivateRoute path="/hrsystem/addemployee" exact component={Addemployee} />
                <PrivateRoute path="/hrsystem/leaveapplications" exact component={Leaveapplication} />
                <PrivateRoute path="/hrsystem/leaveapply" exact component={Leaveapply} />


                
               
                

            </Switch>
        </BrowserRouter>
    )
};

export default Routes;



