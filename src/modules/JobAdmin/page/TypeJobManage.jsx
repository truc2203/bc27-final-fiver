import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification} from "antd";
import { useNavigate } from "react-router-dom";
import UserHello from "../../UserAdmin/UserHello";
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

const TypeJobManage = () => {
  const [isDelete, setIsDelete] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  const movePath = (path) => {
    navigate(path);
  };

  // const hanleDeleteJob = async (id) => {
  //   try {
  //     await jobAPI.deleteJob(id)
  //     setIsDelete(!isDelete)
  //     notification.success({
  //       message: `Delete job ${id} successful !`
  //     })
  //   } catch (error) {
  //     notification.error({
  //       message: `Delete job ${id} failed !`,
  //       description:error
  //     })
  //   }

  // }

  const { data: typeJobs } = useRequest(() => jobAPI.getTypeJob(), {
    deps: [isDelete],
  });
  console.log(typeJobs);

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
              Jobs Managerment
            </h4>
            <div className="d-flex ">
              <button
                onClick={() => movePath("newtype")}
                className="col-4 header-nav-btn mb-3 me-4"
                style={{ width: "250px" }}
              >
                Add New Type
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
                    // onChange={(e) => setValue(e.target.value)}
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
            {/* Content */}
            {typeJobs?.map(type => (
              <p>{type.tenLoaiCongViec}
                  {type.dsNhomChiTietLoai?.map(type => (
                    <p>
                      {type.tenNhom}
                      {type.dsChiTietLoai?.map(type => (
                        <p>{type.tenChiTiet}</p>
                      ))}
                    </p>
                  ))}
              </p>
              
            ))}
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

export default TypeJobManage;
