import React, { useEffect, useState } from "react";
import "./ActivityDetails.css";

const ActivityDetails = ({ activityDetails }) => {
  const [breakTime, setBreakTime] = useState(0);

  
  let totalTime = 0;
  for (const item of activityDetails) {
     totalTime += item.time;
  }

  const breakTimeHandler = (time) => {
    setBreakTime(time);
    localStorage.setItem("break-time", time);
  };

  useEffect(() => {
    const getBreakTimeFromStorage = localStorage.getItem("break-time");
    setBreakTime(Number(getBreakTimeFromStorage));
  }, []);

  return (
    <div className="activity-detail">
      <div className="profile-container">
        <div className="d-flex align-items-center pb-3">
          <div className="p-1">
            <img
              className="rounded-circle"
              height="70"
              width="70"
              src="https://randomuser.me/api/portraits/men/28.jpg"
              alt=""
            />
          </div>
          <div className="p-2">
            <h5>Ashraful Islam</h5>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="profile-info d-flex bg-light rounded p-3 justify-content-around">
          <div>
            <span className="fw-bold"> 75Kg</span> <br />
            Weight
          </div>
          <div>
            <span className="fw-bold"> 5.7 </span> <br />
            Height
          </div>
          <div>
            <span className="fw-bold"> 25 </span> <br />
            Age
          </div>
        </div>
      </div>
      <div className="break-container pt-5">
        <h3>Add A Break</h3>
        <div className="profile-info d-flex justify-content-around rounded bg-light p-3">
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
        <div className="rounded p-3 bg-light mb-3">
          <span className="fw-bold">Reading Time: </span>
          {totalTime} seconds
        </div>
        <div className="rounded p-3 bg-light">
          <span className="fw-bold">Break Time: </span> {breakTime} seconds
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
