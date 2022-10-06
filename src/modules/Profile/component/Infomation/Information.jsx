import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
const Information = () => {
  return (
    <div>
      <div className="d-flex p-4 flex-column rounded-1 border" style={{background:'#ffffff'}}>
        <div className="profile-user-info">
          <div className="profile-user-img">
            <img className="profile-user-pic" src="" alt="" />
          </div>
          <div className="profile-user-label">
            <p></p>
          </div>
        </div>
        <div className="profile-user-desc d-flex flex-column">
          <div className="profile-user-location d-flex justify-content-between">
            <p>From</p>
            <p>Vietnam</p>
          </div>
          <div className="profile-user-location d-flex justify-content-between">
            <p>Member Since</p>
            <p>March 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
