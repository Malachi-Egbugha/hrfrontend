import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layouttwo from "../Layout/Layouttwo";
import Profile from "../Component/Profile";
import Editpassword from "../Component/Editpassword";
import Showsuccess from "../Component/Showsuccess";
import { signout } from "../Apicalls/apicore";

const GeneralProfile = () => {
  const [modalPasswordIsOpen, setModalPasswordIsOpen] = useState(false);
  const [displayUsers, setdisplayUsers] = useState([]);
  const [displayinfo, setInfo] = useState("");

  let history = useHistory();
  const signoutnow = () => {
    signout().then(history.push("/hrsystem"));
  };
  const fetchstatus = (info) => {
    info.error
      ? setdisplayUsers(info.error)
      : setInfo(info.user.firstname + " " + "successfully updated");
    setModalPasswordIsOpen(false);
    signoutnow();
  };
  const changeModalPasswordstate = () => setModalPasswordIsOpen(true);

  let { user } = JSON.parse(localStorage.getItem("usersign"));

  return (
    <Layouttwo>
      <Showsuccess createUser={displayinfo} />
      <Profile
        user={user}
        changeModalPasswordstate={changeModalPasswordstate}
      />
      <Editpassword
        modalPasswordIsOpen={modalPasswordIsOpen}
        setModalPasswordIsOpen={setModalPasswordIsOpen}
        edituserinfo={user}
        fetchstatus={fetchstatus}
        changeModalPasswordstate={changeModalPasswordstate}
      />
    </Layouttwo>
  );
};
export default GeneralProfile;
