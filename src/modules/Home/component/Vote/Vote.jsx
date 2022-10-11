import React from "react";
import Slider from "react-slick";

const Vote = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5">
      <div className="m-container my-xl-5 my-0">
        <div className="vote-slider">
          <Slider {...settings}>
                <div className="d-flex align-items-center voted">
                    <div className="col-xl-5 col-12 ">
                        <img className="w-100 rounded-2" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg" alt="" />
                    </div>
                    <div className="col-xl-7 col-12">
                        <div className="vote-box">
                            <p className="vote-box-heading pt-2 pt-xl-0">Brighid Gannon (DNP, PMHNP-BC), Co-Founder | <img className="d-inline vote-box-img" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png" alt="" /></p>
                            <p className="vote-box-quote py-3 py-xl-0">
                            <cite>"We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."</cite>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center voted">
                    <div className="col-xl-5 col-12">
                        <img className="w-100 rounded-2" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg" alt="" />
                    </div>
                    <div className="col-xl-7 col-12">
                        <div className="vote-box">
                            <p className="vote-box-heading pt-2 pt-lg-0">Tim and Dan Joo, Co-Founders | <img className="d-inline vote-box-img" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png" alt="" /></p>
                            <p className="vote-box-quote py-3 py-lg-0">
                            <cite>"When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."</cite>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center voted">
                    <div className="col-xl-5 col-12">
                        <img className="w-100 rounded-2" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg" alt="" />
                    </div>
                    <div className="col-xl-7 col-12">
                        <div className="vote-box">
                            <p className="vote-box-heading pt-2 pt-lg-0">Kay Kim, Co-Founder | <img className="d-inline vote-box-img" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png" alt="" /></p>
                            <p className="vote-box-quote py-3 py-lg-0">
                            <cite>"It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."</cite>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center voted">
                    <div className="col-xl-5 col-12">
                        <img className="w-100 rounded-2" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg" alt="" />
                    </div>
                    <div className="col-xl-7 col-12">
                        <div className="vote-box">
                            <p className="vote-box-heading pt-2 pt-lg-0">Caitlin Tormey, Chief Commercial Officer | <img className="d-inline vote-box-img" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png" alt="" /></p>
                            <p className="vote-box-quote py-3 py-lg-0">
                            <cite>"We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."</cite>
                            </p>
                        </div>
                    </div>
                </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Vote;
