import React from "react";
import { questions, item } from "./Data/features";
import SingleQuestion from "./SingleQuestion";

const TopFeatures = () => {
  return (
    <>
      <main>
        <div className="container top-head">
          <div className="row">
            <div className="col-12 topfeature">
              <h2>Top Features That Our Customers Love</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />;
              })}
            </div>
          </div>
        </div>
      </main>
      <div className="container bottom-head">
        <div className="row">
          <div className="col-12">
            <h2>Why do businesses choose Apricus CRM over other CRMs?</h2>
          </div>
        </div>
        <div className="row bottom-feature">
          {item.map((x) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="event">
                  <h4>{x.title}</h4>
                  <p>{x.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TopFeatures;
