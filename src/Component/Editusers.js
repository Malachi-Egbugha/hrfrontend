import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateUser } from "../Apicalls/apicore";

const Editusers = ({
  modalIsOpen,
  setModalIsOpen,
  edituserinfo,
  displaylinemanagers,
  fetchstatus,
}) => {
  Modal.setAppElement("#root");

  let {
    firstname,
    lastname,
    middlename,
    _id,
    branch,
    department,
    designation,
    employeegrade,
    group,
    employeetype,
    nextofkinname,
    nextofkinphone,
    nextofkinrelationship,
    email,
    linemanager,
    nin,
    address,
    phone,
    staffregnumber,
  } = edituserinfo;
  let [values, setValues] = useState({
    firstname,
    lastname,
    middlename,
    branch,
    department,
    designation,
    employeegrade,
    group,
    employeetype,
    nextofkinname,
    nextofkinphone,
    nextofkinrelationship,
    email,
    linemanager,
    nin,
    address,
    phone,
    staffregnumber,
  });
  let gt = () =>
    setValues({
      firstname,
      lastname,
      middlename,
      branch,
      department,
      designation,
      employeegrade,
      group,
      employeetype,
      nextofkinname,
      nextofkinphone,
      nextofkinrelationship,
      email,
      linemanager,
      nin,
      address,
      phone,
      staffregnumber,
    });
  let checkselected = (option1, option2) =>
    option1 == option2 ? "selected" : "";

  useEffect(() => {
    gt();
  }, [edituserinfo]);
  //console.log(edituserinfo.users[0].firstname);

  //check selected to identify selected
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    let id = _id;
    let updatestatus = await updateUser(id, { ...values });
    fetchstatus(updatestatus);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#000000",
          },
          content: {
            color: "#000000",
          },
        }}
      >
        <form onSubmit={clickSubmit}>
          <div className="row">
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>First Name:</label>
                <input
                  value={values.firstname}
                  onChange={handleChange("firstname")}
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  value={values.lastname}
                  onChange={handleChange("lastname")}
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Enter Last Name"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Middle Name:</label>
                <input
                  value={values.middlename}
                  onChange={handleChange("middlename")}
                  type="text"
                  className="form-control"
                  placeholder="Enter Middle Name"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Staff Reg Number:</label>
                <input
                  value={values.staffregnumber}
                  onChange={handleChange("staffregnumber")}
                  type="text"
                  className="form-control"
                  placeholder="Enter Middle Name"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Staff Type:</label>
                <select
                  onChange={handleChange("employeetype")}
                  class="form-control"
                  id="stafftype"
                  required
                >
                  <option>Please Select</option>
                  <option
                    value="Permanent"
                    selected={checkselected("Permanent", employeetype)}
                  >
                    Permanent
                  </option>
                  <option
                    value="Casual"
                    selected={checkselected("Permanent", employeetype)}
                  >
                    Casual
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Employee Grade:</label>
                <select
                  onChange={handleChange("employeegrade")}
                  className="form-control"
                  required
                >
                  <option>Please Select</option>
                  <option
                    value="Grade 1"
                    selected={checkselected("Grade 1", employeegrade)}
                  >
                    Grade 1
                  </option>
                  <option
                    value="Grade 2"
                    selected={checkselected("Grade 2", employeegrade)}
                  >
                    Grade 2
                  </option>
                  <option
                    value="Grade 3"
                    selected={checkselected("Grade 3", employeegrade)}
                  >
                    Grade 3
                  </option>
                  <option
                    value="Grade 4"
                    selected={checkselected("Grade 4", employeegrade)}
                  >
                    Grade 4
                  </option>
                  <option
                    value="Grade 5"
                    selected={checkselected("Grade 5", employeegrade)}
                  >
                    Grade 5
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Group:</label>
                <select
                  onChange={handleChange("group")}
                  class="form-control"
                  required
                >
                  <option>Please Select</option>
                  <option
                    value="unithead"
                    selected={checkselected("unithead", group)}
                  >
                    MANAGERS
                  </option>
                  <option
                    value="staff"
                    selected={checkselected("staff", group)}
                  >
                    NON MANAGERS
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Designation:</label>
                <input
                  onChange={handleChange("designation")}
                  value={values.designation}
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Email:</label>
                <input
                  onChange={handleChange("email")}
                  value={values.email}
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="nextofkinname">Next of Kin:</label>
                <input
                  onChange={handleChange("nextofkinname")}
                  value={values.nextofkinname}
                  type="text"
                  className="form-control"
                  placeholder="Enter Next of Kin Name"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="nextofkinphone">Next of Kin Phone Number:</label>
                <input
                  onChange={handleChange("nextofkinphone")}
                  value={values.nextofkinphone}
                  type="phone"
                  className="form-control"
                  placeholder="Enter Next of Kin Phone Number"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="nextofkinrelationship">
                  Relationship with Next of Kin:
                </label>
                <input
                  onChange={handleChange("nextofkinrelationship")}
                  value={values.nextofkinrelationship}
                  type="text"
                  className="form-control"
                  placeholder="Enter Relationship With Next of Kin"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="nin">NIN:</label>
                <input
                  onChange={handleChange("nin")}
                  value={values.nin}
                  type="text"
                  className="form-control"
                  placeholder="Enter NIN"
                  required
                />
              </div>
            </div>

            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="branch">Branch:</label>
                <select
                  onChange={handleChange("branch")}
                  class="form-control"
                  id="branch"
                  required
                >
                  <option>Please Select</option>
                  <option
                    value="Ademola"
                    selected={checkselected("Ademola", branch)}
                  >
                    Ademola Adetokubo
                  </option>
                  <option
                    value="Ajesa"
                    selected={checkselected("Ajesa", branch)}
                  >
                    Ajesa
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label for="phone">Phone:</label>
                <input
                  onChange={handleChange("phone")}
                  value={values.phone}
                  type="phone"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
            </div>
            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Department:</label>
                <select
                  onChange={handleChange("department")}
                  className="form-control"
                  id="department"
                  required
                >
                  <option>Please Select</option>
                  <option
                    value="admin"
                    selected={checkselected("admin", department)}
                  >
                    Admin
                  </option>
                  <option
                    value="credit"
                    selected={checkselected("credit", department)}
                  >
                    Credit
                  </option>
                  <option
                    value="finance"
                    selected={checkselected("finance", department)}
                  >
                    Dev Finance
                  </option>
                  <option value="hr" selected={checkselected("hr", department)}>
                    Hr
                  </option>
                  <option
                    value="ict"
                    selected={checkselected("ict", department)}
                  >
                    ICT
                  </option>
                  <option
                    value="internal control"
                    selected={checkselected("internal control", department)}
                  >
                    Internal Control
                  </option>
                  <option
                    value="loan monitoring"
                    selected={checkselected("loan monitoring", department)}
                  >
                    Loan Monitoring
                  </option>
                  <option
                    value="marketing"
                    selected={checkselected("marketing", department)}
                  >
                    Marketing
                  </option>
                  <option
                    value="payroll"
                    selected={checkselected("payroll", department)}
                  >
                    Payroll
                  </option>
                  <option
                    value="operations"
                    selected={checkselected("operations", department)}
                  >
                    Operations
                  </option>
                  <option
                    value="recovery"
                    selected={checkselected("recovery", department)}
                  >
                    Recovery
                  </option>
                  <option
                    value="digitalmarketting"
                    selected={checkselected("digitalmarketting", department)}
                  >
                    Digital Marketting
                  </option>
                  <option
                    value="devfinance"
                    selected={checkselected("devfinance", department)}
                  >
                    Development Finance
                  </option>
                  <option
                    value="fco"
                    selected={checkselected("fco", department)}
                  >
                    Finance
                  </option>
                  <option
                    value="none"
                    selected={checkselected("none", department)}
                  >
                    NONE
                  </option>
                </select>
              </div>
            </div>

            <div className="input-field col-sm-6 col-lg-4">
              <div className="form-group">
                <label>Unit Head:</label>
                <select
                  onChange={handleChange("linemanager")}
                  class="form-control"
                  id="linemanager"
                  required
                >
                  <option>Please Select</option>
                  <option value="none">NONE</option>
                  {displaylinemanagers.map((c, i) => (
                    <option
                      key={i}
                      value={c.staffregnumber}
                      selected={checkselected(c.staffregnumber, linemanager)}
                    >
                      {c.designation}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input-field col-sm-12 col-lg-12">
              <div className="form-group">
                <label>Address:</label>
                <textarea
                  style={{ width: "100%", height: "10vh" }}
                  onChange={handleChange("address")}
                  defaultValue={values.address}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
          <button
            className="btn btn-danger"
            onClick={() => setModalIsOpen(false)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Editusers;
