import React from "react";

export default ({ id, username, email, website, phone }) => {
  return (
    <div key={id} className="table-row">
      <div>{username}</div>
      <div>{email}</div>
      <div>{website}</div>
      <div>{phone}</div>
    </div>
  );
};
