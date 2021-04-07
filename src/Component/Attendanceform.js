import React, { useState } from "react";

const Attendanceform = ({
  clickSubmit,
  handleChange,
  attendancestart,
  attendanceend,
}) => {
  const attendanceForm = () => (
    <form onSubmit={clickSubmit}>
      <div className="row">
        <div className="input-field col-sm-12 col-lg-12">
          <div className="form-group">
            <label>Start Date:</label>
            <input
              onChange={handleChange("attendancestart")}
              value={attendancestart}
              type="date"
              className="form-control"
              id="attendancestart"
              required
            />
          </div>
        </div>
        <div className="input-field col-sm-12 col-lg-12">
          <div className="form-group">
            <label>End Date:</label>
            <input
              onChange={handleChange("attendanceend")}
              value={attendanceend}
              type="date"
              className="form-control"
              id="attendanceend"
              required
            />
          </div>
        </div>
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
  return <div>{attendanceForm()}</div>;
};
export default Attendanceform;
