import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layouttwo";
import { signup, getAllUsers } from "../Apicalls/apicore";
import Signupusers from "../Component/Signupusers";
import Showsuccess from "../Component/Showsuccess";
import Showerror from "../Component/Showerror";
import Showloading from "../Component/Showloading";

const Addemployee = () => {
  const [displaylinemanagers, setdisplaylinemanegers] = useState([]);
  const loadLineManagers = () => {
    getAllUsers().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setdisplaylinemanegers(data.users);
      }
    });
  };
  useEffect(() => {
    loadLineManagers();
  }, []);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    createUser: "",
    middlename: "",
    staffregnumber: "",
    employeetype: "",
    employeegrade: "",
    designation: "",
    datejoin: "",
    group: "",
    email: "",
    nextofkinname: "",
    nextofkinphone: "",
    nextofkinrelationship: "",
    nin: "",
    address: "",
    linemanager: "",
    branch: "",
    phone: "",
    department: "",
    password: "",
    error: "",
    loading: false,
  });
  const { createUser, error, loading } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, createUser: "", [name]: value });
    loadLineManagers();
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    console.log(values);
    signup({ ...values }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          createUser: data.user.firstname + " is created",
          firstname: "",
          lastname: "",
          middlename: "",
          staffregnumber: "",
          employeetype: "",
          employeegrade: "",
          designation: "",
          branch: "",
          datejoin: "",
          phone: "",
          department: "",
          password: "",
          error: "",
          loading: false,
        });
      }
    });
    loadLineManagers();
  };

  return (
    <Layouttwo>
      <div class="main__container">
        <div class="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div class="main__greeting">
            <h1>MFB MICROFINANCE BANK(ADD EMPLOYEES)</h1>
            <p>Welcome to your admin</p>
          </div>
        </div>

        <hr class="main__cards" />

        <Showloading loading={loading} />
        <Showerror error={error} />
        <Showsuccess createUser={createUser} />
        <Signupusers
          handleChange={handleChange}
          clickSubmit={clickSubmit}
          values={values}
          displaylinemanagers={displaylinemanagers}
        />
      </div>
    </Layouttwo>
  );
};
export default Addemployee;
