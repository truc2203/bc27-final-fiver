import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  VideoCameraOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, notification } from "antd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Table } from "antd";
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

const TypeJobAdmin = () => {

  const dispatch = useDispatch()

  const [valueType, setValue] = useState("");

  const [isDelete, setIsDelete] = useState(false);

  const [isAdd, setIsAdd] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

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
      title: "Type",
      dataIndex: "tenLoaiCongViec",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (record) => (
        <div>
          <button
            onClick={() => moveEditTypeJob(record)}
            className="user-action px-2"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={() => handleDeletTypeJob(record.id)}
            className="user-action "
          >
            <AiOutlineDelete />
          </button>
        </div>
      ),
    },
  ];

  const defaultType = {
    id: 0,
    tenLoaiCongViec: valueType,
  };

  const handleAddType = async (value) => {
    const index = typeJobs.findIndex(
      (i) => i.tenLoaiCongViec === value.tenLoaiCongViec
    );
    if (!value.tenLoaiCongViec) {
      notification.warning({
        message: `Type is required !`,
      });
    } else {
      if (index === -1) {
        try {
          await jobAPI.addTypeJob(value);
          notification.success({
            message: `Add Type Successful!`,
          });
          setIsAdd(!isAdd);
        } catch (error) {
          notification.error({
            message: "Add Type Failed!",
            description: error,
          });
        }
      } else {
        notification.error({
          message: `Type is already exist !`,
        });
      }
    }
  };

  const handleDeletTypeJob = async (id) => {
    try {
      await jobAPI.deleteTypeJob(id);
      setIsDelete(!isDelete);
      notification.success({
        message: `Delete type ${id} successful !`,
      });
    } catch (error) {
      notification.error({
        message: `Delete type ${id} failed !`,
        description: error,
      });
    }
  };

  const moveEditTypeJob = (data) =>{
      dispatch({type:'editTypeJob',data})
      movePath(`edittype/${data.id}`)
  }

  const { data: typeJobs } = useRequest(() => jobAPI.getTypeJob(), {
    deps: [isDelete, isAdd],
  });

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
              <form className="col-8">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Input a new type job"
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
              <button
                onClick={() => handleAddType(defaultType)}
                className="col-4 header-nav-btn mb-3 me-4"
                style={{ width: "160px" }}
              >
                Add New Type
              </button>
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
            <Table columns={columns} dataSource={typeJobs} />
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

export default TypeJobAdmin;
