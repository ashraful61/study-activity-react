import React, { useEffect, useState } from "react";
import Subject from "../Subject/Subject";
import ActivityDetails from "../ActivityDetails/ActivityDetails";
const Study = () => {
  const [subjects, setSubjects] = useState([]);
  const [activityDetails, setActivityDetails] = useState([]);

  useEffect(() => {
    fetch("subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const addToListHandler = (selectedSubject) => {
    const newActivity = [...activityDetails, selectedSubject];
    setActivityDetails(newActivity);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 col-sm-8 p-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {subjects.map((subject) => (
              <Subject
                key={subject.id}
                subject={subject}
                addToListHandler={addToListHandler}
              ></Subject>
            ))}
          </div>
        </div>
        <div className="col-4 col-sm-4 p-3">
           <div className="activity-detail-container">
           <ActivityDetails activityDetails={activityDetails}></ActivityDetails>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
