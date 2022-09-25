import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";

const InfoJob = ({ data }) => {
  const { job } = data;

  return (
    <div className="py-4">
      <div className="if-main">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Fiverr</Breadcrumb.Item>
          <Breadcrumb.Item href="#">{job}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div>
        <p className="if-hd">Result for "{job}"</p>
      </div>
      <div className="if-sw">
        <Form className="d-flex justify-content-end">
          <Form.Check
            className="pe-4"
            type="switch"
            id="proservices"
            label="Pro Services"
          />
          <Form.Check
            className="pe-4"
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
