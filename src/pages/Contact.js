import React, { useState, useEffect } from "react";

const Contact = () => {
  const initialValues = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, subject, message } = User;

    const object = {
      fullName: fullName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      fullName.trim() === "" ||
      email.trim() === "" ||
      subject.trim() === "" ||
      message.trim() === "" ||
      regex1.test(email.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/contact-us`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) =>
          response.json(
            setUser({
              response,
            })
          )
        )

        .then((json) => {
          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });
      setFormErrors(validate(User));
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.fullName) {
      errors.fullName = "!'Please Enter Your Name'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.subject) {
      errors.subject = "!'Please Enter Your Subject'";
    }
    if (!values.message) {
      errors.message = "!'Please Enter Your Message'";
    }
    return errors;
  };

  return (
    <div>
      <section className="ab_sec d-flex justify-content-center align-items-center">
        <h2 className="ab_sec-h2 p-0">We would love to hear from you!</h2>
      </section>

      <section className="ct_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="ct_box">
                <ul className="ct-ul">
                  <li className="ct-li">
                    <span>
                      <i
                        aria-hidden="true"
                        className="fas fa-address-card ct-icon"
                      ></i>
                    </span>
                    <span className="ct-span">
                      R-51, Kailashpuri, Near Manoharpura, Jagatpura, Jaipur
                      302017
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct_box">
                <ul className="ct-ul">
                  <li className="ct-li">
                    <span>
                      <i
                        aria-hidden="true"
                        className="fas fa-envelope-open-text ct-icon"
                      ></i>
                    </span>
                    <span className="ct-span">Support@getprowriter.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ct_box">
                <ul className="ct-ul">
                  <li className="ct-li">
                    <span>
                      <i
                        aria-hidden="true"
                        className="fas fa-phone-volume ct-icon"
                      ></i>
                    </span>
                    <span className="ct-span">+91-9828671065</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <h2 className="jot_sec-h2">Send Us Message</h2>
            <span className="writing_sec-spa">
              <i className="fa-light fa-horizontal-rule"></i>{" "}
              <i className="fa-solid fa-arrows-left-right"></i>{" "}
              <i className="fa-thin fa-horizontal-rule"></i>
            </span>
            {/* <pre>{JSON.stringify(User, undefined, 2)}</pre> */}
            <form method="POST" onSubmit={handleSubmit}>
              <div className="contact_name d-flex space-between">
                <div className="Name">
                  <input
                    type="text"
                    id="fname"
                    name="fullName"
                    placeholder="fullName"
                    onChange={handleChange}
                    className="ct_text-set"
                  />
                  <p style={{ color: "red" }}>{formErrors.fullName}</p>
                </div>

                <div className="Name">
                  <input
                    type="text"
                    id="fname"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    className="ct_text-set"
                  />
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                </div>
              </div>
              <input
                type="text"
                id="fname"
                placeholder="Subject"
                name="subject"
                onChange={handleChange}
                className="ct_text-set1"
              />
              <p style={{ color: "red" }}>{formErrors.subject}</p>
              <textarea
                className="form-control form-area ct_text-set1"
                rows="8"
                onChange={handleChange}
                id="message"
                placeholder="Message"
                name="message"
              ></textarea>
              <p style={{ color: "red" }}>{formErrors.message}</p>
              <button type="submit" className="ct_btn-set">
                Submit
              </button>{" "}
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <span className="Success" style={{ color: "#03989f" }}>
                  Submitted is Successfull
                </span>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
