import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import ReviewGetintouch from "../pages/ReviewGetintouch";
// import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
// import { Helmet, HelmetProvider, HelmetData } from "react-helmet-async";
// const helmetData = new HelmetData({});

const BlogWritingServices = () => {
  return (
    <div>
      <Helmet>
        <title>Blog Writing Services - Get Pro Writer</title>
        <meta
          name="description"
          content="Getprowriter.com is the best place to buy blog post from expert writer and professional blogger. Our Blog Writing Services are accessible to everyone in the world."
        />
      </Helmet>
      {/* <Helmet helmetData={helmetData}>
        <title>A fancy webpage</title>
        <meta property="og:title" content="A very important title" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta name="whatever" value="notImportant" />
        <link rel="notImportant" href="https://www.chipotle.com" />
      </Helmet> */}
      <section className="top_sec p-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="top_Sec-h1 mt-3 p-0">Amazing Blog Services!</h1>
              <h2 className="top_Sec-h2"> Affordable Blog Writing Services|</h2>
              <p className="top_Sec-p">
                GetProWriter is making blog writing services easily available
                for clients. Our mission is to provide clients with high-quality
                blog writing services at an affordable price. We believe in
                making hiring writers for your blog affordable. That is why our
                services are moderately priced.
              </p>
            </div>

            <div className="col-md-6">
              <section className="form_sec">
                <ReviewGetintouch />
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="writing_sec">
        <div className="container">
          <div className="row">
            <h2 className="writing_sec-h2">
              Hire Someone To Write Blog Posts - Only From GetProWriter!
            </h2>
            <span className="writing_sec-spa">* * * * *</span>
            <p className="writing_sec-p">
              Fantastic blog writers for hire for your business.
            </p>
            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Highly Talented</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Fantastic Skills</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Tested Knowledge</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Keywords Rich</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Top Quality</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Industry Levels</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Blog Champions</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Empowering Brands</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Original Blogs</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Experienced Writers</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Original Tone</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="wr-b">
                <h3 className="box-h3">Happy Companies</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rev_sec">
        <div className="container">
          <div className="row">
            <h2 className="rev_sec-h2">Online Blog Writing Delivered Easily</h2>

            <p className="rev_sec-p">
              The internet is a vast place with millions of websites competing
              for attention. As more people turn to the internet to find
              information about their interests and concerns, businesses have
              found that they need to have quality web content available in
              order to compete with other businesses in their niche. And we make
              effective blog writing happen!
            </p>
            <p className="rev_sec-p">
              GetProWriter is offering effective blog writing services to
              clients. We believe that every business has something important to
              say, but you shouldn’t have to be a writer to say it. Also, hiring
              good writers for your blog takes time. That’s why we’re here – to
              make sure your ideas are communicated in the most impactful way.
              So, if need the best blog writing services, get in touch with us
              immediately.
            </p>
          </div>
        </div>
      </section>
      <section class="counter_sec border-0  mt-5">
        <div class="container">
          <div class="row ">
            <h2 className="writing_sec-h2  mt-5 rws-h2 p-0">
              Top Bloggers For Hire On GetProWriter!
            </h2>
            <span className="writing_sec-spa">* * * * *</span>
            <p className="writing_sec-p">
              Best blog writing services for your business.
            </p>

            <div class="col-md-6">
              <h2 class="count_h2">Check us out and see for yourself:</h2>
              <div class="row">
                <div class="col-sm-6 counter border-end border-bottom  border-2">
                  <div class="counter1 border-0">
                    <h2 class="second_row-h2">
                      <span
                        class="timer count-title count-number"
                        data-to="35860"
                        data-speed="2000"
                      >
                        35,860
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 class="count_h3">Content Pieces Delivered</h3>
                  </div>
                </div>
                <div class="col-sm-6 counter border-bottom border-2">
                  <div class="counter_1a border-0">
                    <h2 class="second_row-h2">
                      <span
                        class="timer count-title count-number"
                        data-to="896588"
                        data-speed="2000"
                      >
                        5,896,588
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 class="count_h3">Words Written</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6 counter  border-end border-2 ">
                  <div class="counter1b border-0">
                    <h2 class="second_row-h2">
                      <span
                        class="timer count-title count-number"
                        data-to="5000"
                        data-speed="2000"
                      >
                        5,000
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 class="count_h3">Professional Writers</h3>
                  </div>
                </div>
                <div class="col-sm-6 counter ">
                  <div class="counter_1c border-0">
                    <h2 class="second_row-h2">
                      <span
                        class="timer count-title count-number"
                        data-to="93.56"
                        data-speed="2000"
                      >
                        93.56
                      </span>
                      <span style={{ paddingLeft: "5px" }}> </span>
                    </h2>
                    <h3 class="count_h3">Percent Client Retention</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <h2 class="count_h2">Get An Expert Blogger For Hire</h2>
              <p class="count-p">
                Hiring writers for your blog is not easy. But With GetProWriter,
                you can get an expert blogger for hire in no time. Many
                businesses are looking for a way to get in front of their
                audiences and share their message with the world. But not
                everyone gets a good blogger for hire to do it. And for them,
                GetProWriter is the answer!
              </p>
              <p class="count-p">
                We help people like you get blog writing packages easily. We’ve
                been helping people acquire the best blog writing services for
                many years now and we’ve worked with clients from around the
                world. GPW is the easiest way to get the professional help you
                need to make effective blog writing a reality. We’ll provide you
                with a writer who has experience writing content for websites.
                You’ll be able to work with our writers directly through our
                platform. So, hire someone to write blog posts today.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="rws_sec">
        <div className="container">
          <div className="row">
            <h2 className="writing_sec-h2 rws-h2 p-0">
              Skilled Blog Post Writers For Hire On GPW
            </h2>
            <span className="writing_sec-spa">* * * * *</span>
            <p className="writing_sec-p">
              Buy blog writing services packages conveniently.
            </p>

            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">
                Quality Driven Blog Post Writing Service
              </h3>
              <p className="ab_sec2-p rws-p">
                Our blog writing packages are all about quality and accuracy. We
                know how hard it is to find a writer who can do your job well,
                so we’ve made it our mission to bring you the best blog writing
                services. This is what your company needs to grow by leaps and
                bounds.
              </p>
              <p className="ab_sec2-p rws-p">
                Our effective blog writing professionals know their topics well.
                They will not only write blog posts that are informative but
                also ones that are fun to read. They’re also trained to write in
                a way that is SEO-friendly so your readers get the information
                they need and can find your site when they search for it. If
                you’re looking for a blog post writing service, let us help!
              </p>
            </div>
            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Quality-blog-post.webp"
                alt="No-match-review"
                className="rws-img"
              />
            </div>

            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Effective-blog-writer.webp"
                alt="Expertimental-review"
                className="rws-img"
              />
            </div>
            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">
                Effective Blog Writing Every Time
              </h3>
              <p className="ab_sec2-p rws-p">
                We believe in delivering effective services when it comes to
                blog writing. We understand that you want to be sure your
                audience will be engaged and they receive the information they
                need from your blog, so we take a personal and professional
                approach to every project. We work hard to make sure that hiring
                writers for your blog becomes worthwhile with us.
              </p>
              <p className="ab_sec2-p rws-p">
                We know that you have a lot on your plate, and we want to make
                sure that our blog writing service makes your life easier by
                providing high-quality, enriching content for your audience. If
                you’re looking to hire someone to write blog posts and create
                content that gets results, we’d love to talk with you about your
                project!
              </p>
            </div>

            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">
                Qualified Blog Writers For Your Enterprise
              </h3>
              <p className="ab_sec2-p rws-p">
                All our blog writers are qualified and they have the knack for
                it. They know how to write a blog post that will make you want
                to read it. We know that this is an important part of successful
                online blog writing and we want to provide you with the best
                content possible by bloggers for hire.
              </p>
              <p className="ab_sec2-p rws-p">
                We’ve chosen our blog post writers because of their vast
                expertise and experience. They are not just good at writing, but
                they’re also great at understanding what our customers want to
                read about. That’s why we’re proud to say that every single one
                of our blogs is written by a real person who knows their
                industry well. Get in touch with us to know more about the blog
                post writing service we offer.
              </p>
            </div>
            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Qualified-blog-writer.webp"
                alt="Online-review"
                className="rws-img"
              />
            </div>

            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Boost-Traffic.webp"
                alt="Grow-your-business"
                className="rws-img"
              />
            </div>
            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">
                Blog Posts To Boost User Traffic
              </h3>
              <p className="ab_sec2-p rws-p">
                We know that you’re looking for blog post writers who can boost
                your user traffic and we’ve got the best ones. Our writers are
                experienced in creating blog posts that get people talking about
                your brand. They are simply the masters of content. When they
                write your content, customers will want to read more of what
                you’ve published on your website.
              </p>
              <p className="ab_sec2-p rws-p">
                When you get a blogger for hire from us, he/she will create blog
                posts that are engaging and shareable. We’ll work with you to
                make sure we understand your brand’s voice and tone, so the
                writing sounds like it’s coming from someone at your company –
                not just some random person on the internet. Many clients are
                immensely happy with our offerings. If you want to hire someone
                to write blog posts, then we would want to know what kind of
                content you’d like us to create for you!
              </p>
            </div>

            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">Blog Posts That Are Genuine</h3>
              <p className="ab_sec2-p rws-p">
                We are a team of bloggers for hire that focuses on creating blog
                content that is genuine and reflects your brand message. Our
                writing style is friendly, easy to read, and attractive. We use
                simple language, short sentences, and analogies to make your
                content easily understood by everyone who reads it.
              </p>
              <p className="ab_sec2-p rws-p">
                We can write about any topic you choose and we have many years
                of experience in online blog writing as well as in drafting
                websites, social media posts, and more. So when you have a
                question about how your business can grow, or what the best
                approach is for attracting new customers – we know exactly how
                to get the answers. All you have to do is just send us your
                requirements for blog writing packages and we will revert back.
              </p>
            </div>
            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Genuine-post.webp"
                alt="Real-review-writer"
                className="rws-img"
              />
            </div>

            <div className="col-md-6 rws_Sec-6">
              <img
                src="writer/img/Expertise-4.webp"
                alt="Expertise"
                className="rws-img"
              />
            </div>
            <div className="col-md-6 rws_Sec-6">
              <h3 className="ab_sec2-h3 rws-h3">
                Blogs With GetProWriter Expertise
              </h3>
              <p className="ab_sec2-p rws-p">
                GetProWriter expertise simply elevates the level of your blog
                posts. We have a team of professional writers who can write your
                blog posts for you with ease. Our writers are experienced in the
                content writing industry and they are ready to deliver blog
                writing services packages at a fast pace.
              </p>
              <p className="ab_sec2-p rws-p">
                Whether it is an informative article or a conversational piece,
                we can do it all. Our blog post writers understand what makes
                content attractive and keep in mind all the important elements
                while writing a blog post. Our services come at affordable
                prices and have proven to be very effective in improving your
                brand awareness. So, for all your blog services needs – GPW is
                here to help!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="ltw_sec">
        <div className="container">
          <div className="row">
            <h2 className="get_sec-h2">Get Started Today At In A Few Clicks</h2>
            <p className="get_sec-p">
              Follow these super simple steps and get started with our services.
            </p>
            <span className="writing_sec-spa">* * * * *</span>

            <div className="col-md-4">
              <div className="get_sec-box">
                <h2 className="get_sec-box_h2">STEP 1</h2>
                <h3 className="get_sec-box_h3">Make a request</h3>
                <img
                  src="writer/img/Make-a-request.webp"
                  alt="Make-a-request"
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
                  src="writer/img/Let-us-write-your-content.webp"
                  alt="Let-us-write-your-content"
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
                  src="writer/img/Get-your-content-copy.webp"
                  alt="Get-your-content-copy"
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
            <h2 className="writing_sec-h2">SOME OF OUR ESTEEMED KEY CLIENTS</h2>
            <span className="writing_sec-spa">* * * * *</span>

            <Swiper
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
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
                    alt="loreal"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/gillette-logo.webp"
                    alt="gillette"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/sap-logo.webp"
                    alt="sap"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/att-logo.webp"
                    alt="att"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/toyota-logo.webp"
                    alt="toyota"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img-box">
                  <img
                    src="writer/img/testimonial/ikea-logo.webp"
                    alt="ikea"
                    className="d-block img-box_image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="hire_Sec">
        <div className="container">
          <div className="row">
            <h2 className="get_sec-h2">Why Hire Our Blog Writers?</h2>
            <p className="get_sec-p">
              To let your business grow significantly.
            </p>
            <span className="writing_sec-spa">* * * * *</span>
            <div className="col-md-4">
              <div className="box-ol">
                <ol className="m-0 d-flex align-items-center p-0">
                  <li className="in_li">
                    <span className="right_span">
                      <i aria-hidden="true" className="fas fa-check-circle"></i>
                    </span>
                  </li>
                  <li className="in_li">
                    <span className="spa_h2">Expert bloggers for hire</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-ol">
                <ol className="m-0 d-flex align-items-center p-0">
                  <li className="in_li">
                    <span className="right_span">
                      <i aria-hidden="true" className="fas fa-check-circle"></i>
                    </span>
                  </li>
                  <li className="in_li">
                    <span className="spa_h2">Mastered blog writing</span>
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box-ol">
                <ol className="m-0 d-flex align-items-center p-0">
                  <li className="in_li">
                    <span className="right_span">
                      <i aria-hidden="true" className="fas fa-check-circle"></i>
                    </span>
                  </li>
                  <li className="in_li">
                    <span className="spa_h2">
                      Affordable blog writing services on time
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <p className="review1-p">
              Our blog writers are full of ideas. Ideas about how to grow your
              business to the next level and make it more successful than ever.
              We know that, in order for your business to be successful, you
              need to have a plan. You need something concrete: a way to
              increase sales and make your company stand out from the crowd.
              That’s where GPW comes in.
            </p>

            <p className="review1-p">
              We have expert bloggers for hire in our team who have mastered
              blog writing. They have helped many companies grow and prosper.
              Also, our blog writing services packages come at affordable
              prices.
            </p>
          </div>
        </div>
      </section>
      <section className="testi_sec">
        <div className="container">
          <div className="row">
            <h2 className="testi_sec-h2">Testimonials</h2>
            <span className="testi_sec-spa">* * * * *</span>
            <div className="col-md-6 d-flex">
              <div className="testi_box">
                <p className="testi_box-p">
                  We checked out samples of GPW writers for blogs. We liked it
                  and hired a writer from them. We are highly satisfied with the
                  results. The writer was very professional and did everything
                  on time.
                </p>
                <div className="t_sels">
                  <img
                    src="writer/img/Daniel-Presley.webp"
                    alt="Carmen-Mendez-Istillarte"
                    className="testi_box-img"
                  />
                  <h3 className="testi_box-h3">Daniel Presley</h3>
                  <p className="testi_box-p">
                    Web Development Manager, Togeting
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="testi_box">
                <p className="testi_box-p">
                  The writer from GPW was fantastic. I was able to communicate
                  with him easily online. The writer understood my requirements
                  and gave excellent blogs within the assured time. I will
                  definitely hire GPW writers again!
                </p>
                <div className="t_sels">
                  <img
                    src="writer/img/Lucy-Grace.webp"
                    alt="Marcela-Vella"
                    className="testi_box-img"
                  />
                  <h3 className="testi_box-h3">Lucy Grace</h3>
                  <p className="testi_box-p">Executive Assistant, Infomedia</p>
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
                        How to hire blog writers from GetProWriter?
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
                        Hiring blog writers from GetProWriter is easy and
                        hassle-free. You can get started with a quick process
                        and send your requirements. Once you’ve filled in the
                        information about your project, we’ll match you with the
                        best writer for your needs. We have writers specializing
                        in a wide range of topics, from fashion to technology to
                        health and fitness, so whatever kind of content you
                        need, we’ve got you covered!
                      </div>
                    </div>
                  </div>

                  <div className="faq-item p-0 bg_set accordion-item">
                    <h2
                      className="faq_item-h3 p-0 accordion-header"
                      id="headingTwo"
                    >
                      <button
                        className="faq-plus fs-5 fw-normal  align-items-baseline  accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Which is the best platform for online blog writers for
                        hire?
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
                        GetProWriter is definitely one of the best platforms for
                        online blog writers for hire. We have a great selection
                        of professional writers and they are very professional.
                        The system of hiring bloggers works very well and the
                        customer support team is always ready to help you with
                        any problem or question you might have. The website has
                        a simple interface that makes it easy to navigate even
                        if you are not familiar with the website. You can also
                        find all the necessary information on the homepage.{" "}
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
                      Should we go with freelancers for our blog writing?
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
                      Yes. If you do not have the in-house resources, then you
                      should go with freelancers for your blog writing. There
                      are many benefits to hiring a freelance writer to create
                      content for your blog. First and foremost, it can save you
                      time and money. Second, a freelance blogger will be able
                      to provide fresh content that you might not be able to
                      produce yourself.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* </React.Fragment>{" "} */}
    </div>
  );
};

// const html = renderToString(BlogWritingServices);

// const { helmet } = helmetData.context;
export default BlogWritingServices;
