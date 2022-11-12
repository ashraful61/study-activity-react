import React, { useEffect, useState } from "react";
import "./ActivityDetails.css";

const ActivityDetails = ({ activityDetails }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [time, setTime] = useState(0)
  
  let totalTime = 0;
  for (const item of activityDetails) {
     totalTime += item.time;
  }
  // setTime(totalTime)

  const breakTimeHandler = (time) => {
    setBreakTime(time);
    localStorage.setItem("break-time", time);
  };

  useEffect(() => {
    const getBreakTimeFromStorage = localStorage.getItem("break-time");
    setBreakTime(Number(getBreakTimeFromStorage));
  }, []);

  useEffect(() => {
    const getReadingTime = localStorage.getItem('totalReadingTime')
    setTime(getReadingTime)
  }, [totalTime]);

  const removeTime = (item) => {
    localStorage.removeItem(item)
    if(item === 'totalReadingTime') {
      setTime(0)
    }
    else if(item === 'break-time') {
      setBreakTime(0)
    }
  }

  return (
    <div className="activity-detail">
      <div className="profile-container">
        <div className="d-flex align-items-center pb-2">
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
        <div className="profile-info d-flex bg-light rounded p-2 justify-content-around">
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
      <div className="break-container pt-3">
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

      <div className="Detail-container pt-2">
        <h3>Activity Details</h3>
        <div className="rounded p-2 bg-light mb-2">
          <span className="fw-bold">Reading Time: </span>
          {time} seconds
          <div>
            <button onClick={() => removeTime('totalReadingTime')} className="btn btn-danger">Remove Reading Time</button>
          </div>
        </div> 
        <div className="rounded p-3 bg-light">
          <span className="fw-bold">Break Time: </span> {breakTime} seconds
          <div>
          <button onClick={() => removeTime('break-time')} className="btn btn-danger">Remove Break Time</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
