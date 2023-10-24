import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import Loader from "./Loader";

const Career = () => {
  const [career, setCareer] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_APIURL}/getcareers`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setCareer(response.data.sort().reverse());

        console.log(response.data);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="ab_sec  d-flex justify-content-center align-items-center">
            <h2 className="ab_sec-h3 p-0">
              {" "}
              Get Pro Writer Is more than just a workplace. We're a family{" "}
            </h2>
          </section>
          <div className="container">
            <div className="row">
              <img
                src="writer/img/Getprowriter-Content-Writers.webp"
                alt="Getprowriter"
                className="career_sec-img"
              />
            </div>
          </div>

          <section>
            <div className="container">
              <div className="row">
                <h2 className="jot_sec-h2">
                  Join <span className="jot_sec-span">Our Team</span>
                </h2>
                <span className="writing_sec-spa">
                  <i className="fa-light fa-horizontal-rule"></i>{" "}
                  <i className="fa-solid fa-arrows-left-right"></i>{" "}
                  <i className="fa-thin fa-horizontal-rule"></i>
                </span>

                <p className="jot_sec-p">
                  Are you an enthusiastic writer? Do you enjoy writing unique
                  and motivating content? Then write for us and make money doing
                  what you love!
                </p>

                <p className="jot_sec-p2">
                  We are a group of experienced writers that like being creative
                  and providing a good job for our clients…while having fun!
                  We’ve been a remote/distributed team since day one, so we know
                  exactly how to build a team ethos, a pleasant work culture,
                  efficient systems and procedures, and shared goals. You’d be
                  astonished to learn how close our remote team is! On a daily
                  basis, everyone is trusted to work independently, whether on
                  client work or internal material and initiatives. We have lots
                  of team meetings (…but not too many!) and in-person away days
                  (when permitted!).
                </p>

                <h2 className="jot_sec-h2">Open Positions</h2>
                <span className="writing_sec-spa">
                  <i className="fa-light fa-horizontal-rule"></i>{" "}
                  <i className="fa-solid fa-arrows-left-right"></i>{" "}
                  <i className="fa-thin fa-horizontal-rule"></i>
                </span>

                <div className="jot_sec-box">
                  {career?.map((item, index) => {
                    return (
                      <div key={item._id}>
                        <li className="jot_list2">{item.careerName}</li>
                      </div>
                    );
                  })}

                  <Link to="/contact">
                    <button type="button" className="jot_sec-btn">
                      Join Our Team Today!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="pab_sec">
            <div className="container">
              <div className="row">
                <h2 className="jot_sec-h2">Perks and Benifits</h2>
                <span className="writing_sec-spa">
                  <i className="fa-light fa-horizontal-rule"></i>{" "}
                  <i className="fa-solid fa-arrows-left-right"></i>{" "}
                  <i className="fa-thin fa-horizontal-rule"></i>
                </span>
                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-solid fa-house-chimney pab_box-img"></i>
                    {/* <img
                      src="writer/img/home.png"
                      alt="home"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">WORK FROM ANYWHERE</h2>
                    <p className="pab_box-p">
                      Work from anywhere in the world on a variety of tasks. You
                      will be assigned tasks that are a good fit for your
                      abilities and experience. Bring your creative juices to
                      the table and shine!
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-solid fa-dollar-sign pab_box-img"></i>

                    {/* <img
                      src="writer/img/dollar-symbo.png"
                      alt="dollar"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">
                      ON TIME & HIGHER PAYMENTS RATES
                    </h2>
                    <p className="pab_box-p">
                      We understand the financial issues and follow-ups that a
                      freelancer is accustomed to. Our mission is to empower you
                      to produce content with confidence while also assisting
                      you in achieving financial independence.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-regular fa-heart pab_box-img"></i>
                    {/* <img
                      src="writer/img/heart.png"
                      alt="heart"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">
                      WORK ON SUBJECTS OF YOUR CHOICE
                    </h2>
                    <p className="pab_box-p">
                      Whatever your area of expertise, you can work with us as
                      an freelance writer. The more you like your topic, the
                      better you will work. We give you the freedom to choose
                      from a wide range of topics, let’s start working together!
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-brands fa-leanpub pab_box-img"></i>
                    {/* <img
                      src="writer/img/leanpub.png"
                      alt="leanpub"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">GET EXPERIENCE CERTIFICATE</h2>
                    <p className="pab_box-p">
                      Just join our platform and get the exposure you can have
                      outside, which is the most crucial thing to learn in the
                      editing process. Be the part of our successful team and
                      export your skills to the next level and get experience
                      certificate.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-solid fa-pen-to-square pab_box-img"></i>
                    {/* <img
                      src="writer/img/edit.png"
                      alt="edit"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">
                      REGULAR HANDHOLDING AND CONSTANT LEARNING
                    </h2>
                    <p className="pab_box-p">
                      Collaborate on a range of projects as a team while
                      learning from the experts. Get excellent training to help
                      you grow your skills, as well as comprehensive,
                      constructive feedback on your work.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pab_sec-box">
                    <i className="fa-solid fa-universal-access pab_box-img"></i>
                    {/* <img
                      src="writer/img/universal.png"
                      alt="universal"
                      className="pab_box-img"
                    /> */}
                    <h2 className="pab_box-h2">
                      OPPORTUNITY TO WORK ON INTERNATIONAL CASE STUDIES
                    </h2>
                    <p className="pab_box-p">
                      Landing the title of Content Writer with us is sure to
                      open doors to our vast network of international clients.
                      You’ll have a chance to work with clients from Singapore,
                      China, India and the US in your own time and on your own
                      schedule. Sound good? We’re waiting for your application
                      right now.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Career;
