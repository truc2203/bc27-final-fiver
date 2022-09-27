import React from "react";
import useRequest from "../../../../hook/useRequest";
import jobAPI from "../../../../apis/jobAPI";
import { AiFillStar } from "react-icons/ai";
const JD = ({ id }) => {
  const { data: jd } = useRequest(() => jobAPI.getJobDetail(id));
  if (!jd) {
    return;
  }
  return (
    <>
      <p className="jd-title pb-4">{jd.name}</p>
      <div className="d-flex pb-4">
        <img
          className="rounded-circle me-3"
          style={{ width: "30px", height: "30px" }}
          src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/461c94959a48ebe45f55673a681eaf1e-1633139902605/7e45b689-f024-4045-8a00-42868263714c.jpg"
          alt=""
        />
        <p className="lj-hd">
          {jd.userCreated} <span className="ps-2 lj-subhd">Level1 Seller</span>
        </p>
        <p className="px-2">|</p>
        <div
          style={{ fontSize: "20px" }}
          className="d-flex align-items-start lj-rate"
        >
          <AiFillStar />
          {jd.rating}
        </div>
        <span className="lj-subhd px-2">3 Order in Queue</span>
      </div>
      <div>
        <img className="w-100 jd-img" src={jd.image} alt="" />
      </div>
      <div className="gig py-5">
        <div className="border-bottom">
          <p className="jd-title pb-4">About this Gig</p>
          <p className="pb-3">
            Hello there! Do you want to build a funnel that channels website
            visitor (traffics) into prospective and returning buyers or members?
            looking for a sales funnel expert in website builder & CMS category
            in gohighlevel, a quality Shopify sales funnel service provider.
            Then I must say your search on fiverr ends here with me. As I will
            create your funnel on clickfunnel salesfunnel, gohighlevel, kartra
            sales funnel, ClickBank affiliate marketing, landing page sales
            funnel, groove funnel sales funnel, Shopify sales funnel connected
            with your automation provider(mail chimp, getresponse, aweber, mail
            jet)and many more. I will build your webinar funnel into your
            community membership. If you really want to make funnels that
            commands high sales, then reach me for my services which includes
          </p>
          <ul className="pb-3 ps-5">
            <li>clickfunnels</li>
            <li>clickfunnel landing page</li>
            <li>clickfunnels</li>
            <li>clickfunnels</li>
          </ul>
          <ul className="pb-3 ps-5">
            <li>kajabi landing page</li>
            <li>kajabi online course</li>
            <li>kajabi website</li>
            <li> kajabi website design</li>
          </ul>
          <ul className="pb-3 ps-5">
            <li>Gohigh level salesfunnel</li>
            <li>Ebook Salesfunnel</li>
            <li>Webinar registration and webinar funnel(live or evergreen)</li>
            <li>Credit repair</li>
          </ul>
        </div>
        <div className="d-flex py-3">
          <div className="pe-5">
            <p>Website type</p>
            <p>E-Commerce, Blog, Other</p>
          </div>
          <div>
            <p>Website type</p>
            <p>E-Commerce, Blog, Other</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column pb-5">
        <p className="jd-title pb-4">About the Seller</p>
        <div className="d-flex align-items-center mb-4">
          <img
            className="rounded-circle me-3"
            style={{ width: "110px", height: "110px" }}
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/2348027/original/IMG-20160628-WA0004.jpg"
            alt=""
          />
          <div>
            <p className="lj-hd pb-2">{jd.userCreated}</p>
            <p className="pb-2">Your App Idea ready for lauch</p>
            <div
          style={{ fontSize: "16px" }}
          className="d-flex align-items-start lj-rate pb-3"
        >
          <AiFillStar />
          {jd.rating}
        </div>
            <button className="jd-btn border">Contact Me</button>
          </div>
        </div>
        <div className="d-flex border p-4 flex-column rounded-3">
              <div className="col-12 d-flex ">
                  <div className="d-flex flex-wrap col-12 border-bottom">
                      <div className="col-6 pb-3">
                        <p className="profile-hd">From</p>
                        <p className="profile-content">India</p>
                      </div>
                      <div className="col-6 pb-3">
                        <p className="profile-hd">Member since</p>
                        <p className="profile-content">Nov 2013</p>
                      </div>
                      <div className="col-6 pb-3">
                        <p className="profile-hd">Avg. Respone time</p>
                        <p className="profile-content">3 Hour</p>
                      </div>
                      <div className="col-6 pb-3">
                        <p className="profile-hd">Last delivery</p>
                        <p className="profile-content">6 days</p>
                      </div>
                  </div>
              </div>
              <div className="col-12 pt-3">
                <p className="profile-hd">I’m Dhairya Ganatra (FlaSh), a Designer and Developer with a real zeal for building websites/apps that generate results. I work with a team of freelancers, together we do all kind of website and app design/development.</p>
              </div>
        </div>
      </div>
    </>
  );
};

export default JD;
