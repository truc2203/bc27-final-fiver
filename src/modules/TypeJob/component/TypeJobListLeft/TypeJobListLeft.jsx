import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
import { useState } from "react";
import { useNavigate } from "react-router";
const TypeJobListLeft = ({ id }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleGetCategories = (value) => {
    navigate(`../categories/${value}`);
  };

  if (id !== value) {
    setValue(id);
  }

  const { data: typeJob } = useRequest(() => jobAPI.getSubTypeJob(value), {
    deps: [value],
  });

  return (
    <div className="row gx-4">
      {typeJob?.map((sub) => (
        <>
          {sub.dsNhomChiTietLoai.map((sub2) => (
            <div className="col-3 p-3" key={sub2.id}>
              <img className="pb-3" src={sub2.hinhAnh} alt="NO IMAGE" />
              <p className="typeJob-btn ">
                {sub2.tenNhom}
                {sub2.dsChiTietLoai.map((sub3) => (
                  <button
                    onClick={() => handleGetCategories(sub3.tenChiTiet)}
                    style={{ display: "block" }}
                    className="typeJob-sub-2 pt-4"
                    key={sub3.id}
                  >
                    {sub3.tenChiTiet}
                  </button>
                ))}
              </p>
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default TypeJobListLeft;
