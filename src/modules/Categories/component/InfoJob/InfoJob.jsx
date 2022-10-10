import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

const InfoJob = ({ data }) => {
  const { job } = data;

  return (
    <div className="pt-md-4 pt-5 pb-3">
      <div className="if-main">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Fiverr</Breadcrumb.Item>
          <Breadcrumb.Item href="#">{job}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p className="if-hd">{job}</p>
      </div>
      <div className="if-sw">
        <Form className="d-flex justify-content-end pt-3 pt-sm-0 if-item">
          <Form.Check
            className="pe-4 pb-2 pb-sm-0"
            type="switch"
            id="proservices"
            label="Pro Services"
          />
          <Form.Check
            className="pe-4 pb-2 pb-sm-0"
            type="switch"
            id="localseller"
            label="Local Seller"
          />
          <Form.Check
            type="switch"
            id="onlineseller"
            label="Online Seller"
          />
        </Form>
      </div>
    </div>
  );
};

export default InfoJob;
