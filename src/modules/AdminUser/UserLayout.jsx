import React, { useState } from "react";
import useRequest from "hooks/useRequest";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VideoCameraOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCalendar,
} from "react-icons/ai";
import userAPI from "../../apis/userAPI";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const UserLayout = () => {
  const [value, setValue] = useState(null);
  const { data: users, isLoading, error } = useRequest(() => userAPI.getUsers);
  const navigate = useNavigate();
  const movePath = (path) => {
    navigate(path);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="admin-logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <h4 className="text-dark mb-3">Quản lý người dùng</h4>
            <button
              onClick={() => movePath("add")}
              className="btn-style mb-3"
              style={{ width: "250px" }}
            >
              Thêm người dùng
            </button>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Nhập tài khoản"
                  style={{ display: "inline-block", width: "80%" }}
                  className="form-control"
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            </form>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">password</th>
                  <th scope="col">phone</th>
                  <th scope="col">birthday</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              {users?.map((user) => {
                return (
                  <tbody key={user.id}>
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                      <td>{user.phone}</td>
                      <td>{user.birthday}</td>
                      <td>
                        <button className="px-2 fs-5">
                          <AiOutlineDelete />
                        </button>
                        <button className="fs-5">
                          <AiOutlineEdit />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
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

export default UserLayout;
