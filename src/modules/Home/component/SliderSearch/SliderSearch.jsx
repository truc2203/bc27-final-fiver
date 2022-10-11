import React from "react";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router";
const SliderSearch = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleSearchJob = (value) => {
    if (!value) {
      return;
    }
    navigate(`categories/${value}`);
  };

  return (
    <div className="m-container">
      <div className="d-flex">
        <div className="col-6 sliderSearch">
          <p className="sliderSearch-title pb-4">
            Find the perfect freelandce services for your bussiness
          </p>
          <form className="d-flex pb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Try 'Buiding modile app' "
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              onClick={() => handleSearchJob(value)}
              type="submit"
              className="sliderSearch-btn"
            >
              Search
            </button>
          </form>
          <div className="d-flex text-light sliderSearch-popular">
            Polular :{" "}
            <ul className="d-flex">
              <li>
                {" "}
                <a className="sliderSearch-keyword mx-2" href>
                  Website Design
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="sliderSearch-keyword mx-2" href>
                  Wordpress
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="sliderSearch-keyword mx-2" href>
                  Logo Design
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="sliderSearch-keyword mx-2" href>
                  Logo Design
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="sliderSearch-sub d-none">
          <div className="d-flex">
            <div className="sliderSearch-sub-heading">
              <p className="sliderSearch-title pb-4">
                Find the perfect freelandce services for your bussiness
              </p>
              <form className="d-flex pb-0 pb-lg-4 flex-column">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Try 'Buiding modile app' "
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  onClick={() => handleSearchJob(value)}
                  type="submit"
                  className="sliderSearch-btn"
                >
                  Search
                </button>
              </form>
              <div className="d-flex text-light sliderSearch-popular">
                Polular :{" "}
                <ul className="d-flex">
                  <li>
                    {" "}
                    <a className="sliderSearch-keyword mx-2" href>
                      Website Design
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="sliderSearch-keyword mx-2" href>
                      Wordpress
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="sliderSearch-keyword mx-2" href>
                      Logo Design
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="sliderSearch-keyword mx-2" href>
                      Logo Design
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSearch;
