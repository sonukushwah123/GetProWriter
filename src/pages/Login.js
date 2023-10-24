import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const proceedLogin = localStorage.getItem("false");
  console.log("eeeeeeeee", proceedLogin);
  const initialValues = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);

  const [data, setData] = useState();
  const [message, setMessage] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = User;
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    console.log(getAllProduct);
    if (getAllProduct === null) {
      getAllProduct = [];
    }
    const object = {
      username: username.trim(),
      password: password.trim(),
      getAllProduct,
    };

    setFormErrors(validate(User));
    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (username.trim() === "" || password.trim() === "") {
      return;
    } else {
      setIsLoggedin(true);
      fetch(`${process.env.REACT_APP_APIURL}/login`, {
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
          localStorage.setItem("user", JSON.stringify(json.user));
          if (json.message === "successfully login") {
            localStorage.setItem("token", json.token);
            setIsLoggedin(true);
            localStorage.removeItem("product");
            navigate("/dashboard");
          }

          if (
            localStorage.getItem("false") &&
            json.message === "successfully login"
          ) {
            localStorage.setItem("token", json.token);
            setIsLoggedin(true);
            localStorage.removeItem("product");
            localStorage.removeItem("false");
            navigate("/viewcart");
          }

          console.log(json);
          setIsLoggedin(false);
        })
        .catch((err) => {
          console.log(err);
        });

      setIsSubmit(true);
    }
  };

  useEffect(() => {
    const res = data?.User?.message;
    setMessage(res);
  }, [data]);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(User);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Email / Username'";
    } // else if(!regex.test(values.username)) {
    // 	errors.username = "!'This is not Email Format'"
    // }

    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    }

    return errors;
  };

  return (
    <div>
      {/* {message === "successfully login" && isLoggedin ? (
        <Loader />
      ) : ( */}
      <section className="reg_sec">
        <div className="container">
          <div className="row justify-content-center">
            <form method="POST" className="login-form" onSubmit={handleSubmit}>
              <label className="reg-lbl"> Username or E-mail </label>
              <input
                type="text"
                autoComplete="username"
                id="fname"
                name="username"
                placeholder=" Username or E-mail "
                onChange={handleChange}
                className="text_set"
              />
              <p style={{ color: "red" }}>{formErrors.username}</p>

              <label className="reg-lbl">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="ct_text-set1"
              />
              <p style={{ color: "red" }}>{formErrors.password}</p>

              <button
                type="submit"
                disabled={isLoggedin}
                className="reg_btn-1 d-flex justify-content-center m-0 mt-4 m-auto"
              >
                Login
              </button>
              <br />

              {message === "successfully login" ? (
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
                <span>Not a member?</span>
                <Link to="/register" className="signup">
                  SignUp!
                </Link>
              </p>

              <p className="text-center m-0 fs-6">
                <Link className="forgot_p p-0" to="/forgot">
                  Forgot Password?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Login;
