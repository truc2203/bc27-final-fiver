import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../UserAdmin/UserHello";
import { Table } from "antd";
import jobAPI from "../../apis/jobAPI";
import useRequest from "../../hook/useRequest";
import { AiOutlineDelete } from "react-icons/ai";
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

const JobsAdmin = () => {

  const [isDelete,setIsDelete] = useState(false) 

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  const hanleDeleteJob = async (id) => {
    try {
      await jobAPI.deleteJob(id)
      setIsDelete(!isDelete)
      notification.success({
        message: `Xóa công việc ${id} thành công !`
      })
    } catch (error) {
      notification.error({
        message: `Xóa công việc ${id} thất bại !`,
        description:error
      })
    }

  }

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "User Create",
      dataIndex: "nguoiTao",
    },
    {
      title: "Title",
      dataIndex: "tenCongViec",
    },
    {
      title: "Avatar",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <img
          style={{ width: "50px", height: "50px" }}
          src={record.hinhAnh}
          alt=""
        />
      ),
    },
    {
      title: "Price",
      dataIndex: "giaTien",
    },
    {
      title: "Descrice",
      dataIndex: "moTaNgan",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          <button onClick={() => hanleDeleteJob(record.id)} className="user-action px-2">
            <AiOutlineDelete />
          </button>
          <button className="user-action "></button>
        </div>
      ),
    },
  ];

  const { data: jobs } = useRequest(() => jobAPI.getJob(),{deps:[isDelete]});

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user === null || user.user.role !== "ADMIN") {
      notification.warning({
        message: "Tài khoản của bạn không có quyền quản trị để truy cập trang này!",
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
              Jobs Managerment
            </h4>
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Table columns={columns} dataSource={jobs} />
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

export default JobsAdmin;
