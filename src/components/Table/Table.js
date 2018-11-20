import React from "react";

// components
import TableHeader from "./TableHeader/TableHeader";
import TableRows from "./TableRows/TableRows";

// styles
import "./Table.css";

const headerData = ["name", "email", "website", "phone"];

export default ({ items }) => {
  return (
    <div className="table-wrapper">
      <TableHeader headerData={headerData} />
      <TableRows items={items} />
    </div>
  );
};
