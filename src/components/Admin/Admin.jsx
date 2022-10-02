import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const Admin = () => {
  return (
    <Layout>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default Admin;
