import React from 'react';
import { useHistory } from "react-router-dom"
import "./Topbar.scss";

const Topbar = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);

  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <h5 onClick={() => history.push("/")}>FASHION WORLD</h5>
        </div>
        <div className="topbar-right">
          <img src={user.photo} alt="" />
          <h6>Admin</h6>
        </div>
      </div>
    </div>
  );
};

export default Topbar;