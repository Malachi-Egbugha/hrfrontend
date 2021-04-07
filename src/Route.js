import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";
import GeneralProfile from "./Pages/Profile";
import Manageemployee from "./Pages/Manageemployee";
import Addemployee from "./Pages/Addemployee";
import Leaveapplication from "./Pages/Leaveapplication";
import Leaveapply from "./Pages/Leaveapply";
import Lineleaveapply from "./Pages/Lineleaveapply";
import Appraisalapply from "./Pages/Appraisalapply";
import Applyexpenses from "./Pages/Applyexpenses";
import Reportexpenses from "./Pages/Reportexpenses";
import Attendance from "./Pages/Attendance";

import {
  PrivateRoute,
  HrPrivateRoute,
  UnitHeadPrivateRoute,
} from "./auth/Privateroute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hrsystem" exact component={Signin} />
        <PrivateRoute
          path="/hrsystem/hrdashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoute
          path="/hrsystem/profile"
          exact
          component={GeneralProfile}
        />
        <HrPrivateRoute
          path="/hrsystem/manageemployee"
          exact
          component={Manageemployee}
        />
        <HrPrivateRoute
          path="/hrsystem/addemployee"
          exact
          component={Addemployee}
        />
        <HrPrivateRoute
          path="/hrsystem/leaveapplications"
          exact
          component={Leaveapplication}
        />
        <HrPrivateRoute
          path="/hrsystem/attendance"
          exact
          component={Attendance}
        />
        <PrivateRoute
          path="/hrsystem/leaveapply"
          exact
          component={Leaveapply}
        />
        <UnitHeadPrivateRoute
          path="/hrsystem/lineapply"
          exact
          component={Lineleaveapply}
        />
        <PrivateRoute
          path="/hrsystem/appraisal"
          exact
          component={Appraisalapply}
        />
        <PrivateRoute
          path="/hrsystem/expenseapply"
          exact
          component={Applyexpenses}
        />
        <PrivateRoute
          path="/hrsystem/expensereport"
          exact
          component={Reportexpenses}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
