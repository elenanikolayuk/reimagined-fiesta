import React from "react";

const GrandParentComponent = ({ value }) => {
    return (
      <ParentComponent value={value} />
    );
  }
  
  const ParentComponent = ({ value }) => {
    return (
      <ChildComponent value={value} />
    );
  }
  
  const ChildComponent = ({ value }) => {
    return (
      <div>{value}</div>
    );
  }

  export {GrandParentComponent}