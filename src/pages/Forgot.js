import React from "react";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const Forgot = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  // const [error, setError] = useState()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = formValues;
    const object = {
      email: email.trim(),
    };
    setFormErrors(validate(formValues));
    // add entity - POST
    // e.preventDefault();
    // creates entity
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (email.trim() === "" || regex1.test(email.trim()) === false) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/password-reset`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }) // .then((res) => res.json())
        .then((response) =>
          response.json(
            setFormValues({
              response,
            })
          )
        )

        .then((json) => {
          if (json.message === "mail have sent successfully") {
            navigate("/login");
          }

          setMessage(json.message);
          // setError(json.error)

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });

      setIsSubmit(true);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;

    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }

    return errors;
  };

  return (
    <div>
      <section className="fp_sec">
        <div className="container">
          <div className="row forget align-items-center bg-white">
            <div className="col-md-6">
              <img src="writer/img/forgot-password.jpg" className="fp-img" />
            </div>

            <div className="col-md-6 p-4">
              <form className="fp_form" onSubmit={handleSubmit}>
                <h3 className="fp-h3">Forgot Password</h3>
                <p className="fp-p">
                  Enter the email address associated with your account
                </p>
                <input
                  type="text"
                  id="fname"
                  name="email"
                  onChange={handleChange}
                  placeholder=" Enter email address"
                  className="fp-text"
                />
                <br />
                {Object.keys(formErrors, message).length === 0 && isSubmit ? (
                  <span className="Success ms-4">{message}</span>
                ) : (
                  ""
                )}
                <p style={{ color: "red" }} className="ms-4">
                  {formErrors.email}
                </p>

                <button type="submit" className="fp-btn px-5 ">
                  Next
                </button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Forgot;
