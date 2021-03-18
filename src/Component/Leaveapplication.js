import React, { useState } from "react";
import { leavesignup } from "../Apicalls/apicore";

const Leaveapplication = (props) => {
  const {
    firstname,
    lastname,
    middlename,
    staffregnumber,
    department,
    linemanager,
  } = JSON.parse(localStorage.getItem("usersign")).user;
  const [values, setValues] = useState({
    firstname,
    lastname,
    createLeave: "",
    middlename,
    staffregnumber,
    department,
    linemanager,
    leavetype: "",
    leavestart: "",
    leaveend: "",
    comment: "",
    error: "",
    loading: false,
  });

  const {
    leavetype,
    leavestart,
    leaveend,
    createLeave,
    comment,
    error,
    loading,
  } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, createLeave: "", [name]: value });
  };
  const clickSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: " ", loading: true });
    try {
      let enterleave = await leavesignup({ ...values });
      let leavecreate = enterleave.leave.leavetype;
      setValues({
        ...values,
        createLeave: leavecreate,
        leavetype: "",
        leavestart: "",
        leaveend: "",
        comment: "",
        error: "",
        loading: false,
      });
    } catch (err) {
      console.log(err);
      setValues({ ...values, error: err });
    }

    props.load();
  };
  const showSuccess = () =>
    createLeave && (
      <div className="alert alert-info">
        <h2> You have successfully applied for {`${createLeave}`}</h2>
      </div>
    );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2> Loading ....... </h2>
      </div>
    );
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const signUpLeaveForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="row">
        <div className="input-field col-sm-6 col-lg-4">
          <div className="form-group">
            <label for="branch">Leave Type:</label>
            <select
              onChange={handleChange("leavetype")}
              class="form-control"
              id="branch"
              required
            >
              <option>Please Select</option>
              <option value="Annual Leave">Annual Leave</option>
              <option value="Maternity Leave">Maternity Leave</option>
              <option value="Paternity Leave">Paternity Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Bereavement leave">Bereavement leave</option>
              <option value="Compensatory leave">Compensatory leave</option>
              <option value="Sabbatical leave">Sabbatical leave</option>
              <option value="Unpaid Leave">Unpaid Leave</option>
            </select>
          </div>
        </div>
        <div className="input-field col-sm-6 col-lg-4">
          <div className="form-group">
            <label for="leavestart">Start Date:</label>
            <input
              onChange={handleChange("leavestart")}
              value={leavestart}
              type="date"
              className="form-control"
              id="leavestart"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>
        <div className="input-field col-sm-6 col-lg-4">
          <div className="form-group">
            <label for="leaveend">End Date:</label>
            <input
              onChange={handleChange("leaveend")}
              value={leaveend}
              type="date"
              className="form-control"
              id="leaveend"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>

        <div className="input-field col-sm-12 col-lg-12">
          <div className="form-group">
            <label for="comment">Comment:</label>
            <textarea
              style={{ width: "100%", height: "10vh" }}
              onChange={handleChange("comment")}
              value={comment}
            ></textarea>
          </div>
        </div>
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
  return (
    <div>
      {showLoading()}
      {showError()}
      {showSuccess()}
      {signUpLeaveForm()}
    </div>
  );
};
export default Leaveapplication;
