import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import Loader from "./Loader";
import { useState, useEffect } from "react";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();

  // const [error, setError] = useState()

  // const [state, setState] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = User;

    const object = {
      username: username.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity
    const passwordLength2 = /^.{6,}$/;
    // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    // /^[^@]+@(yahoo|gmail|mail|rocketmail)\.(com|in|co\.uk)$/i;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === "" ||
      regex1.test(email.trim()) === false ||
      passwordLength2.test(password.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/register`, {
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
          setData({
            User: json,
          });
          if (json.message === "successfully register") {
            navigate("/login");
          }

          // setMessage(json.message)
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

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
      // fetchData()
    }
  }, []);

  const validate = (values) => {
    const errors = {};

    const passwordLength = /^.{6,}$/;
    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Username'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    } else if (!passwordLength.test(values.password)) {
      errors.password = "!'Please Enter maximum 6 character'";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "!'Please Enter ConfirmPassword'";
    }
    return errors;
  };

  return (
    <div>
      {/* {isLoggedin ? (
        <Loader />
      ) : ( */}
      <section className="reg_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="reg-h2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut elit
                tellus, luctus nec.
              </h2>
              <div className="reg-block">
                <h3 className="reg-block_h3">
                  As A Registered User, You Get Immediate Access To:
                </h3>
                <ol>
                  <li className="reg-li">
                    <img
                      src="writer/img/short-icon.png"
                      className="reg-block_img"
                      alt=""
                    />
                    <span className="reg_spa">
                      Download millions of old solutions completed by our
                      experts known as old QA.
                    </span>
                  </li>

                  <li className="reg-li">
                    <img
                      src="writer/img/short-icon.png"
                      className="reg-block_img"
                      alt=""
                    />
                    <span className="reg_spa">
                      Download millions of old solutions completed by our
                      experts known as old QA.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="col-md-6">
              <form method="POST" className="reg-form" onSubmit={handleSubmit}>
                <label className="reg-lbl">Username</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="username"
                  placeholder="Username"
                  onChange={handleChange}
                  className="ct_text-set"
                />
                <p style={{ color: "red" }}>{formErrors.username}</p>

                <label className="reg-lbl">E-mail Address</label>
                <input
                  type="email"
                  placeholder="E-mail Address"
                  autoComplete="email"
                  name="email"
                  onChange={handleChange}
                  className="ct_text-set"
                />
                <p style={{ color: "red" }}>{formErrors.email}</p>

                <label className="reg-lbl">Password</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  className="ct_text-set1"
                />
                <p style={{ color: "red" }}>{formErrors.password}</p>

                <label className="reg-lbl">Confirm Password</label>
                <input
                  type="password"
                  autoComplete="confirm-password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="ct_text-set1"
                />
                <p style={{ color: "red" }}>{formErrors.confirmPassword}</p>

                <button
                  type="submit"
                  className="reg_btn-1 d-flex justify-content-center m-0 mt-4 m-auto"
                >
                  Register
                </button>
                <br />

                {message === "successfully register" ? (
                  <h3
                    className="Success text-center"
                    style={{ color: "#03979c" }}
                  >
                    {message}
                  </h3>
                ) : (
                  <h3 className="Success text-danger text-center">{message}</h3>
                )}
                <p className="text-center m-0 fs-6 mb-1">
                  <span>Have already an account?</span>
                  <Link to="/login" className="signup">
                    LogIn!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Register;
