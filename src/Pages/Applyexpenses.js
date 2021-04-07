import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layouttwo";
//import { signup, getAllUsers } from "../Apicalls/apicore";

const Applyexpenses = () => {
  return (
    <Layouttwo>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1>MFB MICROFINANCE BANK(ADD EMPLOYEES)</h1>
            <p>Welcome to your admin</p>
          </div>
        </div>
        <hr className="main__cards" />
        welcome to Apply expenses
      </div>
    </Layouttwo>
  );
};
export default Applyexpenses;
