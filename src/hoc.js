import React from "react";

import "./styles.css";

const Info = props => (
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>the info is:{props.info}</h2>
  </div>
);

const witheA = Same => {
  return props => (
    <div>
      <h2>hhhhhhhhhhhhhhhhhhh</h2>
      <Same {...props} />
    </div>
  );
};
const AdminInfo = witheA(Info);
export default AdminInfo;
