import React from "react";
import { modules } from "./data/data";

const List = () => {
  return (
    <div className="container-fluid">
      <div className="col-12">
        <div className="row sm-list">
          <h3>School Management System Modules</h3>
        </div>
        <div className="row sm-sublist">
          {modules.map((item) => {
            return (
              <div className="col-md-3 sm-custom">
                <img src={item.image} />
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default List;
