import React from "react";

const Questions = () => {
  return (
    <div className="question p-4">
      <div className="border border-primary py-3 mb-5 px-5">
        <h3>How does react works?</h3>
        <p>
          The Document Object Model (DOM) presents a web page in a data tree
          structure. ReactJS stores Virtual DOM trees in the memory. By doing
          so, React can apply updates to specific parts of the data tree, which
          is faster than re-rendering the entirety of the DOM tree.
        </p>
        <p>
          Whenever there’s a change in data, ReactJS will generate a new Virtual
          DOM tree and compare it with the previous one to find the quickest
          possible way to implement changes in the real DOM. This process is
          known as diffing.
        </p>
        <p>
          By making sure that UI manipulation only affects specific sections of
          the real DOM tree, rendering the updated version takes less time and
          uses fewer resources. The practice greatly benefits large projects
          with intense user interaction
        </p>
      </div>
      <div className="border border-primary py-3 mb-5 px-5">
        <h3>Differences between props vs state?</h3>
        <p>
          props are passed via component properties, they're not reactive. State
          are variables that react will react , updating the UI when values
          changes.
        </p>
      </div>
      <div className="border border-primary py-3 mb-5 px-5">
        <h3>Where we can use useEffect except fetch?</h3>
        <ul>
          <li>State management</li>
          <li>Toggle flags (true/false)</li>
          <li>Conditional rendering</li>
          <li>Counter</li>
        </ul>
        <p>
          According to the official documentation, effects run after every
          completed render, but you can choose to fire them only when certain
          values have changed. This hook uses an array of "dependencies":
          variables or states that useEffect listen to for changes. When their
          values change, the main body of the useEffect hook is exe
        </p>
      </div>
    </div>
  );
};

export default Questions;
