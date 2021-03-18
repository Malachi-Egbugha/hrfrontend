import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateUser } from "../Apicalls/apicore";

const Editpassword = ({
  modalPasswordIsOpen,
  setModalPasswordIsOpen,
  edituserinfo,
  fetchstatus,
}) => {
  Modal.setAppElement("#root");

  let { _id } = edituserinfo;
  let [values, setValues] = useState({
    password: "",
  });

  //check selected to identify selected
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    let id = _id;
    let updatestatus = await updateUser(id, { ...values });
    setValues({ ...values, password: "" });
    fetchstatus(updatestatus);
  };

  return (
    <div>
      <Modal
        isOpen={modalPasswordIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalPasswordIsOpen(false)}
        style={{
          content: {
            color: "#000000",
            top: "40%",
            left: "30%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "40%",
            backgroundColor: "rgb(0, 32, 96)",
            color: "#ffffff",
            //transform: "translate(-50%, -50%)",
          },
        }}
      >
        <form onSubmit={clickSubmit}>
          <div className="row">
            <div className="input-field col-sm-12 col-lg-12">
              <div className="form-group">
                <label>Enter New Password:</label>
                <input
                  value={values.password}
                  onChange={handleChange("password")}
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Enter New Password"
                  required
                />
              </div>
            </div>
          </div>

          <button className="btn btn-primary">Submit</button>
          <button
            className="btn btn-danger"
            onClick={() => setModalPasswordIsOpen(false)}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Editpassword;
