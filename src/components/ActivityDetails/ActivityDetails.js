import React, { useEffect, useState } from "react";
import "./ActivityDetails.css";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import profileImg from "./profile.jpg";

const ActivityDetails = ({ activityDetails }) => {
  const [breakTime, setBreakTime] = useState(0);
  const [time, setTime] = useState(0);

  let totalTime = 0;
  for (const item of activityDetails) {
    totalTime += item.time;
  }
  // setTime(totalTime)

  const breakTimeHandler = (time,event) => {
    console.log(event)
    setBreakTime(time);
    localStorage.setItem("break-time", time);
    const selectedBtn = document.querySelectorAll(
      "#breakTimeId .btn-success"
    );
    for (const btn of selectedBtn) {
      btn?.classList?.remove("btn-success");
    }
    event.currentTarget.classList.add('btn-success');
  };

  useEffect(() => {
    const getBreakTimeFromStorage = localStorage.getItem("break-time");
    setBreakTime(Number(getBreakTimeFromStorage));
  }, []);

  useEffect(() => {
    const getReadingTime = localStorage.getItem("totalReadingTime");
    setTime(Number(getReadingTime));
  }, [totalTime]);

  const removeTime = (item) => {
    localStorage.removeItem(item);
    if (item === "totalReadingTime") {
      setTime(0);
    } else if (item === "break-time") {
      setBreakTime(0);
    }
  };

  const handleActivityBtn = () => {
    toast.success("Congratulations! Your activity has been completed!");
  };

  return (
    <div className="activity-detail">
      <div className="profile-container">
        <div className="d-flex align-items-center pb-2 flex-column flex-sm-row ">
          <div className="p-1">
            <img
              className="rounded-circle"
              height="70"
              width="70"
              src={profileImg}
              alt=""
            />
          </div>
          <div className="p-2">
            <h6>Ashraful Islam</h6>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="profile-info d-flex bg-light rounded p-2 justify-content-around flex-column flex-sm-row">
          <div>
            <span className="fw-bold"> 80Kg</span> <br />
            Weight
          </div>
          <div>
            <span className="fw-bold"> 5.7 </span> <br />
            Height
          </div>
          <div>
            <span className="fw-bold"> 25 year </span> <br />
            Age
          </div>
        </div>
      </div>
      <div className="break-container pt-3">
        <h3>Add A Break</h3>
        <div
          id="breakTimeId"
          className="profile-info d-flex justify-content-around rounded bg-light p-sm-3 flex-column flex-sm-row"
        >
          <div onClick={(e) => breakTimeHandler(10,e)} className="btn btn-secondary break-time">
            10s
          </div>
          <div onClick={(e) => breakTimeHandler(20,e)} className="btn btn-secondary break-time">
            20s
          </div>
          <div onClick={(e) => breakTimeHandler(30,e)} className="btn btn-secondary break-time">
            30s
          </div>
          <div onClick={(e) => breakTimeHandler(40,e)} className="btn btn-secondary break-time">
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
            <button
              title="Remove Reading Time"
              onClick={() => removeTime("totalReadingTime")}
              className="btn btn-danger btn-common"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="rounded p-3 bg-light">
          <span className="fw-bold">Break Time: </span> {breakTime} seconds
          <div>
            <button
              title="Remove Break Time"
              onClick={() => removeTime("break-time")}
              className="btn btn-danger btn-common"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-2">
          <button
            onClick={handleActivityBtn}
            className="btn btn-info text-white btn-common"
          >
            Activity Completed
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
