import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../../UserAdmin/UserHello";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "antd";
import jobAPI from "../../../apis/jobAPI";
import useRequest from "../../../hook/useRequest";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to="/user">Users Manage</NavLink>, "sub1", <UserOutlined />),
  getItem(
    <NavLink to="/jobs">Jobs Manage</NavLink>,
    "sub2",
    <VideoCameraOutlined />,
    [
      getItem(
        <NavLink to="/jobs/typejob">Job Type</NavLink>,
        "sub1",
        <UnorderedListOutlined />
      ),
    ]
  ),
];

const EditTypeJob = () => {

  const [collapsed, setCollapsed] = useState(false);

  const [value, setValue] = useState("");

  const { Option } = Select;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Type",
      dataIndex: "tenNhom",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          <button
            // onClick={() => moveEditTypeJob(record)}
            className="user-action px-2"
          >
            <AiOutlineEdit />
          </button>
          <button
            // onClick={() => handleDeletTypeJob(record.id)}
            className="user-action "
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  const onChange = (value) => {
    setValue(value);
  };
  const onSearch = (value) => {
    setValue(value);
  };
  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const { typeJobDedail } = useSelector((state) => state.jobManage);
  
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user === null || user.user.role !== "ADMIN") {
      notification.warning({
        message: "You need to ADMIN account to access this page !",
      });
      movePath("/");
    }
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="user-logo">
          <UserHello />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, height: "64px" }}
        />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb>
            <h4
              className="text-dark mb-3 col-12"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              Jobs Managerment / Edit Type Job
            </h4>
            <div className="d-flex fs-4 text-dark">
              {typeJobDedail.tenLoaiCongViec}
            </div>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Content */}
            <Select
              className=""
              showSearch
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().includes(input.toLowerCase())
              }
            >
              {typeJobDedail.dsNhomChiTietLoai.map((type) => (
                <option key={type.id} value={type.tenNhom}>
                  {type.tenNhom}
                </option>
              ))}
            </Select>
            {/* <Table className="mt-5" columns={columns} dataSource={type} /> */}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};

export default EditTypeJob;
