import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
import useRequest from "../../hook/useRequest";
import jobAPI from "../../apis/jobAPI";
const Header = () => {
  // const [fix, setFix] = useState(false);
  // const setFixed = () => {
  //   if (window.scrollY >= 10) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // };
  // window.addEventListener("scroll", setFixed);

  const [value, setValue] = useState("");

  const navigate = useNavigate();

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

  return (
    <div className="nav-fixed">
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
          <div className="header-search col-4" style={{ display: "block" }}>
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
                className="hd-sr-btn"
              >
                <BiSearch color="white" size="16px" />
              </button>
            </form>
          </div>
          <nav className="header-nav flex-grow-1">
            <ul className="d-flex justify-content-end align-items-center">
              <li>
                <a className="fs-config px-3" href>
                  Become a Seller
                </a>{" "}
              </li>
              <li>
                <button
                  onClick={() => movePath("register")}
                  className="fs-config px-3"
                  href
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  onClick={() => movePath("login")}
                  className="nav-btn-fix"
                >
                  Join
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <ul
          style={{ display: "flex" }}
          className="m-auto justify-content-between sub-type border-top border-bottom"
        >
          {typeJob?.map((type) => {
            return (
              <li className="sub-title p-3" key={type.id}>
                <button onClick={() =>  movePath(`typejob/${type.id}`)}>{type.tenLoaiCongViec}</button>
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
