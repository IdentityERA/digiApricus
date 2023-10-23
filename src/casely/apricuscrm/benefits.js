import React from "react";
import { data } from "./Data/features";

const CrmBenefits = () => {
  return (
    <div className="container benefits">
      <div className="benefit-h">
        <h2>Addon Benefits</h2>
      </div>
      <div className="col-12">
        <div className="row crm-benefits">
          {data.map((x) => {
            return (
              <div className="col-md-3 feature-card">
                <img src={x.image} />
                <h3>{x.heading}</h3>
                <p>{x.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CrmBenefits;
