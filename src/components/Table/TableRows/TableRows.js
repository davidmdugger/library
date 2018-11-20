import React from "react";

// components
import TableRow from "./TableRow/TableRow";

export default ({ items }) => {
  const tableRowRender = items.map(item => (
    <TableRow
      key={item.id}
      id={item.id}
      username={item.username}
      email={item.email}
      website={item.website}
      phone={item.phone}
    />
  ));

  return <div>{tableRowRender}</div>;
};
