import React from "react";
import "./PageHeader.css";

function PageHeader() {
  return (
    <div className="page-header">
      <div className="header-text router">Home {"> "} Shop</div>
      <div className="header-text title">Catalog Page</div>
      <div className="header-text subtitle">
        Let's design the place you always imagined
      </div>
    </div>
  );
}

export default PageHeader;
