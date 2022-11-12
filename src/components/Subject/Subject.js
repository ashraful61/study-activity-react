import React from "react";
import './Subject.css';

const Subject = ({ subject, addToListHandler }) => {
  const { imgUrl, time, name, description } = subject;
  

  return (
    <div className="subject">
      <div className="card h-100">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p><span className="fw-bold">Required Time:</span> {time}s</p>
          <button onClick={() => addToListHandler(subject)} className="btn btn-primary px-sm-5 fw-bold select-btn">
            Add to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subject;
