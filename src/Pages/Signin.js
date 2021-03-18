import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import React, { useState } from "react";
import { signin } from "../Apicalls/apicore";
import { authenticate } from "../auth";
import "./Signin.css";

const Signin = () => {
  const [values, setValues] = useState({
    staffregnumber: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });
  const {
    staffregnumber,
    password,
    error,
    loading,
    redirectToReferrer,
  } = values;
  //handle change input
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  //handle form submission
  const clickSubmit = async (event) => {
    event.preventDefault();
    //set loading to true
    setValues({ ...values, error: false, loading: true });
    //access sign in api
    let signdata = await signin({ staffregnumber, password });
    if (signdata.error) {
      setValues({ ...values, error: signdata.error, loading: false });
    } else {
      authenticate(signdata, () => {
        setValues({ ...values, redirectToReferrer: true });
      });
    }
  };

  const signUpForm = () => (
    <form>
      <div className="form-group">
        <label className="text-mute">Username:</label>
        <input
          value={staffregnumber}
          onChange={handleChange("staffregnumber")}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label className="text-mute">Password:</label>
        <input
          value={password}
          onChange={handleChange("password")}
          type="password"
          className="form-control"
        />
      </div>
      <button onClick={clickSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  //show loading
  const showLoading = () =>
    loading && (
      <div className="spinning">
        <div></div>
        <div></div>
      </div>
    );
  // redirect user to dashboard if referer is true
  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/hrsystem/hrdashboard" />;
    }
  };
  //error div
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <Layout className="outerdiv">
      <div className="loginbanner">
        <div className="card">
          <div className="card-header">Login</div>
          <div className="card-body">
            {showLoading()}
            {showError()}
            {redirectUser()}
            {signUpForm()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signin;
