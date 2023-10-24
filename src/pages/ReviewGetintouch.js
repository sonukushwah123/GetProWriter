import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useProfileShow from "../fetchApi/ProfileShow";

const ReviewGetintouch = () => {
  const profile = useProfileShow();
  console.log(profile);

  const location = useLocation();

  const [token, setToken] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(true);
    } else {
      setToken(false);
    }
  }, [location.pathname]);
  console.log(token);
  const initialValues = {
    username: "",
    email: "",
    number: "",
    password: "",
    message: "",

    contentType: "",
    countryCode: "",
  };

  const navigate = useNavigate();

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [country, setCountry] = useState([]);
  const [Alltype, setAlltype] = useState([]);
  // const [expertlevel, setExpertlevel] = useState([]);

  // const [state, setState] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getAllContentType`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setAlltype(response.message);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  // 	console.log(message);
  // 	if(Object.keys(message).length === 0 && isSubmit) {
  // 		console.log(User);

  // 	}
  // },[])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getCountryCode`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setCountry(response.message);

        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const tokenID = localStorage.getItem("token");
    const {
      username,
      email,
      password,
      number,
      message,
      contentType,
      countryCode,
    } = User;

    if (!tokenID) {
      setFormErrors(validate(User));
    } else {
      setFormErrors(validation(User));
    }
    // add entity - POST
    // e.preventDefault();
    // creates entity

    const passwordLength1 = /^.{6,}$/;
    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;

    if (!tokenID) {
      if (
        username.trim() === "" ||
        email.trim() === "" ||
        password.trim() === "" ||
        number.trim() === "" ||
        message.trim() === "" ||
        contentType.trim() === "" ||
        countryCode.trim() === "" ||
        regex1.test(email.trim()) === false ||
        passwordLength1.test(password.trim()) === false
      ) {
        return;
      } else {
        const object = {
          username: username.trim(),
          email: email.trim(),
          password: password.trim(),
          number: number.trim(),
          message: message.trim(),
          contentType: contentType.trim(),
          countryCode: countryCode.trim(),
        };
        fetch(`${process.env.REACT_APP_APIURL}/getInTouch`, {
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
            if (json.message === "successfully login and order") {
              localStorage.setItem("token", json.token);
              navigate("/dashboard");
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
    } else {
      if (
        number.trim() === "" ||
        message.trim() === "" ||
        contentType.trim() === "" ||
        countryCode.trim() === ""
      ) {
        return;
      } else {
        const hello = {
          username: `${profile.username}`,
          email: `${profile.email}`,
          password: `${profile.password}`,
          number: number.trim(),
          message: message.trim(),
          contentType: contentType.trim(),
          countryCode: countryCode.trim(),
        };
        fetch(`${process.env.REACT_APP_APIURL}/getInTouch`, {
          method: "POST",
          mode: "cors",
          body: JSON.stringify(hello),
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
            if (json.message === "Order Successfully") {
              localStorage.setItem("token", json.token);
              navigate("/dashboard");
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
  }, [formErrors, isSubmit, User]);
  const validate = (values) => {
    const errors = {};

    const passwordLength = /^.{6,}$/;
    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (!values.username) {
      errors.username = "!'Please Enter Your Name'";
    }
    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.password) {
      errors.password = "!'Please Enter Your Password'";
    } else if (!passwordLength.test(values.password)) {
      errors.password = "!'Please enter maximum 6 character'";
    }
    if (!values.number) {
      errors.number = "!'Please Enter Your Number'";
    }
    if (!values.countryCode) {
      errors.countryCode = "!'Please Choose your countrycode'";
    }

    if (!values.message) {
      errors.message = "!'Please Enter Your deadline'";
    }

    if (!values.contentType) {
      errors.contentType = "!'Please Choose your AllType'";
    }

    return errors;
  };

  const validation = (values) => {
    const errors = {};

    if (!values.number) {
      errors.number = "!'Please Enter Your Number'";
    }
    if (!values.countryCode) {
      errors.countryCode = "!'Please Choose your countrycode'";
    }

    if (!values.message) {
      errors.message = "!'Please Enter Your Message'";
    }

    if (!values.contentType) {
      errors.contentType = "!'Please Choose your AllType'";
    }

    return errors;
  };

  // const {
  //   username,
  //   email,
  //   password,
  //   number,
  //   message,
  //   contentType,

  //   countryCode,
  // } = User;

  // const object = {
  //   username: username.trim(),
  //   email: email.trim(),

  //   password: password.trim(),
  //   number: number.trim(),
  //   message: message.trim(),
  //   contentType: contentType.trim(),

  //   countryCode: countryCode.trim(),
  // };

  // // add entity - POST
  // // e.preventDefault();
  // // creates entity

  // const passwordLength1 = /^.{6,}$/;
  // const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
  // if (
  //   username.trim() === "" ||
  //   email.trim() === "" ||
  //   password.trim() === "" ||
  //   number.trim() === "" ||
  //   message.trim() === "" ||
  //   contentType.trim() === "" ||
  //   countryCode.trim() === "" ||
  //   regex1.test(email.trim()) === false ||
  //   passwordLength1.test(password.trim()) === false
  // ) {
  //   return;
  // } else {
  //   fetch(`${process.env.REACT_APP_APIURL}/getInTouch`, {
  //     method: "POST",
  //     mode: "cors",
  //     body: JSON.stringify(object),
  //     headers: {
  //       "Content-type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => response.json(console.log(response)))

  //     .then((json) => {
  //       setData({
  //         User: json,
  //       });
  //       if (json.message === "successfully login and order") {
  //         localStorage.setItem("token", json.token);
  //         navigate("/dashboard");
  //       }

  //       // setMessage(json.message)
  //       console.log(json);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // setState(valid(json.message));

  //   setIsSubmit(true);
  // }

  // useEffect(() => {
  // 	const res = data?.User?.error;
  // 	setError(res);

  // }, [])

  // useEffect(() => {
  //   const res = data?.User?.message;
  //   setMessage(res);
  // }, [data]);

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(User);
  //     // fetchData()
  //   }
  // }, [formErrors, isSubmit, User]);
  // const validate = (values) => {
  //   const errors = {};

  //   const passwordLength = /^.{6,}$/;
  //   const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
  //   if (!values.username) {
  //     errors.username = "!'Please Enter Your Name'";
  //   }
  //   if (!values.email) {
  //     errors.email = "!'Please Enter Your Email'";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "!'This is not Email Format'";
  //   }
  //   if (!values.password) {
  //     errors.password = "!'Please Enter Your Password'";
  //   } else if (!passwordLength.test(values.password)) {
  //     errors.password = "!'Please enter maximum 6 character'";
  //   }
  //   if (!values.number) {
  //     errors.number = "!'Please Enter Your Number'";
  //   }
  //   if (!values.countryCode) {
  //     errors.countryCode = "!'Please Choose your countrycode'";
  //   }
  //   // else if (values.number.length < 10) {
  //   //   errors.number = "!'Please Enter 10 Character'";
  //   // } else if (values.number.length > 10) {
  //   //   errors.number = "!'Please Enter 10 Character'";
  //   // }
  //   if (!values.message) {
  //     errors.message = "!'Please Enter Your message'";
  //   }
  //   if (!values.expertLevel) {
  //     errors.expertLevel = "!'Please Choose your Expert Level'";
  //   }
  //   if (!values.contentType) {
  //     errors.contentType = "!'Please Choose your AllType'";
  //   }

  //   return errors;
  // };

  return (
    // <form
    //   style={{ padding: "4%" }}
    //   className="text-center"
    //   onSubmit={handleSubmit}
    // >
    //   <h2 className="form_sec-h2">
    //     Get In <span className="spa">Touch </span>
    //   </h2>
    //   <div className="form-inputs d-flex space-between">
    //     <div className="Home-Name me-1">
    //       <input
    //         type="text"
    //         name="username"
    //         placeholder="Name"
    //         onChange={handleChange}
    //         className="text_set ms-0 me-0 mt-0"
    //       />
    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.username}
    //       </p>
    //     </div>

    //     <div className="Home-Name ms-1">
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email"
    //         onChange={handleChange}
    //         className="text_set ms-0 mt-0"
    //       />
    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.email}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="Home-Name">
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Password"
    //       onChange={handleChange}
    //       className="text_set ms-0 mt-0"
    //     />
    //   </div>
    //   <p className="mb-0" style={{ color: "red" }}>
    //     {formErrors.password}
    //   </p>
    //   <div className="form-inputs d-flex space-between">
    //     <div className="Home-Name me-1">
    //       <div className=" position-relative">
    //         <select
    //           className=" position-absolute h-100 border-0"
    //           style={{
    //             top: "0px",
    //             width: "20%",
    //             cursor: "pointer",
    //           }}
    //           name="countryCode"
    //           onChange={handleChange}
    //           // name="name"
    //           required
    //         >
    //           <option disabled selected hidden>
    //             +00
    //           </option>
    //           {country?.map((countryitem, value) => {
    //             return (
    //               <>
    //                 <option value={value}>
    //                   {countryitem.dial_code}
    //                   &nbsp;{countryitem.name}
    //                 </option>
    //               </>
    //             );
    //           })}
    //         </select>

    //         <input
    //           type="text"
    //           style={{ paddingLeft: "60px" }}
    //           name="number"
    //           placeholder="Number"
    //           onChange={handleChange}
    //           className="text_set ms-0 me-0 mt-0"
    //           aria-label="Username"
    //           aria-describedby="basic-addon1"
    //         />
    //       </div>

    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.countryCode}
    //       </p>

    //       {/* <P className="mb-0"honeInput
    //         country={"India"}
    //         enableSearch={true}
    //         value={phone}
    //         name="number"
    //         className="w-100 me-1"
    //         onChange={(phone) => setPhone(phone)}
    //       /> */}
    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.number}
    //       </p>
    //     </div>
    //     <div className="Home-Name ms-1">
    //       <select
    //         aria-label="Default select example"
    //         className="form-select rounded-0 text_set ms-0 mt-0"
    //         onChange={handleChange}
    //         name="contentType"
    //         style={{
    //           cursor: "pointer",
    //         }}
    //         required
    //       >
    //         <option disabled selected hidden>
    //           Content Type
    //         </option>
    //         {Alltype?.map((Alltypeitem, value) => {
    //           return (
    //             <>
    //               <option value={value}>{Alltypeitem.contentType}</option>
    //             </>
    //           );
    //         })}
    //       </select>

    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.contentType}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="form-inputs d-flex space-between">
    //     <div className="Home-Name">
    //       <textarea
    //         className="form-control rounded-0 form-area ms-0 mt-0 text_set"
    //         rows="5"
    //         id="message"
    //         placeholder="Message"
    //         onChange={handleChange}
    //         name="message"
    //       ></textarea>

    //       <p className="mb-0" style={{ color: "red" }}>
    //         {formErrors.message}
    //       </p>
    //     </div>
    //   </div>
    //   <button type="submit" className="btn_set1 ms-0">
    //     Register
    //   </button>{" "}
    //   {message === "successfully login and order" ? (
    //     <h3 className="Success text-center" style={{ color: "#03979c" }}>
    //       {message}
    //     </h3>
    //   ) : (
    //     <h3 className="Success text-danger text-center">{message}</h3>
    //   )}
    //   {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
    // </form>

    <>
      {token === false ? (
        <form
          style={{ padding: "4%" }}
          className="text-center"
          onSubmit={handleSubmit}
        >
          <h2 className="form_sec-h2">
            Get In <span className="spa">Touch </span>
          </h2>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name me-1">
              <input
                type="text"
                name="username"
                placeholder="Name"
                onChange={handleChange}
                className="text_set ms-0 me-0 mt-0"
              />
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.username}
              </p>
            </div>

            <div className="Home-Name ms-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="text_set ms-0 mt-0"
              />
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.email}
              </p>
            </div>
          </div>
          <div className="Home-Name">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="text_set ms-0 mt-0"
            />
          </div>
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.password}
          </p>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name me-1">
              <div className=" position-relative">
                <select
                  className=" position-absolute h-100 border-0"
                  style={{
                    top: "0px",
                    width: "20%",
                    cursor: "pointer",
                  }}
                  name="countryCode"
                  onChange={handleChange}
                  // name="name"
                  required
                >
                  <option disabled selected hidden>
                    +00
                  </option>
                  {country?.map((countryitem, value) => {
                    return (
                      <>
                        <option value={value}>
                          {countryitem.dial_code}
                          &nbsp;{countryitem.name}
                        </option>
                      </>
                    );
                  })}
                </select>

                <input
                  type="text"
                  style={{ paddingLeft: "60px" }}
                  name="number"
                  placeholder="Number"
                  onChange={handleChange}
                  className="text_set ms-0 me-0 mt-0"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.countryCode}
              </p>

              {/* <P className="mb-0"honeInput
            country={"India"}
            enableSearch={true}
            value={phone}
            name="number"
            className="w-100 me-1"
            onChange={(phone) => setPhone(phone)}
          /> */}
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.number}
              </p>
            </div>
            <div className="Home-Name ms-1">
              <select
                aria-label="Default select example"
                className="form-select rounded-0 text_set ms-0 mt-0"
                onChange={handleChange}
                name="contentType"
                style={{
                  cursor: "pointer",
                }}
                required
              >
                <option disabled selected hidden>
                  Content Type
                </option>
                {Alltype?.map((Alltypeitem, value) => {
                  return (
                    <>
                      <option value={value}>{Alltypeitem.contentType}</option>
                    </>
                  );
                })}
              </select>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.contentType}
              </p>
            </div>
          </div>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name">
              <textarea
                className="form-control rounded-0 form-area ms-0 mt-0 text_set"
                rows="5"
                id="message"
                placeholder="Message"
                onChange={handleChange}
                name="message"
              ></textarea>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.message}
              </p>
            </div>
          </div>
          <button type="submit" className="btn_set1 ms-0">
            Register
          </button>{" "}
          {message === "successfully login and order" ? (
            <h3 className="Success text-center" style={{ color: "#03979c" }}>
              {message}
            </h3>
          ) : (
            <h3 className="Success text-danger text-center">{message}</h3>
          )}
          {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
        </form>
      ) : (
        <form
          style={{ padding: "4%" }}
          className="text-center"
          onSubmit={handleSubmit}
        >
          <h2 className="form_sec-h2">
            Get In <span className="spa">Touch </span>
          </h2>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name me-1">
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={profile.username}
                onChange={handleChange}
                className="text_set ms-0 me-0 mt-0"
              />
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.username}
              </p>
            </div>

            <div className="Home-Name ms-1">
              <input
                type="email"
                name="email"
                value={profile.email}
                placeholder="Email"
                onChange={handleChange}
                className="text_set ms-0 mt-0"
              />
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.email}
              </p>
            </div>
          </div>
          <div className="Home-Name">
            <input
              type="password"
              name="password"
              value={profile.password}
              placeholder="Password"
              onChange={handleChange}
              className="text_set ms-0 mt-0"
            />
          </div>
          <p className="mb-0" style={{ color: "red" }}>
            {formErrors.password}
          </p>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name me-1">
              <div className=" position-relative">
                <select
                  className=" position-absolute h-100 border-0"
                  style={{
                    top: "0px",
                    width: "20%",
                    cursor: "pointer",
                  }}
                  name="countryCode"
                  onChange={handleChange}
                  // name="name"
                  required
                >
                  <option disabled selected hidden>
                    +00
                  </option>
                  {country?.map((countryitem, value) => {
                    return (
                      <>
                        <option value={value}>
                          {countryitem.dial_code}
                          &nbsp;{countryitem.name}
                        </option>
                      </>
                    );
                  })}
                </select>

                <input
                  type="text"
                  style={{ paddingLeft: "60px" }}
                  name="number"
                  placeholder="Number"
                  onChange={handleChange}
                  className="text_set ms-0 me-0 mt-0"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.countryCode}
              </p>

              {/* <P className="mb-0"honeInput
            country={"India"}
            enableSearch={true}
            value={phone}
            name="number"
            className="w-100 me-1"
            onChange={(phone) => setPhone(phone)}
          /> */}
              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.number}
              </p>
            </div>
            <div className="Home-Name ms-1">
              <select
                aria-label="Default select example"
                className="form-select rounded-0 text_set ms-0 mt-0"
                onChange={handleChange}
                name="contentType"
                style={{
                  cursor: "pointer",
                }}
                required
              >
                <option disabled selected hidden>
                  Content Type
                </option>
                {Alltype?.map((Alltypeitem, value) => {
                  return (
                    <>
                      <option value={value}>{Alltypeitem.contentType}</option>
                    </>
                  );
                })}
              </select>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.contentType}
              </p>
            </div>
          </div>
          <div className="form-inputs d-flex space-between">
            <div className="Home-Name">
              <textarea
                className="form-control rounded-0 form-area ms-0 mt-0 text_set"
                rows="5"
                id="message"
                placeholder="Message"
                onChange={handleChange}
                name="message"
              ></textarea>

              <p className="mb-0" style={{ color: "red" }}>
                {formErrors.message}
              </p>
            </div>
          </div>
          <button type="submit" className="btn_set1 ms-0">
            Order Now
          </button>{" "}
          {message === "Order Successfully" ? (
            <h3 className="Success text-center" style={{ color: "#03979c" }}>
              {message}
            </h3>
          ) : (
            <h3 className="Success text-danger text-center">{message}</h3>
          )}
          {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
        </form>
      )}
    </>
  );
};

export default ReviewGetintouch;
