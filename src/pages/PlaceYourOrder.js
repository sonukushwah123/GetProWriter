import React from "react";
import { useState, useEffect } from "react";

import GetinTouch from "./GetinTouch";

const PlaceYourOrder = () => {
  return (
    <div>
      <section className="place_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="place_sec-h1 p-0">Place Your Order</h1>
            </div>

            <div className="col-md-6">
              <section className="form_sec">
                <GetinTouch />
              </section>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center">
        <h2 className="writing_sec-h2">
          Content That You Can Get With GetProWriter
        </h2>
        <span className="writing_sec-spa">
          {" "}
          <i className="fa-solid fa-arrows-left-right"></i>{" "}
          <i className="fa-thin fa-horizontal-rule"></i>
        </span>
        <p className="writing_sec-p">
          GetProWriter is a website specifically designed to help you create
          content to attract and convert visitors into leads.
        </p>
      </div>

      <section className="place_Sec-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
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
                        Why use a Content Writing Agency?
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
                        The reason is straightforward: they understand how to
                        develop SEO-friendly, well-researched, and high-quality
                        content. They will supply a content writer who has prior
                        expertise and vast understanding in that sector. It will
                        also reduce your workload if you use their SEO content
                        writing services. So, what are you holding out for? Now
                        is the time to hire a content writer from Get Pro
                        Writer.
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
                        Why should I hire a content writer?
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
                        To obtain the best, highest quality, and SEO-friendly
                        content for different kind of content needs. A content
                        writer understands how to write for both humans and
                        machines, striking a great balance between the two
                        (which many fail).
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
                      className="faq-plus fs-5 fw-normal  align-items-baseline accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Do I own the Content written by you?
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
                      Yes, you have absolute ownership after the content is
                      given by our end. You are free to modify it as you like.
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

export default PlaceYourOrder;
