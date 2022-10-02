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
  const handleDeleteUser = async (userId, auth) => {
    try {
      await userAPI.deleteUser(userId, auth);
      notification.success({
        message: "Xóa User thành công, Vui lòng F5 lại để cập nhật",
      });
    } catch (error) {
      notification.error({
        message: "Xóa User thất bại",
        description: error,
      });
    }
  };
  const handleEditUser = (userr) => {
    movePath(`edit/${userr.taiKhoan}`);
    dispatch({ type: "userInfo", userr });
  };
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
                  <th scope="col">ID</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">password</th>
                  <th scope="col">phone</th>
                  <th scope="col">birthday</th>
                  <th scope="col">Hành động</th>
                </tr>
              </thead>
              {users?.map((userr) => {
                return (
                  <tbody key={userr.id}>
                    <tr>
                      <td>{userr.id}</td>
                      <td>{userr.name}</td>
                      <td>{userr.email}</td>
                      <td>{userr.password}</td>
                      <td>{userr.phone}</td>
                      <td>{userr.birthday}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleDeleteUser(userr.id, user.accessToken)
                          }
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
