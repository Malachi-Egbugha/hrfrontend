import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Signin from './Pages/Signin'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Manageemployee from './Pages/Manageemployee'
import Addemployee from './Pages/Addemployee'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/hrdashboard" exact component={Dashboard} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/manageemployee" exact component={Manageemployee} />
                <Route path="/addemployee" exact component={Addemployee} />

                

            </Switch>
        </BrowserRouter>
    )
};

export default Routes;



