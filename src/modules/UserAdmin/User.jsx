import React, { useState } from "react";
import useRequest from "../../hook/useRequest";
import userAPI from "../../../src/apis/userAPI";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const User = () => {
  const [value, setValue] = useState(null);
  const {
    data: users,
    isLoading,
    error,
  } = useRequest(() => userAPI.getUser(value ? value : null), {
    deps: [value],
  });
  const navigate = useNavigate();
  const movePath = (path) => {
    navigate(path);
  };
  console.log(users);
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const handleDeleteUser = () => {};
  const handleEditUser = (userr) => {};
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" />
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
                <th>Tài Khoản</th>
                <td>birthday</td>

                <th>Email</th>
                <th>skills</th>
                <th>Hành động</th>
              </thead>
              {users?.map((userr) => {
                return (
                  <tbody key={userr.id}>
                    <tr>
                      <td data-label="name">{userr.name}</td>
                      <td>{userr.birthday}</td>
                      <td>{userr.email}</td>
                      <td>{userr.skill}</td>
                      <td>
                        {" "}
                        <button
                          onClick={() => handleDeleteUser(userr.id)}
                          className="px-2 fs-5"
                        >
                          <AiOutlineDelete />
                        </button>
                        <button
                          onClick={() => handleEditUser(userr)}
                          className="fs-5"
                        >
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
      </Layout>
    </Layout>
  );
};

export default User;
