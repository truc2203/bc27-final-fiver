import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import BookingJob from "../BookingJob/BookingJob";
const JD = ({ id }) => {
  const { data: jd } = useRequest(() => jobAPI.getJobDetail(id));
  if (!jd) {
    return;
  }
  return (
    <>
      {jd.map((detail) => {
        return (
          <>
            <p key={detail.id} className="jobDetail-title pb-4 pt-4 pt-sm-0">{detail.congViec.tenCongViec}</p>
            <div className="d-flex pb-4 align-items-center">
              <img
                className="rounded-circle me-3"
                style={{ width: "30px", height: "30px" }}
                src={detail.avatar}
                alt=""
              />
              <p className="listJob-heading">
                {detail.tenNguoiTao}{" "}
                <span className="ps-2 listJob-subHeading">Level1 Seller</span>
              </p>
              <p className="px-2">|</p>
              <div
                style={{ fontSize: "20px" }}
                className="d-flex align-items-center listJob-rate"
              >
                <AiFillStar />
                {detail.congViec.saoCongViec}
              </div>
              <span className="listJob-subHeading px-2">3 Order in Queue</span>
            </div>
            <div>
              <img
                className="w-100 jobDetail-img"
                src={detail.congViec.hinhAnh}
                alt=""
              />
            </div>
            <div className="d-none bookingJob-breakpoint">
              <BookingJob jobId={id}/>
            </div>
            <div className="jobDetail-gig pt-5 pb-4 pb-lg-5">
              <div className="border-bottom">
                <p className="jobDetail-title pb-4">About this Gig</p>
                <p className="pb-3">
                  {detail.congViec.moTa}
                </p>
              </div>
              <div className="d-flex py-3">
                <p>{detail.congViec.moTaNgan}</p>
              </div>
            </div>
            <div className="d-flex flex-column pb-4 pb-lg-5">
              <p className="jobDetail-title pb-4">About the Seller</p>
              <div className="d-flex align-items-center mb-4">
                <img
                  className="rounded-circle me-3"
                  style={{ width: "110px", height: "110px" }}
                  src={detail.avatar}
                  alt=""
                />
                <div>
                  <p className="listJob-heading pb-2">{detail.tenNguoiTao}</p>
                  <p className="pb-2">Your App Idea ready for lauch</p>
                  <div
                    style={{ fontSize: "16px" }}
                    className="d-flex align-items-center listJob-rate pb-3"
                  >
                    <AiFillStar />
                    {detail.congViec.saoCongViec}
                  </div>
                  <button className="jobDetail-btn border">Contact Me</button>
                </div>
              </div>
              <div className="d-flex border p-4 flex-column rounded-3">
                <div className="col-12 d-flex ">
                  <div className="d-flex flex-wrap col-12 border-bottom">
                    <div className="col-6 pb-3">
                      <p className="jobDetail-profile-heading">From</p>
                      <p className="jobDetail-profile-content">India</p>
                    </div>
                    <div className="col-6 pb-3">
                      <p className="obDetail-profile-heading">Member since</p>
                      <p className="jobDetail-profile-content">Nov 2013</p>
                    </div>
                    <div className="col-6 pb-3">
                      <p className="obDetail-profile-heading">Avg. Respone time</p>
                      <p className="jobDetail-profile-content">3 Hour</p>
                    </div>
                    <div className="col-6 pb-3">
                      <p className="obDetail-profile-heading">Last delivery</p>
                      <p className="jobDetail-profile-content">6 days</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 pt-3">
                  <p className="jobDetail-profile-heading">
                    I’m Dhairya Ganatra (FlaSh), a Designer and Developer with a
                    real zeal for building websites/apps that generate results.
                    I work with a team of freelancers, together we do all kind
                    of website and app design/development.
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-4 pb-lg-5">
              <p className="jobDetail-title">FAQ</p>
              <div>
                <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                  <div className="d-flex py-3 justify-content-between">
                    <p>Do you provide hosting and domain</p>
                    <button className="jobDetail-faq-btn">
                      <IoIosArrowUp />
                    </button>
                  </div>
                  <div className="jobDetail-faq-content">
                    <p>
                      No I will not provide any hosting and domain if you want
                      then contact me I will tell you which hosting is best for
                      you according to your website.
                    </p>
                  </div>
                </div>
                <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                  <div className="d-flex py-3 justify-content-between">
                    <p>Support period once the order will be completed?</p>
                    <button className="jobDetail-faq-btn">
                      <IoIosArrowUp />
                    </button>
                  </div>
                  <div className="jobDetail-faq-content">
                    <p>
                      I respect everyone that's why I will give you free
                      assistance of what I do for 14 DAYS once the order will be
                      completed. Moreover, You can ask me for text and image
                      changes once the order will be completed
                    </p>
                  </div>
                </div>
                <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                  <div className="d-flex py-3 justify-content-between">
                    <p>
                      Can I change the text and image at my website later on ?
                    </p>
                    <button className="jobDetail-faq-btn">
                      <IoIosArrowUp />
                    </button>
                  </div>
                  <div className="jobDetail-faq-content">
                    <p>
                      Yes you can change it yourself if you want to do then I
                      will provide you the video to change text and images at
                      your website once the designs are done.
                    </p>
                  </div>
                </div>
                <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                  <div className="d-flex py-3 justify-content-between">
                    <p>Do you provide logo or content ?</p>
                    <button className="jobDetail-faq-btn">
                      <IoIosArrowUp />
                    </button>
                  </div>
                  <div className="jobDetail-faq-content">
                    <p>
                      No I will not provide any logo or content you have to
                      provide me all these things. But if you want I will place
                      the dummy content for you once the design is done you can
                      provide me text or even you can ask me for image and
                      content changes once the order will be completed within 45
                      days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-4 pb-lg-5">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="jobDetail-title pb-4">99 Review</p>
                <p className="jobDetail-profile-content">Sort by Most recent</p>
              </div>
              <div>
                <div className="d-flex flex-column flex-lg-row">
                  <div className="col-lg-6 col-12 d-flex flex-column">
                    <div className="d-flex w-100 align-items-baseline pb-3">
                      <button className="jobDetail-vote-text">5 Start</button>
                      <div className="jobDetail-vote-bar"></div>
                      <p className="jobDetail-vote-text">(99)</p>
                    </div>
                    <div className="d-flex w-100 align-items-baseline pb-3">
                      <button className="jobDetail-vote-text">4 Start</button>
                      <div className="jobDetail-vote-bar2"></div>
                      <p className="jobDetail-vote-text">(0)</p>
                    </div>
                    <div className="d-flex w-100 align-items-baseline pb-3">
                      <button className="jobDetail-vote-text">3 Start</button>
                      <div className="jobDetail-vote-bar2"></div>
                      <p className="jobDetail-vote-text">(0)</p>
                    </div>
                    <div className="d-flex w-100 align-items-baseline pb-3">
                      <button className="jobDetail-vote-text">2 Start</button>
                      <div className="jobDetail-vote-bar2"></div>
                      <p className="jobDetail-vote-text">(0)</p>
                    </div>
                    <div className="d-flex w-100 align-items-baseline pb-3">
                      <button className="jobDetail-vote-text">1 Start</button>
                      <div className="jobDetail-vote-bar2"></div>
                      <p className="jobDetail-vote-text">(0)</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 d-flex flex-column rating ps-lg-3 ps-0">
                    <p className="pb-4 jobDetail-gig">Rating Breakdown</p>
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between pb-3">
                        <p className="jobDetail-rating-title">
                          Seller communication level
                        </p>
                        <p className="listJob-rate">
                          <AiFillStar />5
                        </p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <p className="rating-title">Recommend to a friend</p>
                        <p className="listJob-rate">
                          <AiFillStar />5
                        </p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <p className="rating-title">Service as described</p>
                        <p className="listJob-rate">
                          <AiFillStar />5
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="jobDetail-title pb-4">Filter</p>
              <div className="header-search" style={{ display: "block" }}>
                <form className="d-flex pb-3">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Search Reviews"
                  />
                  <button type="submit" className="header-search-btn">
                    <BiSearch color="white" size="16px" />
                  </button>
                </form>
                <div class="form-check pb-3 border-bottom">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label jobDetail-gig ps-2"
                    for="flexCheckDefault"
                  >
                    Delivery images (369)
                  </label>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default JD;
