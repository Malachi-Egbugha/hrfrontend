import React, { useState, useEffect } from "react";
import { stats } from "../Apicalls/apicore";
import Layouttwo from "../Layout/Layouttwo";

const Dashboard = () => {
  const [values, setvalues] = useState({
    active: "po",
    deactive: "",
    total: "",
  });
  const { active, deactive, total } = values;
  const loadDsiplayStats = async () => {
    let getstats = await stats();
    const { totalActive, totalDeactive, totalUsers } = getstats;
    setvalues({
      ...values,
      active: totalActive,
      deactive: totalDeactive,
      total: totalUsers,
    });
    console.log(getstats);
  };

  useEffect(() => {
    loadDsiplayStats();
  }, []);
  return (
    <Layouttwo>
      <div class="main__container">
        <div class="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div class="main__greeting">
            <h1>MUTUAL TRUST MFB(DASHBOARD)</h1>
            <p>Welcome to your admin</p>
          </div>
        </div>

        <hr class="main__cards" />
        <div class="charts">
          <div class="charts__left">
            <div class="charts__left__title">
              <div>
                <h1>Reports</h1>
              </div>
              
            </div>
            <div id="apex1"></div>
          </div>
          <div class="charts__right">
            <div class="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
              </div>
             
            </div>
            <div class="charts__right__cards">
              <div class="card1">
                <h1>Deactivated Users</h1>
                <p>{deactive}</p>
              </div>

              <div class="card2">
                <h1>Active Users</h1>
                <p>{active}</p>
              </div>

              <div class="card3">
                <h1>Users</h1>
                <p>{total}</p>
              </div>

              <div class="card4">
                <h1>Applicants</h1>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouttwo>
  );
};
export default Dashboard;
