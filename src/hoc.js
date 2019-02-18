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
      {props.isAdmin && (
        <span>this is a privet information don't shared with the other </span>
      )}
      <Same {...props} />
    </div>
  );
};
const witheB = Same => {
  return props => (
    <div>
      {props.isAdmin ? (
        <Same {...props} />
      ) : (
        <span>make sure u are login in </span>
      )}
    </div>
  );
};
const AdminInfo = witheA(Info);
const AdminInfo2 = witheB(Info);
export default AdminInfo2;
