import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import useRequest from "../../hook/useRequest";
import { NavLink } from "react-router-dom";
import { logout } from "../../modules/Authentication/slices/authSlice";
import jobAPI from "../../apis/jobAPI";
import {
  MdOutlineNotifications,
  MdMailOutline,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")) || "";
  const dispatch = useDispatch()
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLogout, setisLogout] = useState(false)
  // const [fix, setFix] = useState(false)

  // const setFixed = () => {
  //   if(window.scrollY >= 100)
  //   {
  //     setFix(true)
  //   } else {
  //     setFix(false)
  //   }
  // }

  // window.addEventListener('scroll',setFixed())

  const navigate = useNavigate();

  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchJob = (value) => {
    if (!value) {
      return;
    }
    navigate(`categories/${value}`);
  };

  const movePath = (path) => {
    navigate(`/${path}`);
  };

  const { data: typeJob } = useRequest(() => jobAPI.getTypeJob());


  const handleLogout = () => {
    setisLogout(!isLogout)
    dispatch(logout())
    navigate('../')
  }

  return (
    <div className="header-nav-fixed">
      <div className="m-container">
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ height: "80px" }}
        >
          <a className="me-4" href="/">
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill={"#404145"}>
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </a>
          <div className="header-search header-nav-input col-4" style={{ display: "block" }}>
            <form className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="What service are you looking for today ?"
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => handleSearchJob(value)}
                type="submit"
                className="header-search-btn"
              >
                <BiSearch color="white" size="16px" />
              </button>
            </form>
          </div>
          <nav className="header-nav-auth flex-grow-1">
            <ul
              style={{ display: user === "" ? "flex" : "none" }}
              className="justify-content-end align-items-center"
            >
              <li>
                <a className="header-nav-seller header-config-text px-3" href="true">
                  Become a Seller
                </a>{" "}
              </li>
              <li>
                <button
                  onClick={() => movePath("register")}
                  className="header-config-text px-3"
                  href="true"
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={() => movePath("login")}
                  className="header-nav-btn"
                >
                  Join
                </button>
              </li>
            </ul>
            <ul
              style={{ display: user === "" ? "none" : "flex" }}
              className="justify-content-end align-items-center"
            >
              <li className="pe-3">
                <NavLink to="/">
                  <MdOutlineNotifications fontSize="20px" />
                </NavLink>
              </li>
              <li className="pe-3">
                <NavLink to="/">
                  <MdMailOutline fontSize="20px" />
                </NavLink>
              </li>
              <li className="pe-3">
                <NavLink to="/">
                  <MdOutlineFormatListBulleted fontSize="20px" />
                </NavLink>
              </li>
              <li className="d-flex position-relative header-nav-submenu">
                <button onClick={() => showMenu()}>
                  {" "}
                  <img
                    className="header-nav-avatar rounded-circle"
                    src="https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/142887567/original/850ee22c684fd9c1f572ef5f1cc8248013080eeb.png"
                    alt=""
                  />
                </button>
                <div
                  className="position-absolute header-submenu p-3 rounded-2"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <ul className="py-1 border-bottom">
                    <li className="pb-2 header-submenu-item"><NavLink to={`profile/${user.user?.id}`}>
                      Profile
                      </NavLink></li>
                    <li className="pb-2 header-submenu-item">Manage Request</li>
                    <li className="pb-2 header-submenu-item">Post a Request</li>
                  </ul>
                  <ul className="py-1 border-bottom">
                    <li className="py-2 header-submenu-item">Become a seller</li>
                    <li className="pb-2 header-submenu-item">Setting</li>
                    <li className="pb-2 header-submenu-item">Billing</li>
                  </ul>
                  <ul className="py-1 border-bottom">
                    <li className="py-3 header-submenu-item">English</li>
                    <li className="pb-2 header-submenu-item ">USD</li>
                    <li className="pb-2 header-submenu-item">Help & suport</li>
                  </ul>
                  <ul className="pb-1">
                    <li onClick={() => handleLogout()} className="pt-2 header-submenu-item">Logout</li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <ul
          style={{ display:"flex" }}
          className="m-auto justify-content-between sub-type border-top border-bottom"
        >
          {typeJob?.map((type) => {
            return (
              <li className="sub-title p-3" key={type.id}>
                <button onClick={() => movePath(`typejob/${type.id}`)}>
                  {type.tenLoaiCongViec}
                </button>
                <div className="subtypeJob position-absolute p-4 pb-0">
                  {type.dsNhomChiTietLoai.map((subtypeJob) => (
                    <div
                      className="d-flex flex-column subtypeJob-title "
                      key={subtypeJob.tenNhom}
                    >
                      <p className=" pb-3">{subtypeJob?.tenNhom}</p>
                      <div className="d-flex flex-column subtypeJob-sub pb-4">
                        {subtypeJob.dsChiTietLoai.map((listSubtypeJob) => (
                          <button
                            onClick={() =>
                              handleSearchJob(listSubtypeJob.tenChiTiet)
                            }
                            className="pb-2 text-start"
                          >
                            {listSubtypeJob.tenChiTiet}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
