import React, { useEffect, useState } from "react";
import "./ActivityDetails.css";

const ActivityDetails = ({ activityDetails }) => {
  const [breakTime, setBreakTime] = useState(0);

  const breakTimeHandler = (time) => {
    setBreakTime(time);
    localStorage.setItem("break-time", time);
  };

  useEffect(()=>{
    const getBreakTimeFromStorage = localStorage.getItem('break-time')
    setBreakTime(Number(getBreakTimeFromStorage))
  }, [])

  return (
    <div className="activity-detail">
      <div className="profile-container">
        <div className="d-flex align-items-center">
          <div className="p-1">
            <img height="30" width="30" src="" alt="" />
          </div>
          <div className="p-2">
            <h4>Ashraful Islam</h4>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="profile-info d-flex">
          <div>
            75Kg <br />
            Weight
          </div>
          <div>
            5.7 <br />
            Height
          </div>
          <div>
            25 <br />
            Age
          </div>
        </div>
      </div>
      <div className="break-container pt-5">
        <h3>Add A Break</h3>
        <div className="profile-info d-flex py-3 justify-content-between">
          <div onClick={() => breakTimeHandler(10)} className="break-time">
            10s
          </div>
          <div onClick={() => breakTimeHandler(20)} className="break-time">
            20s
          </div>
          <div onClick={() => breakTimeHandler(30)} className="break-time">
            30s
          </div>
          <div onClick={() => breakTimeHandler(40)} className="break-time">
            40s
          </div>
        </div>
      </div>

      <div className="Detail-container pt-4">
        <h3>Activity Details</h3>
        <div>Reading Time: {activityDetails.length}h</div>
        <div>Break Time: {breakTime}s</div>
      </div>
    </div>
  );
};

export default ActivityDetails;
