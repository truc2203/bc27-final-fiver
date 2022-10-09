import React from "react";
import Slider from "react-slick";

const Category = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 876,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
    ]
  };
  return (
    <div className="my-xl-5 my-0">
      <div className="m-container py-5">
        <p className="ca-hd pb-4">Popular Professional Services</p>
        <div className="ca-sd">
          <Slider {...settings}>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Build your brand</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Logo Design</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Custommize your site</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>WordPress</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Share your message</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Voice Over</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Engage your audienci</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Video Explainer</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Reach more customer</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Social Media</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Unlock grow online</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>SEO</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Color your dreams</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Illustration</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Go Global</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Stranlation</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Learn your bussiness</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Data Entry</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
                <div className="ca-item">
                    <a href>
                    <div className="position-absolute text-light ca-title" style={{top:'0',zIndex:'999'}}>
                        <small style={{fontSize:'14px',fontWeight:'500'}}>Showcase your story</small>
                        <p style={{fontSize:'24px',fontWeight:'700'}}>Book Covers</p>
                    </div>
                    <div className="position-absolute">
                        <img className='' src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png" alt="" />
                    </div>
                    </a>
                    
                </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
