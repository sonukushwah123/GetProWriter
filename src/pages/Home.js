import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import GetinTouch from "./GetinTouch";
// import { Link } from "react-router-dom";

const Home = () => {


  return (
    <div>
      <section className="top_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="top_Sec-h1 mt-2 p-0">Add fire to your content!</h1>
              <h2 className="top_Sec-h2">Product Description Writing</h2>
              <p className="top_Sec-p">
                Get Quality Content For Your Business - Every Time: Hire a
                content writing team that can deliver quality content, blog
                posts, and website copy to power your business.
              </p>
            </div>

            <div className="col-md-6">
              <section className="form_sec">
                <GetinTouch />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row overlep_sec">
            <div className="col-md-3 overlep_sec1">
              <img
                src="writer/img/gpw-img1.png"
                alt="gpw"
                className="overlep_sec-img"
              />
              <h3 className="overlep_sec-h3">GPW REVIEWS</h3>
              <p className="overlep_sec-p">05 / 05</p>
            </div>

            <div className="col-md-3 overlep_sec2">
              <img
                src="writer/img/gpw-img2.png"
                alt="gpw-img2"
                className="overlep_sec-img"
              />
              <h3 className="overlep_sec-h3">TRUSTPILOT</h3>
              <p className="overlep_sec-p">4.9 / 05</p>
            </div>

            <div className="col-md-3 overlep_sec3">
              <img
                src="writer/img/gpw-img3.png"
                alt="gpw-img3"
                className="overlep_sec-img"
              />
              <h3 className="overlep_sec-h3">SITEJABBER</h3>
              <p className="overlep_sec-p">05 / 05</p>
            </div>

            <div className="col-md-3 overlep_sec4">
              <img
                src="writer/img/gpw-img4.png"
                alt="gpw-img4"
                className="overlep_sec-img"
              />
              <h3 className="overlep_sec-h3">GOOGLE REVIEW</h3>
              <p className="overlep_sec-p">4.9 / 05</p>
            </div>
          </div>
        </div>
      </section>

      <section className="writing_sec">
        <div className="container">
          <div className="row">
            <h2 className="writing_sec-h2">
              Leverage the writing power of experts
            </h2>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>
            <p className="writing_sec-p">
              Prepare to ace your content writing by hiring our top-notch
              content writers.
            </p>

            <div className="col-md-3 text-center">
              {/* <Link
                to="/ghost-writing-services"
                className="text-decoration-none"
              > */}{" "}
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-ghost box_icon ms-0 "
                ></i>
                <h3 className="box-h3">Ghost Writing</h3>
              </div>
              {/* </Link> */}
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-file-signature box_icon ms-0"
                ></i>
                <h3 className="box-h3">Review Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-blog box_icon ms-0 "
                ></i>
                <h3 className="box-h3">Blog Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-pencil-alt box_icon ms-0"
                ></i>
                <h3 className="box-h3">Freelance Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-pen-square  box_icon ms-0"
                ></i>
                <h3 className="box-h3">Product Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-copyright  box_icon ms-0"
                ></i>
                <h3 className="box-h3">Copywriting</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="far fa-file-word box_icon ms-0 "
                ></i>
                <h3 className="box-h3">Content Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-laptop-code box_icon ms-0"
                ></i>
                <h3 className="box-h3">Article Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="far fa-file-alt box_icon ms-0 "
                ></i>
                <h3 className="box-h3">SEO Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-pen-fancy box_icon ms-0 "
                ></i>
                <h3 className="box-h3">Other Content Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-quote-left box_icon ms-0"
                ></i>
                <h3 className="box-h3">Testimonials Writing</h3>
              </div>
            </div>

            <div className="col-md-3 text-center">
              <div className="box">
                <i
                  aria-hidden="true"
                  className="fas fa-envelope box_icon ms-0 "
                ></i>
                <h3 className="box-h3">Email Writing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="count_h2">Check us out and see for yourself:</h2>
              <div className="row">
                <div className="col-sm-6 counter border-end border-bottom  border-2">
                  <div className="counter1 border-0">
                    <h2 className="second_row-h2">
                      <span
                        className="timer count-title count-number"
                        data-to="35860"
                        data-speed="2000"
                      >
                        35860
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>{" "}
                    </h2>
                    <h3 className="count_h3">Content Pieces Delivered</h3>
                  </div>
                </div>
                <div className="col-sm-6 counter border-bottom border-2">
                  <div className="counter_1a border-0">
                    <h2 className="second_row-h2">
                      <span
                        className="timer count-title count-number"
                        data-to="896588"
                        data-speed="2000"
                      >
                        896588
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 className="count_h3">Words Written</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 counter  border-end border-2 ">
                  <div className="counter1b border-0">
                    <h2 className="second_row-h2">
                      <span
                        className="timer count-title count-number"
                        data-to="5000"
                        data-speed="2000"
                      >
                        5000
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 className="count_h3">Professional Writers</h3>
                  </div>
                </div>

                <div className="col-sm-6 counter ">
                  <div className="counter_1c border-0">
                    <h2 className="second_row-h2">
                      <span
                        className="timer count-title count-number"
                        data-to="93.56"
                        data-speed="2000"
                      >
                        93.56
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 className="count_h3">Percent Client Retention</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <h2 className="count_h2">
                Content that makes your business looks good
              </h2>
              <p className="count-p">
                Awesome, engaging, and practical content that’s designed to grab
                the attention of customers and make you look good.
              </p>
              <div className="video">
                <img
                  src="writer/img/Getprowriter.jpg"
                  alt="Getprowriter"
                  className="count-img"
                />

                <a href="https://www.youtube.com/embed/rlcoakSMvOQ?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&end=141.2&enablejsapi=1&origin=https%3A%2F%2Fgetprowriter.com&widgetid=1">
                  <i className="fa fa-play-circle-o count-img-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="writing_sec">
        <div className="container">
          <div className="row">
            <h3 className="content_sec-h3">
              Why shall you choose GetProWriter’s content writing service?
            </h3>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>
            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="far fa-sun content-icon ms-0"
                ></i>
                <h3 className="content-h3">The SEO Factor</h3>
                <p className="content-p">
                  When it comes to writing, your success on search engines
                  relies mainly on the SEO-Optimized content you use. Our SEO
                  content writing services are designed to give your website a
                  leg up on the competition.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="fas fa-hands-helping content-icon ms-0"
                ></i>
                <h3 className="content-h3">Brand Tone</h3>
                <p className="content-p">
                  You know your business; we know words. We put every word under
                  a microscope to ensure proper spelling, grammar, and adhering
                  to brand voice. So you can be assured that you are getting the
                  best possible results for your project.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="fas fa-shipping-fast content-icon ms-0"
                ></i>
                <h3 className="content-h3">Fast Turnaround</h3>
                <p className="content-p">
                  GetProWriter is well-known for its fast turnaround times and
                  exceptional customer service, attributes enjoyed by tens of
                  thousands of regular clients from all over the world.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="fas fa-medal content-icon ms-0"
                ></i>
                <h3 className="content-h3">Subject Matter Focus</h3>
                <p className="content-p">
                  We have skilled writers with an eye for detail. Each of the
                  articles we produce is thoroughly researched and written by an
                  expert with a focus on your chosen subject matter.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="fas fa-book-open content-icon ms-0"
                ></i>
                <h3 className="content-h3">Professionally-Written Content</h3>
                <p className="content-p">
                  GetProWriter is a team of expert content creators. Qualified
                  and professional writers who will research, write and edit
                  consistently quality content to help you grow your business.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="content-box text-center">
                <i
                  aria-hidden="true"
                  className="far fa-check-circle content-icon ms-0"
                ></i>
                <h3 className="content-h3">Strict Quality Check</h3>
                <p className="content-p">
                  The team of quality editors and proofreaders carefully revise
                  the content to the highest level of accuracy, consistency, and
                  readability. GetProWriter is a highly specialized and
                  experienced company that focuses on creating quality content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <div className="row">
            <h2 className="get_sec-h2">
              Leverage the writing power of experts
            </h2>
            <p className="get_sec-p">
              Prepare to ace your content writing by hiring our top-notch
              content writers.
            </p>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>

            <div className="col-md-4">
              <div className="get_sec-box">
                <h2 className="get_sec-box_h2">STEP 1</h2>
                <h3 className="get_sec-box_h3">Make a request</h3>
                <img
                  src="writer/img/istockphoto.jpg"
                  alt="istockphoto"
                  className="get_sec-box_img"
                />
                <p className="get_sec-box_p">
                  Create an account today and use our convenient dashboard to
                  request any form of content, whenever you need it.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="get_sec-box">
                <h2 className="get_sec-box_h2">STEP 2</h2>
                <h3 className="get_sec-box_h3">Let us write your content</h3>
                <img
                  src="writer/img/team.jpg"
                  alt="team"
                  className="get_sec-box_img"
                />
                <p className="get_sec-box_p">
                  Our team of skilled writers can produce effective and
                  innovative content that appeals to your intended audience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="get_sec-box">
                <h2 className="get_sec-box_h2">STEP 3</h2>
                <h3 className="get_sec-box_h3">Get your content copy</h3>
                <img
                  src="writer/img/deliver.jpg"
                  alt="deliver"
                  className="get_sec-box_img"
                />
                <p className="get_sec-box_p">
                  We’ll promptly deliver your content via e-mail to the address
                  associated with your purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="img_testimonial">
        <div className="container">
          <div className="row">
            <h2 className="writing_sec-h2">Some of our esteemed key Clients</h2>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>

            <Swiper
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              // centeredSlides={true}
              modules={[Autoplay, FreeMode]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/lego.webp"
                    alt="lego"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/Allianz.webp"
                    alt="Allianz"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/Citi.webp"
                    alt="Citi"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/zara-logo.webp"
                    alt="zara"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/loreal-logo.webp"
                    alt="loreal-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/gillette-logo.webp"
                    alt="gillette-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/sap-logo.webp"
                    alt="sap-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/att-logo.webp"
                    alt="att-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/toyota-logo.webp"
                    alt="toyota-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/ikea-logo.webp"
                    alt="ikea-logo"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="testi_sec">
        <div className="container">
          <div className="row">
            <h2 className="testi_sec-h2">What are our clients saying?</h2>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>
            <div className="col-md-6">
              <div className="testi_box">
                <p className="testi_box-p">
                  I am a tech-centric entrepreneur and I’m always looking for
                  ways to improve my business and grow my revenue streams. I
                  recently discovered the power of SEO and how it can help my
                  business. I hired Getprowriter.com to write SEO-Optimized
                  content for all of my website pages. They made it easy for me
                  to achieve top rankings in search engines, thereby bringing me
                  new leads almost every day.
                </p>
                <div className="t_sels">
                  <img
                    src="writer/img/Katy-Wong.webp"
                    alt="Katy-Wong"
                    className="testi_box-img"
                  />
                  <h3 className="testi_box-h3"> Katy Wong</h3>
                  <p className="testi_box-p">JotSuccess Services</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="testi_box">
                <p className="testi_box-p">
                  Being a renowned blogger I used to write content for my blog.
                  After writing for several years, I felt that it was not my
                  strong point. I contacted Getprowriter.com to help me out with
                  content writing. They are great at what they do and they also
                  understand the importance of time. Now, I can concentrate on
                  other important things in my business while they take care of
                  writing my blog posts.
                </p>
                <div className="t_sels">
                  <img
                    src="writer/img/technical-writer.jpg"
                    alt="technical-writer"
                    className="testi_box-img"
                  />
                  <h3 className="testi_box-h3">John Paul Sims</h3>
                  <p className="testi_box-p">Techfreaky Inc.</p>
                </div>
              </div>
            </div>
            <h6 className="text-center">
              <button
                type="button"
                className=" rounded-3 text-white p-3 bg-transparent"
                style={{ border: "solid 3px #fff" }}
              >
                All Testimonials
              </button>
            </h6>
            <p className="down_p">
              45.2{" "}
              <span className="down_p-spa">
                <span className="writing_sec-spa">
                  <i className="fa-sharp fa-solid fa-star star_r"></i>
                  <i className="fa-sharp fa-solid fa-star star_r"></i>
                  <i className="fa-sharp fa-solid fa-star star_r"></i>
                  <i className="fa-sharp fa-solid fa-star star_r"></i>
                  <i className="fa-sharp fa-solid fa-star star_r"></i>
                </span>
              </span>{" "}
              | 940 Customers Reviwes
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="faq_h2">Frequently Asked Question</h2>
              <p className="faq_p">
                Do you have a question concerning our content writing services?
                Check our Frequently Asked Questions page. We’ve chosen some of
                the most frequently asked questions to provide you with a better
                knowledge of our service offerings and the skills of our content
                writers.
              </p>
              <button type="button" className=" btn-read">
                Read More
              </button>
            </div>

            <div className="col-md-6">
              <section className="faq_section accordion" id="accordionExample">
                <div className="faq-inner">
                  <div className="faq-item p-0 bg_set accordion-item">
                    <h2
                      className="faq_item-h3 p-0 accordion-header"
                      id="headingOne"
                    >
                      <button
                        className="faq-plus fs-5 fw-normal align-items-baseline accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        How does your content writing process work?
                      </button>
                    </h2>

                    <div
                      className="bg-white accordion-collapse collapse"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        We will analyse your project requirements and
                        specifications once you have completed the online order
                        submission and payment procedure. This normally takes
                        one to two days, depending on the complexity and
                        requirements of your project.
                      </div>
                    </div>
                  </div>

                  <div className="faq-item p-0 bg_set accordion-item">
                    <h2
                      className="faq_item-h3 p-0 accordion-header"
                      id="headingTwo"
                    >
                      <button
                        className="faq-plus fs-5 fw-normal align-items-baseline accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Can I own content copyright with my order?
                      </button>
                    </h2>

                    <div
                      className="bg-white accordion-collapse collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        {" "}
                        Yes, you have exclusive copyright as soon as We’ve
                        turned in the document and you pay for it. After We’ve
                        handed over the documents, it’s up to you to decide what
                        to do with the information. You can re-distribute it,
                        alter it, truncate it, or just remove it (although this
                        would be heartbreaking and discouraging).
                      </div>
                    </div>
                  </div>
                </div>

                <div className="faq-item p-0 bg_set accordion-item">
                  <h2
                    className="faq_item-h3 p-0 accordion-header"
                    id="headingThree"
                  >
                    <button
                      className="faq-plus fs-5 fw-normal align-items-baseline accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do you check contents on Copyscape or other related
                      software?
                    </button>
                  </h2>

                  <div
                    className="bg-white accordion-collapse collapse"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      {" "}
                      We analyze articles for grammatical correctness using our
                      Copyscape VIP account. All of the content we create is
                      delivered by our editorial team.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
