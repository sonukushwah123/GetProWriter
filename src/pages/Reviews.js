import React from "react";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { FaStar } from "react-icons/fa";
// import { Radio, Rating } from "./RatingStyles";
import { Rating, Radio } from "./RatingStyles";
import ReactPaginate from "react-paginate";
import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
const PER_PAGE = 10;
const Reviews = () => {
  const initialValues = {
    title: "",
    description: "",
    username: "",
    email: "",
    rating: "",
  };

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  // const [data, setData] = useState();
  const [rate, setRate] = useState(0);
  const [getRating, setGetRating] = useState([]);
  const [firstStar, setFirstStar] = useState();
  const [secondStar, setSecondStar] = useState();
  const [thirdStar, setThirdStar] = useState();
  const [fourthStar, setFourthStar] = useState();
  const [fifthStar, setFifthStar] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const [AllfilterData, setAllfilterData] = useState([]);

  // const [error, setError] = useState()

  // const [state, setState] = useState("");

  // const navigate = useNavigate;
  function handleClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);

  const pageCount = Math.ceil(getRating.length / PER_PAGE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, description, username, email, rating } = User;

    const object = {
      username: username.trim(),
      email: email.trim(),
      title: title.trim(),
      description: description.trim(),
      rating: rating.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      title.trim() === "" ||
      description.trim() === "" ||
      rating.trim() === "" ||
      regex1.test(email.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/rating`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          // setData({
          //   User: json,
          // });
          // if (json.message === "successfully register") {
          //   navigate("/login");
          // }

          setMessage(json.message);
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  // useEffect(() => {
  //   const res = data?.User?.message;
  //   setMessage(res);
  // }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
      // fetchData()
    }
  }, []);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Name'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.title) {
      errors.title = "!'Please Enter Your title'";
    }

    if (!values.description) {
      errors.description = "!'Please Enter description'";
    }
    return errors;
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getAllRating`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setGetRating(response.message);
        console.log(response.message);
        const filterData = response.message?.filter(
          (item, index) => item.status === "read"
        );
        setAllfilterData(filterData);
        console.log("filterData", filterData);

        //FIRST STAR CALCULATION

        const filterFirstStar = filterData?.filter(
          (item, index) => item.rating === 1
        );
        const Firstcalculation =
          (filterFirstStar.length * 100) / filterData.length;
        if (Firstcalculation) {
          setFirstStar(Math.trunc(Firstcalculation));
        } else {
          setFirstStar(0);
        }

        //SECOND STAR CALCULATION

        const filterSecondStar = filterData?.filter(
          (item, index) => item.rating === 2
        );
        const Secondcalculation =
          (filterSecondStar.length * 100) / filterData.length;

        if (Secondcalculation) {
          setSecondStar(Math.trunc(Secondcalculation));
        } else {
          setSecondStar(0);
        }

        //THIRD STAR CALCULATION

        const filterThirdStar = filterData?.filter(
          (item, index) => item.rating === 3
        );
        const Thirdcalculation =
          (filterThirdStar.length * 100) / filterData.length;

        if (Thirdcalculation) {
          setThirdStar(Math.trunc(Thirdcalculation));
        } else {
          setThirdStar(0);
        }

        //FOURTH STAR CALCULATION

        const filterFourthStar = filterData?.filter(
          (item, index) => item.rating === 4
        );
        const Fourthcalculation =
          (filterFourthStar.length * 100) / filterData.length;

        if (Fourthcalculation) {
          setFourthStar(Math.trunc(Fourthcalculation));
        } else {
          setFourthStar(0);
        }

        //FIVE STAR CALCULATION

        const filterFifthStar = filterData?.filter(
          (item, index) => item.rating === 5
        );
        const Fifthcalculation =
          (filterFifthStar.length * 100) / filterData.length;

        if (Fifthcalculation) {
          setFifthStar(Math.trunc(Fifthcalculation));
        } else {
          setFifthStar(0);
        }
      });
  }, []);
  // const [isReadMore, setIsReadMore] = useState(false);

  return (
    <div>
      <section>
        <img
          src="writer/img/Customer-reviews-1536x480.jpg"
          className="w-100"
          alt="Customer-reviews"
        />
      </section>

      <section className="mt-5 elementor-section">
        <div className="container">
          <h2 className="text-center fw-bold" style={{ color: "#029A99" }}>
            Let everyone know the uniqueness of your website
          </h2>
          <div className="elementor-divider">
            <span className="elementor-divider-separator">
              <div className="elementor-icon elementor-divider__element">
                <i aria-hidden="true" className="fas fa-star-of-david fs-4"></i>
              </div>
            </span>
          </div>
          <p className="text-center mt-4 text-secondary">
            At Get Pro Writer, we deliver original, plagiarism-free content for
            websites that helps them with a high ranking in SEO on search
            engines. Get tailor-made content for your business that expresses
            the brand’s voice to your target audience.
          </p>

          <div className="row justify-content-center">
            <div className="col-md-6 review-show">
              <div className="glsr-summary-rating">
                <h3 className="mb-0 me-2">4.9</h3>
                <div>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                  <i className="fa-regular fa-star-half-stroke  fs-5 star_r"></i>
                </div>
              </div>
              <span className="glsr-tag-value">
                4.9 out of 5 stars (based on {AllfilterData.length} reviews)
              </span>

              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Excellent</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: `${fifthStar + "%"}` }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">{fifthStar}%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Very good</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    // data-aos="fade-right"
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                    style={{ width: `${fourthStar + "%"}` }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">{fourthStar}%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Average</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: `${thirdStar + "%"}` }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">{thirdStar}%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Poor</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: `${secondStar + "%"}` }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">{secondStar}%</span>
              </div>
              <div className="glsr-bar" data-level="5">
                <span className="glsr-bar-label">Terrible</span>

                <span className="glsr-bar-background">
                  <span
                    className="glsr-bar-background-percent"
                    style={{ width: `${firstStar + "%"}` }}
                  ></span>
                </span>

                <span className="glsr-bar-percent">{firstStar}%</span>
              </div>
            </div>
          </div>

          <section className="rating">
            <form onSubmit={handleSubmit}>
              <div className=" row rating-form">
                <div className="form-group  col-md-8 rating-inner-form">
                  <h6>Your overall rating</h6>
                  <div className="rating-stars">
                    {[...Array(5)].map((item, index) => {
                      const givenRating = index + 1;
                      // <i className="fa-sharp fa-regular fa-star  star_r"></i>
                      // <i className="fa-sharp fa-regular fa-star  star_r"></i>
                      // <i className="fa-sharp fa-regular fa-star  star_r"></i>
                      // <i className="fa-sharp fa-regular fa-star  star_r"></i>
                      // <i className="fa-sharp fa-regular fa-star  star_r"></i>
                      return (
                        <label>
                          <Radio
                            type="radio"
                            value={givenRating}
                            onChange={handleChange}
                            name="rating"
                            onClick={() => {
                              setRate(givenRating);
                              // alert(
                              //   `Are you sure you want to give ${givenRating} stars ?`
                              // );
                            }}
                          />
                          <Rating>
                            <FaStar
                              color={
                                givenRating < rate || givenRating === rate
                                  ? "#faca15"
                                  : "rgb(192,192,192)"
                              }
                              className="fs-3 me-1"
                            />
                          </Rating>
                        </label>
                      );
                    })}
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Title of your review</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="title"
                      type="text"
                      onChange={handleChange}
                      placeholder="Summarize your review or highlight an interesting detail"
                    />
                    <p className="mb-0" style={{ color: "red" }}>
                      {formErrors.title}
                    </p>
                  </div>

                  <div
                    className="glsr-field glsr-field-textarea mt-4 glsr-required"
                    data-field="content"
                  >
                    <label
                      className="glsr-label glsr-label-textarea"
                      for="site-reviews-content-glsr_1edcb6a3"
                    >
                      <span>Your review</span>
                    </label>
                    <br />
                    <textarea
                      className="glsr-textarea w-100 p-2"
                      id="site-reviews-content-glsr_1edcb6a3"
                      name="description"
                      placeholder="Tell people your review"
                      rows="5"
                      onChange={handleChange}
                      required=""
                    ></textarea>
                    <p className="mb-0" style={{ color: "red" }}>
                      {formErrors.description}
                    </p>
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Your name</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="username"
                      type="text"
                      onChange={handleChange}
                      placeholder="Tell us your name"
                    />
                    <p className="mb-0" style={{ color: "red" }}>
                      {formErrors.username}
                    </p>
                  </div>

                  <div
                    className="glsr-field glsr-field-text mt-3"
                    data-field="title"
                  >
                    <label
                      className="glsr-label glsr-label-text mb-1"
                      for="site-reviews-title-glsr_1edcb6a3"
                    >
                      <span>Your email</span>
                    </label>
                    <br />
                    <input
                      className="glsr-input glsr-input-text p-2 w-100"
                      id="site-reviews-title-glsr_1edcb6a3"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      placeholder="Tell us your email"
                    />
                    <p className="mb-0" style={{ color: "red" }}>
                      {formErrors.email}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="glsr-button p-3 mt-3 text-white button border-0  "
                    style={{ background: "#029a99" }}
                    // data-loading="Submit your review"
                    // aria-busy="false"
                  >
                    Submit your review
                  </button>

                  <span
                    className="fw-normal fs-4 ms-4"
                    style={{ color: "#029a99" }}
                  >
                    {message}
                  </span>
                </div>
              </div>
            </form>
          </section>

          <section className="mt-5 feedback">
            <div className="container">
              <h3
                className=" feedback-tag pt-5 text-center"
                style={{ color: "#029a99" }}
              >
                Some of the valuable feedback from clients!
                <h1> {getRating?.status}</h1>
              </h3>
            </div>

            {AllfilterData.slice(offset, offset + PER_PAGE)?.map(
              (friend, i) => {
                return (
                  <>
                    <div
                      className="glsr-review my-4"
                      data-type="local"
                      id="review-2548"
                      data-assigned="[]"
                      key={friend._id}
                    >
                      <div className="glsr-review-title">
                        <h5 className="glsr-tag-value"> {friend.title}</h5>
                      </div>
                      <div className="glsr-review-rating">
                        <div
                          className="glsr-star-rating glsr-stars"
                          data-rating="5"
                        >
                          {friend.rating === 0 ? "" : ""}
                          {friend.rating === 1 ? (
                            <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                          ) : (
                            ""
                          )}
                          {friend.rating === 2 ? (
                            <>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                            </>
                          ) : (
                            ""
                          )}
                          {friend.rating === 3 ? (
                            <>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                            </>
                          ) : (
                            ""
                          )}
                          {friend.rating === 4 ? (
                            <>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                            </>
                          ) : (
                            ""
                          )}
                          {friend.rating === 5 ? (
                            <>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                              <i className="fa-sharp fa-solid fa-star fs-5 star_r"></i>
                            </>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="glsr-review-content mt-2">
                        {/* {friend.description.length > 150 ? (
                          <div>
                            {isReadMore ? (
                              <div>
                                {friend.description}
                                <br />

                                <Link onClick={() => setIsReadMore(false)}>
                                  Read Less
                                </Link>
                              </div>
                            ) : (
                              <div>
                                {friend.description
                                  .substring(0, 150)
                                  .concat("...")}

                                <Link onClick={() => setIsReadMore(true)}>
                                  Read More
                                </Link>
                              </div>
                            )}
                          </div>
                        ) : (
                          ""
                        )} */}
                        <ReactReadMoreReadLess
                          charLimit={200}
                          readMoreText={"Read more"}
                          readLessText={"Read less"}
                        >
                          {friend.description}
                        </ReactReadMoreReadLess>
                        {/* ▲▼ */}
                        {/* <span
                          onClick={(e) => setIsReadMore(friend.description)}
                        >
                          ...READ MORE
                        </span> */}
                      </div>
                      <br />
                      <div className="glsr-review-author">
                        <span className="glsr-tag-value">
                          -{friend.username}
                        </span>
                      </div>
                    </div>
                  </>
                );
              }
            )}

            <nav aria-label="..." className="mt-5">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                pageCount={pageCount}
                onPageChange={handleClick}
                pageRangeDisplayed={1}
                containerClassName={"pagination page"}
                renderOnZeroPageCount={null}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={".pagination__link--disabled "}
                activeClassName={"pagination__link--active"}
                // renderOnZeroPageCount={null}
              />
            </nav>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
