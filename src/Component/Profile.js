import React, { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
const Profile = ({ user, changeModalPasswordstate }) => {
  let [values, setValues] = useState({
    address: "",
    _id: "",
    branch: "",
    createdAt: "",
    datejoin: "",
    department: "",
    email: "",
    employeegrade: "",
    employeetype: "",
    firstname: "",
    lastname: "",
    linemanager: "",
    middlename: "",
    nextofkinname: "",
    nextofkinphone: "",
    nextofkinrelationship: "",
    nin: "",
    phone: "",
    staffregnumber: "",
  });
  const setusers = () => {
    setValues({ ...user });
  };
  useEffect(() => {
    setusers();
  }, [user]);
  let {
    address,
    branch,
    createdAt,
    datejoin,
    department,
    email,
    _id,
    employeegrade,
    employeetype,
    firstname,
    lastname,
    linemanager,
    middlename,
    nextofkinname,
    nextofkinphone,
    nextofkinrelationship,
    nin,
    phone,
    staffregnumber,
  } = values;
  return (
    <div
      className="container"
      style={{ margin: "5%", color: "#000000", fontFamily: "sans-serif" }}
    >
      <h1 style={{ textAlign: "center" }}>My Profile</h1>
      <div className="jumbotron">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#020509" }}>
            Personal Information
          </div>
          <div
            className="card-body"
            style={{ color: "#000000", fontSize: "1rem" }}
          >
            <div className="row">
              <div className="col-sm-2 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  First Name:
                </h4>
              </div>
              <div className="col-sm-4 col-lg-3">{firstname}</div>
              <div className="col-sm-2 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Middle Name:
                </h4>
              </div>
              <div className="col-sm-4 col-lg-3">{middlename}</div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Last Name:
                </h4>
              </div>
              <div className="col-sm-2 col-lg-3">{lastname}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>Phone:</h4>
              </div>
              <div className="col-sm-6 col-lg-3">{phone}</div>
            </div>
            <div className="row">
              <div className="col-sm-2 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>Email:</h4>
              </div>
              <div className="col-sm-2 col-lg-3">{email}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>NIN:</h4>
              </div>
              <div className="col-sm-6 col-lg-3">{nin}</div>
            </div>

            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Address:
                </h4>
              </div>
              <div className="col-sm-9 col-lg-9">{address}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#020509" }}>
            Next of Kin Information
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Next of Kin Name:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{nextofkinname}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Next of Kin Number:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{nextofkinphone}</div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  RelationShip with Next of Kin:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{nextofkinrelationship}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron">
        <div className="card">
          <div className="card-header" style={{ backgroundColor: "#020509" }}>
            Other Information
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Staff Reg Number:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{staffregnumber}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Employee Type:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{employeetype}</div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Employee Grade:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{employeegrade}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Line Manager:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{linemanager}</div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>Branch:</h4>
              </div>
              <div className="col-sm-6 col-lg-3">{branch}</div>
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Confirmation Date:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">
                {format(parseISO(user.createdAt), "MM/dd/yyyy")}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <h4 style={{ fontWeight: "700", fontSize: "1rem" }}>
                  Department:
                </h4>
              </div>
              <div className="col-sm-6 col-lg-3">{department}</div>
              <div className="col-sm-6 col-lg-3">
                <button
                  data-tip
                  data-for="changepassword"
                  onClick={changeModalPasswordstate}
                  value={_id}
                  type="button"
                  className="btn btn-success"
                  style={{ backgroundColor: "#2A1372" }}
                >
                  <i className="fab fa-accessible-icon"></i>
                </button>
              </div>
              <div className="col-sm-6 col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
