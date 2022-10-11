import React from "react";
import { useParams } from "react-router";
import { IoIosArrowUp } from "react-icons/io";
import TypeJobHeading from "../component/TypeJobHeading/TypeJobHeading";
import TypeJobListLeft from "../component/TypeJobListLeft/TypeJobListLeft";
const TypeJob = () => {
  const { job } = useParams();

  return (
    <div className="">
      <TypeJobHeading id={job} />
      <div className="d-flex m-container">
        <div className="col-12">
          <TypeJobListLeft id={job} />
        </div>
      </div>
      {/* Guild */}
      <div className="typeJob-guild py-lg-5 py-3 m-container">
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#000000" }}>
          Related Guildes
        </h1>
        <div className="row gx-4 py-4">
          <div className="col-md-4 col-12 pb-4 pb-md-0">
            <img
              className="typeJob-guild-img w-100 rounded-2 pb-3"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/aaeee9bfb2a9ef57cff84fbcb8affba9-1593435384621/copywriting%20what%20is%20it.jpg"
              alt=""
            />
            <button
              className="typeJob-guild-btn"
              style={{ fontSize: "18px", fontWeight: "600", color: "#404145" }}
            >
              What is copywriting and what does a copywriter do?
            </button>
          </div>
          <div className="col-md-4 col-12 pb-4 pb-md-0">
            <img
              className="typeJob-guild-img w-100 rounded-2 pb-3"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/q_auto,f_auto/v1/attachments/generic_asset/asset/3fec19aafaa1922cbbd6ec5b6d85cae2-1593441714238/proofreading-fiverr.jpg"
              alt=""
            />
            <button
              className="typeJob-guild-btn"
              style={{ fontSize: "18px", fontWeight: "600", color: "#404145" }}
            >
              What is proofreading?
            </button>
          </div>
          <div className="col-md-4 col-12 pb-4 pb-md-0">
            <img
              className="typeJob-guild-img w-100 rounded-2 pb-3"
              src="https://fiverr-res.cloudinary.com/image/upload/w_600/f_auto,q_auto/v1/attachments/generic_asset/asset/577bf2daa353b8da6ca1c0b1f76f2ad8-1610904279079/brand%20storytelling-min.jpg"
              alt=""
            />
            <button
              className="typeJob-guild-btn"
              style={{ fontSize: "18px", fontWeight: "600", color: "#404145" }}
            >
              What is storytelling?
            </button>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <div style={{ background: "#fafafa" }} className="typeJob-faq py-3 py-lg-5">
        <div className="d-flex flex-column m-container">
          <h1
            className="text-center"
            style={{ fontSize: "24px", fontWeight: "700", color: "#000000" }}
          >
            FAQs
          </h1>
          <div className="py-4 py-3 py-lg-5">
            <div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>How should I choose a writer?</p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  Great content is now a must for your business so finding the right writer is one of the keys to success. Clearly define your content goals before you even start looking for a freelancer, then choose the right category and research by reading reviews and looking at portfolios, skills, and experience before you shortlist a few writers. Contact the few sellers you have selected and directly ask them some questions to assess their level of knowledge and expertise.
                  </p>
                </div>
              </div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>How can content help my business?</p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  Content can make or break your business so it’s important that you use it in all your channels - website, social media, emails, adverts, etc. - in a way that helps and promotes your business. A good content writer will not only craft compelling text but will be able to ask the right questions beforehand so they can be sure to create an article or advert or microcopy that sells your brand in the right way to the right people.
                  </p>
                </div>
              </div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>
                  What is the difference between copywriting and content writing?
                  </p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  Storytelling is key for both copywriters and content writers, but it is used for different purposes. A copywriter aims to convert and sell a product or service with the story. Whereas a content writer is more about engagement and building commitment and it can take many detours before even remotely mentioning the brand or product. Copywriting commands the reader with a clear call to action, whereas content writers craft an intricate interaction through more prolonged conversation with the audience.
                  </p>
                </div>
              </div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>Why is content important?</p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  Whether it’s website content, brand identity deck, sales materials, or any other content, it’s the most important tool you have to tell a compelling story. Even though images tell a thousand words, you still need to actually use the words to attract visitors and turn them into (loyal) customers. With so much choice of talent from all different backgrounds and industries, it’s never been easier to achieve thoroughly researched polished content that shines consistently and engages the right audience.
                  </p>
                </div>
              </div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>What languages do you support for translation?</p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  Find a professional certified and/or native translator in almost any language that you need here on Fiverr. Starting with Spanish, French, German, Mandarin, Tamil, Portuguese, Indonesian, and also not so widely spoken languages such as Icelandic or Maltese. Freelancers can take on small niche orders or bigger projects to be delivered in milestones and depending on their experience and competence level can translate from and to any language, with English most frequently the target/source language.
                  </p>
                </div>
              </div>
              <div className="jobDetail-faq-title jobDetail-gig border-bottom">
                <div className="d-flex py-3 justify-content-between">
                  <p>What type of writing services can I find on Fiverr?
</p>
                  <button className="jobDetail-faq-btn">
                    <IoIosArrowUp />
                  </button>
                </div>
                <div className="jobDetail-faq-content">
                  <p>
                  From blog posts, articles, UX/UX microcopy, and other website content to books, ebooks, technical writing, translations or sales copy, you can find the right freelancer here. A professional can adapt their style to your needs and offer services for your site, brand strategy or creative project, script or resume. Even if you’re confident in your own writing abilities you can get experienced editors to proofread and copy edit your content to ensure it’s fit for your purpose and audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="py-lg-5 py-3 m-container">
        <div className="d-flex flex-column">
        <h1 className="text-center" style={{ fontSize: "24px", fontWeight: "700", color: "#000000" }}>
      Services Related
        </h1>
        <div className="d-flex flex-wrap justify-content-center p-lg-5 p-3">
          <button className="m-2 typeJob-services">English to japanese translations
</button>
          <button className="m-2 typeJob-services">Ghostwriting</button>
          <button className="m-2 typeJob-services">English to french translations</button>
          <button className="m-2 typeJob-services">Proofreading & editing</button>
          <button className="m-2 typeJob-services">Website content</button>
          <button className="m-2 typeJob-services">English to german translations</button>
          <button className="m-2 typeJob-services">English to spanish translations</button>
          <button className="m-2 typeJob-services">Resume writing</button>
          <button className="m-2 typeJob-services">Translation services</button>
          <button className="m-2 typeJob-services">Design landing page</button>
          <button className="m-2 typeJob-services">Web design</button>
          <button className="m-2 typeJob-services">Make a promote video</button>
          <button className="m-2 typeJob-services">Bussiness</button>
          <button className="m-2 typeJob-services">Content video</button>
          <button className="m-2 typeJob-services">App content</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TypeJob;
