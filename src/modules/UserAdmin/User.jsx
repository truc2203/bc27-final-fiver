import React, { useState } from "react";
import useRequest from "../../hook/useRequest";
import userAPI from "../../apis/userAPI";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import {  Table } from "antd";
import {
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import {  useNavigate } from "react-router-dom";
import UserHello from "./UserHello";

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
    <NavLink to="../jobs">Jobs Manage</NavLink>,
    "sub2",
    <VideoCameraOutlined />
  ),
];

const User = () => {

  const [value, setValue] = useState(null);

  const [isDelete, setIsDelete] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Job Booking ( ID )",
      dataIndex: "bookingJob",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          <button
            onClick={() => moveEditUser(record)}
            className="user-action px-2"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={() => handleDeleteUser(record.id, record.name)}
            className="user-action "
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];


  const {
    data: users,

  } = useRequest(() => userAPI.getUser(value ? value : null), {
    deps: [value, isDelete],
  });



  const handleDeleteUser = async (userId, userName) => {
    try {
      await userAPI.deleteUser(userId);
      setIsDelete(!isDelete);
      notification.success({
        message: `Delete ${userName} successful!`,
      });
    } catch (error) {
      notification.error({
        message: "Delete user failed",
        description: error,
      });
    }
  };

  const moveEditUser = async (data) => {
    await dispatch({ type: "editUser", data });
    movePath(`edit/${data.id}`);
  };

  const  user  = JSON.parse(localStorage.getItem("user"));

  if (user === null || user.user.role !== "ADMIN") {
    notification.warning({
      message: "You need to ADMIN account to access this page !",
    });
    return navigate("/");
  }

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
              User Managerment
            </h4>
            <div className="d-flex ">
              <button
                onClick={() => movePath("add")}
                className="col-4 header-nav-btn mb-3 me-4"
                style={{ width: "250px" }}
              >
                Add User
              </button>
              <form className="col-8">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Input user name"
                    style={{
                      display: "inline-block",
                      width: "100%",
                      borderRadius: "4px",
                    }}
                    className="form-control"
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Table columns={columns} dataSource={users} />
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

export default User;
