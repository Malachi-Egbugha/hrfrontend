import React, { useState, useEffect } from "react";
import Layouttwo from "../Layout/Layouttwo";
import Attendanceform from "../Component/Attendanceform";
import { attendance } from "../Apicalls/apicore";
import { format, parseISO } from "date-fns";
//import { signup, getAllUsers } from "../Apicalls/apicore";
//create a form
//check is attendance state is empty
//if not empty undisplay  form and dispay list
//create search for attendance
//create a button to return to search. this will clear the state variable

const Attendance = () => {
  const [values, setValues] = useState({
    attendancestart: "",
    attendanceend: "",
  });
  const [showattendance, setShowattendance] = useState(true);
  const { attendancestart, attendanceend } = values;
  const [attendancedata, setAttendancedata] = useState();
  const handleChange = (name) => (event) => {
    const value = event.target.value;

    //format(parseISO(u.createdAt), "MM/dd/yyyy");

    setValues({ ...values, [name]: value });
  };
  const clickSubmit = async (event) => {
    event.preventDefault();
    //format date
    const { attendancestart, attendanceend } = values;
    const start = format(parseISO(attendancestart), "dd/MM/yyyy");
    const stop = format(parseISO(attendanceend), "dd/MM/yyyy");
    //call api
    let getattendance = await attendance(start, stop);
    if (getattendance) {
      setAttendancedata(getattendance);
      setShowattendance(false);
    } else {
      console.log("failed");
    }
    //console.log(getattendance[0]);
    //send result to state
    //change show attendance state
  };
  const selectattendanceform = () => {
    const show = showattendance && (
      <Attendanceform
        clickSubmit={clickSubmit}
        handleChange={handleChange}
        attendancestart={attendancestart}
        attendanceend={attendanceend}
      />
    );
    return show;
  };
  const attendanceForm = () => {
    const unshow = !showattendance && (
      <div id="divcontents">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Staff ID</th>
              <th scope="col">Staff Name</th>
              <th scope="col">Late</th>
              <th scope="col">Not Signed</th>
              <th scope="col">Absent</th>
              <th scope="col">Present</th>
              <th scope="col">Work Days</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {attendancedata.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data._id}</td>
                <td>{data.username}</td>
                <td>{data.late}</td>
                <td></td>
                <td>{data.absent}</td>
                <td>{data.present}</td>
                <td>{data.workdays}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          style={{ borderRadius: "20px" }}
          type="button"
          className="btn btn-primary"
          onClick={() => {
            window.print();
          }}
        >
          PRINT
        </button>
      </div>
    );
    return unshow;
  };
  const content = () => {
    return (
      <div>
        <div>{selectattendanceform()}</div>
        <div>{attendanceForm()}</div>
      </div>
    );
  };

  return (
    <Layouttwo>
      <div className="main__container">
        <div className="main__title">
          <img src="assets/banner.jpg" alt="" />
          <div className="main__greeting">
            <h1>MFB MICROFINANCE BANK(ATTENDANCE LIST)</h1>
            <p>Welcome to attendance</p>
          </div>
        </div>
        <hr className="main__cards" />
        {content()}
      </div>
    </Layouttwo>
  );
};
export default Attendance;
