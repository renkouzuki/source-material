import React from "react";
import TestLayout from "./TestLayout";
import Timeline from "./Timeline";

const Test = ({ data }) => {
  return (
    <TestLayout>
      <div>
        <p>title: test</p>
        {JSON.stringify(data)}
        <Timeline/>
      </div>
    </TestLayout>
  );
};

export default Test;
