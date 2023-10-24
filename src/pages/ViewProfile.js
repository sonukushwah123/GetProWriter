import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const navigate = useNavigate();

  const initialValue = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const [User, setUser] = useState(initialValue);
  const [formError, setFormError] = useState({});
  const [inSubmit, setInSubmit] = useState(false);
  const [datas, setDatas] = useState([]);
  const [messages, setMessages] = useState();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const tokenID = localStorage.getItem("token");
    const { currentPassword, newPassword, confirmPassword } = User;

    const object = {
      currentPassword: currentPassword.trim(),
      newPassword: newPassword.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    setFormError(valide(User));
    // add entity - POST
    // e.preventDefault();
    // creates entity

    const passwordLength1 = /^.{6,}$/;

    if (
      currentPassword.trim() === "" ||
      newPassword.trim() === "" ||
      confirmPassword.trim() === "" ||
      passwordLength1.test(newPassword.trim()) === false
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/changePassword`, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(object, {
          currentPassword,
          newPassword,
          confirmPassword,
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))
        .then((json) => {
          setDatas({
            User: json,
          });
          if (json.message === "password successfully changed") {
            navigate("/viewprofile");
          }

          console.log(json);
        })
        .catch((err) => {
          console.log(err);
        });

      setInSubmit(true);
    }
  };

  useEffect(() => {
    const res = datas?.User?.message;
    console.log(res);
    setMessages(res);
  }, [datas]);

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && inSubmit) {
      console.log(User);
    }
  }, [User, formError, inSubmit]);

  const valide = (value) => {
    const error = {};
    const passwordLength = /^.{6,}$/;
    if (!value.currentPassword) {
      error.currentPassword = "!'Please Enter Your currentPassword'";
    }

    if (!value.newPassword) {
      error.newPassword = "!'Please Enter New Your newPassword'";
    } else if (!passwordLength.test(value.newPassword)) {
      error.newPassword = "!'Please Enter Maximum 6 Character'";
    }
    if (!value.confirmPassword) {
      //  else if(!value.confirmPassword  && value !== !value.password) {
      // 	error.password = "!'This is not Same'"
      // }

      error.confirmPassword = "!'Please Enter Your confirmPassword'";
    } //  else if(!value.password && value !== !value.confirmPassword) {
    // 	error.confirmPassword = "!'This is not Same'"
    // }

    return error;
  };

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    console.log(getToken);

    // if (getToken == null) {

    // 	navigate('/login')

    // }
  }, []);

  const initialValues = {
    username: "",
    email: "",
  };

  const [Users, setUsers] = useState(initialValues);
  const [Data, setData] = useState([]);
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState();

  // const [value, setValue] = useState();
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) =>
        response.json(
          setUsers({
            response,
          })
        )
      )
      .then((json) => {
        setData(json);
        setUsername(json.data.username);
        console.log(Users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("sonu",Data.json.data)

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...Users, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(Users));
    const tokenId = localStorage.getItem("token");
    console.log("namastey", tokenId);
    fetch(`${process.env.REACT_APP_APIURL}/updateProfile`, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ NewUserName: userName }),
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenId}`,
      },
    })
      .then((response) => response.json(console.log(response)))
      .then((json) => {
        setData({
          json,
        });
        // if (json.message === "successfully updated") {
        //   // navigate("/viewprofile");
        // }
        setMessage(json.data);

        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(message);

  console.log("--------------", Data.data);

  return (
    <section className="reg_sec">
      <div className="container mt-3">
        <div className="row align-items-baseline">
          <div className="col-lg-3">
            <ul className="nav nav-pills flex-column acunt_dsh" role="tablist">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/accountsettingservices">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingsubscriptions">
                  Subscriptions
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-bs-toggle="pill"
                  to="/viewprofile"
                >
                  Account Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/accountsettingpaymentmethod">
                  Payment Methods
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/transactionhistory">
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-9">
            <h5 className="user_tab1 mb-2">
              Welcome to <span className="user_ach">User</span>
            </h5>
            <div className="container tab-pane">
              <br />
              <div className="row  align-items-center">
                <h3 className="as-h3">Set Your Personal Info</h3>
                <div className="col-md-4 text-center">
                  <div className="w-50 m-auto ">
                    <img
                      src="writer/img/profile-icon-png.png"
                      alt="Mira-Whedon"
                      className="team_sec-img w-100 mt-0"
                    />
                  </div>
                  <p className="">{/* <Link to="/">Edit</Link> */}</p>
                </div>
                <div className="col-md-7 mb-5">
                  <form onSubmit={handleSubmit}>
                    <div className="me-3">
                      <label className="as-lbl"> Username</label>
                      <input
                        type="text"
                        id="fname1"
                        name="username"
                        onChange={(e) => setUsername(e.target.value)}
                        className="as-text_set"
                        value={userName}
                      />
                      {/* <p style={{ color: "red" }}>{formErrors.username}</p> */}
                    </div>

                    <div className="me-3">
                      <label className="as-lbl">Email Id</label>
                      <input
                        type="text"
                        id="fname2"
                        name="email"
                        className="as-text_set"
                        value={Data?.data?.email}
                      />
                    </div>

                    <button type="submit" className="as-btn_set m-auto me-1">
                      Update
                    </button>
                    {message === "successfully updated" ? (
                      <span className="Success" style={{ color: "#03979c" }}>
                        {message}
                      </span>
                    ) : (
                      <span className="Success text danger">{message}</span>
                    )}
                  </form>
                </div>

                <div className="row">
                  <h2 className="as-second-row_h2">
                    Default Setting For Managing Your Account
                  </h2>
                  <div className="col-md-3"> </div>

                  <form className="col-md-6" onSubmit={onSubmit}>
                    <label className="as-lbl">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      onChange={inputChange}
                      className="as-text_set"
                    />
                    <p style={{ color: "red" }}>{formError.currentPassword}</p>
                    <label className="as-lbl">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      onChange={inputChange}
                      className="as-text_set"
                    />
                    <p style={{ color: "red" }}>{formError.newPassword}</p>
                    <label className="as-lbl">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={inputChange}
                      className="as-text_set"
                    />
                    <p style={{ color: "red" }}>{formError.confirmPassword}</p>
                    <button
                      type="submit"
                      className="as-btn_set"
                      style={{ marginLeft: "40%" }}
                    >
                      Update
                    </button>
                    <br />
                    {messages === "password successfully changed" ? (
                      <h3
                        className="Success text-center"
                        style={{ color: "#03979c" }}
                      >
                        {messages}
                      </h3>
                    ) : (
                      <h3 className="Success text-danger text-center">
                        {messages}
                      </h3>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProfile;
