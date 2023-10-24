import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import GetinTouch from "./GetinTouch";

const Prices = () => {
  const [price, setPrice] = useState(0.0);
  // const [experts,setExperts] = useState(".00")

  function handleChange(val, ex) {
    setPrice(val.target.value);
    setSelect(ex.target.value);
  }
  const [select, setSelect] = useState(".00");

  const [deactive, setDeactive] = useState("");
  function onClick(exy) {
    setDeactive(exy.target.value);
  }

  return (
    <div>
      <section className="place_sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="place_sec-h1 p-0">
                Services,
                <br />
                Pricing & Products
              </h1>
            </div>

            <div className="col-md-6">
              <section className="form_sec">
                <GetinTouch />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="content_sec">
        <div className="container">
          <div className="row">
            <p className="content_sec-p">
              We can help you whether you require a content writer for your
              website, blog, social media, or advertising campaign.
            </p>

            <p className="content_sec-p">
              Our expert SEO content writers create interesting, convincing
              messages that engage with your audience while also helping you
              rank higher in search engine results. Our content writer cost is
              competitive and focused on producing high-quality online content
              and blog post writing for your company. We will collaborate with
              you to capture the core of what you want to convey before creating
              a written version for you to evaluate.
            </p>

            <p className="content_sec-p">
              Content is the lifeblood of every website. People looking for
              information on the internet read a variety of articles, facts,
              reports, and reviews. They are all contents. If you are planning
              to build a new website, you should consider content writing
              packages. Professional content writers will present your website
              as well as the services or items that you offer. This will alarm
              the visitor. Content may also be used to boost a company’s brand
              name. However, if your material isn’t up to par, Google will
              demote your website below thousands of others. This occurs when
              there are too many copy/paste errors. Furthermore, if you do not
              follow the guidelines when producing material, the impact might be
              unfavourable.
            </p>

            <p className="content_sec-p">
              Furthermore, if you do not follow the guidelines when producing
              material, the impact might be unfavourable. Only pros who provide
              article writing services can assist you in this situation. You may
              now readily obtain website content writing solutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <h2 className="content_h2">Prices</h2>

            <table className="table table-style">
              <thead>
                <tr className="tbl">
                  <th></th>
                  <th>1 Day (in USD/word)</th>
                  <th>2 Days (in USD/word)</th>
                  <th>5 Days (in USD/word)</th>
                </tr>
              </thead>

              <tbody style={{ border: "none" }}>
                <tr>
                  <td>Expert</td>
                  <td>0.03</td>
                  <td>0.02</td>
                  <td>0.01</td>
                </tr>
                <tr style={{ background: "#F6FBFB" }}>
                  <td>Premium</td>
                  <td>0.06</td>
                  <td>0.04</td>
                  <td>0.02</td>
                </tr>
                <tr>
                  <td>Enterprise</td>
                  <td>0.08</td>
                  <td>0.06</td>
                  <td>0.04</td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="price-inner">
                <form>
                  <h2 className="price-inner_h2">prices</h2>
                  <label className="price-lbl">Expert</label>
                  <br />

                  <select
                    onChange={handleChange}
                    onClick={onClick}
                    value=""
                    className="price-select"
                    required
                  >
                    <option selected hidden>
                      -Select Value-
                    </option>
                    <option value=".03">Expert</option>
                  </select>

                  <label className="price-lbl">Premium</label>
                  <br />
                  <select
                    onChange={handleChange}
                    onClick={onClick}
                    value=""
                    className="price-select"
                    required
                  >
                    <option selected hidden>
                      -Select Value-
                    </option>
                    <option value=".06">Premium</option>
                  </select>

                  <label className="price-lbl">Enterprise</label>
                  <br />
                  <select
                    onChange={handleChange}
                    onClick={onClick}
                    value=""
                    className="price-select"
                    required
                  >
                    <option selected hidden>
                      -Select Value-
                    </option>
                    <option value=".08">Enterprise</option>
                  </select>

                  <label className="price-lbl">quantity</label>
                  <br />
                  <input
                    id="inputFeet"
                    type="number"
                    className="price-select"
                    placeholder="0"
                    onChange={handleChange}
                  />
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="price-inner">
                <h2 className="price-inner_h2">Total Summary</h2>
                <h3 className="price-inner_h3">
                  <span>Total</span>{" "}
                  <span className="price_h3-spa" id="outputMeters">
                    ${price + select}
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <h2 className="cwp_h2">Content Writing Prices</h2>
            <p className="cwp_pera">
              The majority of you are probably ignorant of the article writing
              rates. Some believe it will be prohibitively expensive. However,
              this is not the case. The content writing industry, too, has grown
              quite competitive. Our platform makes it simple to compare article
              writing charges. You may also compare prices with different
              companies that offer article writing services. We have a team of
              expert content writers with years of experience. Their literary
              ability is unrivaled. The fees we charge are quite reasonable. The
              charges for content writing are among the lowest in the business.
              Our clients return to us multiple times to receive faultless
              material.
            </p>

            <h3 className="cwp_h3">
              Have more questions about our content writing services?
            </h3>
            <p className="cwp_pera">
              Hiring a content writing business or a freelance writer might be a
              difficult undertaking. But the good news is that we’re here to
              assist you in making the greatest decision for your company.
            </p>
            <p className="cwp_pera">
              {" "}
              <Link to="/contact"> Contact us </Link>today and we will answer
              any questions you have and assist you in finding the best content
              marketing strategy for your company.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;
