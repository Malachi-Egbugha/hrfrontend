import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Manageemployee from './Pages/Manageemployee'
import Addemployee from './Pages/Addemployee'
import Leaveapplication from './Pages/Leaveapplication'
import Leaveapply from './Pages/Leaveapply'
import Lineleaveapply from './Pages/Lineleaveapply'
import Appraisalapply from './Pages/Appraisalapply'

import {PrivateRoute,HrPrivateRoute, UnitHeadPrivateRoute} from './auth/Privateroute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/hrsystem" exact component={Signin} />
                <PrivateRoute path="/hrsystem/hrdashboard" exact component={Dashboard} />
                <PrivateRoute path="/hrsystem/profile" exact component={Profile} />
                <HrPrivateRoute path="/hrsystem/manageemployee" exact component={Manageemployee} />
                <HrPrivateRoute path="/hrsystem/addemployee" exact component={Addemployee} />
                <HrPrivateRoute path="/hrsystem/leaveapplications" exact component={Leaveapplication} />
                <PrivateRoute path="/hrsystem/leaveapply" exact component={Leaveapply} />
                <UnitHeadPrivateRoute path="/hrsystem/lineapply" exact component={Lineleaveapply} />
                <PrivateRoute path="/hrsystem/appraisal" exact component={Appraisalapply} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;



