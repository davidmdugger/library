import React from "react";

export default ({ headerData }) => {
  const headerDataRender = headerData.map((headerItem, idx) => (
    <div key={idx} className={headerItem}>
      {headerItem}
    </div>
  ));
  return <div className="table-header">{headerDataRender}</div>;
};
