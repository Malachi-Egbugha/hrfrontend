import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Manageemployee from './Pages/Manageemployee'
import Addemployee from './Pages/Addemployee'
import Leaveapplication from './Pages/Leaveapplication'
import PrivateRoute from './auth/Privateroute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin} />
                <PrivateRoute path="/hrdashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile" exact component={Profile} />
                <PrivateRoute path="/manageemployee" exact component={Manageemployee} />
                <PrivateRoute path="/addemployee" exact component={Addemployee} />
                <PrivateRoute path="/leaveapplications" exact component={Leaveapplication} />


                

                

            </Switch>
        </BrowserRouter>
    )
};

export default Routes;



