import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import axios from "axios";

import { formatCreditCardNumber } from "./utils";

const AccountSettingPaymentMethod = () => {
  const initialValues = {
    accountHolder: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvv: "",
  };

  const [User, setUser] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  // let [cardNumber, setCardNumber] = useState("");
  // let [message, setMessage] = useState("");
  // function handleCreditCard(event) {
  //   let value = event.target.value;
  //   setCardNumber(value);
  //   if (validator.isCreditCard(value)) {
  //     setMessage("is a valid credit card number");
  //   } else {
  //     setMessage("is not a valid credit card number");
  //   }
  // }

  const handleInputChange = ({ target }, e) => {
    if (validator.isCreditCard(target.value) && target.name === "cardNumber") {
      target.value = formatCreditCardNumber(target.value);

      setUser({ ...User, [target.name]: target.value });
      setMessage("");
    } else {
      setMessage("is not a valid credit card number");
    }
  };
  // else if (target.name === "mmyy") {
  //   target.value = formatExpirationDate(target.value);
  //   setUser({ ...User, [target.name]: target.value });
  // } else if (target.name === "cvv") {
  //   target.value = formatCVC(target.value);
  // }

  // const handleInputFocus = ({ target }) => {
  //   setUser({
  //     focused: target.name,
  //   });
  // };

  const tokenID = localStorage.getItem("token");
  console.log(tokenID);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { accountHolder, cardNumber, cvv, mm, yy } = User;

    const object = {
      accountHolder: accountHolder.trim(),
      cardNumber: cardNumber.trim(),
      cvv: cvv.trim(),
      mm: mm.trim(),
      yy: yy.trim(),
    };

    setFormErrors(validate(User));

    // add entity - POST
    // e.preventDefault();
    // creates entity

    if (
      accountHolder.trim() === "" ||
      cardNumber.trim() === "" ||
      cvv.trim() === "" ||
      mm.trim() === "" ||
      yy.trim() === ""
    ) {
      return;
    } else {
      fetch(`${process.env.REACT_APP_APIURL}/savePaymentMethod`, {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
      })
        .then((response) => response.json(console.log(response)))

        .then((json) => {
          setData({
            User: json,
          });
          if (json.message === "Payment Detail Saved") {
            // localStorage.removeItem("token");
            window.location.reload(true);
          }

          setMessage(json.message);
          console.log(json.message);
        })
        .catch((err) => {
          console.log(err);
        });
      // setState(valid(json.message));

      setIsSubmit(true);
    }
  };

  // useEffect(() => {
  //   const res = data?.User?.error;
  //   setError(res);
  // }, []);

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

    if (!values.accountHolder) {
      errors.accountHolder = "!'Please Enter Your Card Holder Name'";
    }
    if (!values.cardNumber) {
      errors.cardNumber = "!'Please Enter Your Card Number'";
    }
    if (!values.mm) {
      errors.mm = "!'Please Enter Your Expiry Month'";
    }
    if (!values.yy) {
      errors.yy = "!'Please Enter Your Expiry Year'";
    }
    if (!values.cvv) {
      errors.cvv = "!'Please Enter Your CVC'";
    }

    return errors;
  };

  const [cardNum, setCardNum] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");

  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/fetchPaymentMethod`, {
      method: "GET",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setState(json.message);
        console.log(json.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeHandler = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_APIURL}/deletePaymentMethod/${id}`,
        {},
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `${tokenID}`,
          },
        }
      )
      .then((res) => res.json(console.log(res)))
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
    const personsCopy = [...state];
    console.log("personsCopy", personsCopy);
    personsCopy?.splice(id, 1);
    setState(personsCopy);
  };

  const [cardHolder, setCardHolder] = useState([]);
  const [id, setId] = useState([]);

  const updateInputChange = ({ target }) => {
    setCardNum(target.value);
    if (validator.isCreditCard(target.value)) {
      target.value = formatCreditCardNumber(target.value);
      setCardNum(target.value);
      setMessage("");
    } else {
      setMessage("is not a valid credit card number");
    }
  };
  // const inputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEmployerInputData({ ...employerInputData, [name]: value });
  // };
  const edit = (id) => {
    const filterCard = state?.filter((cards) => cards._id === id);
    // setMessage(json.message);
    setId(filterCard[0]._id);
    setCardHolder(filterCard[0].accountHolder);
    setCardNum(filterCard[0].cardNumber);
    setExpiryMonth(filterCard[0].mm);
    setExpiryYear(filterCard[0].yy);
    setCvv(filterCard[0].cvv);

    console.log(filterCard);
  };

  const EmployerClick = (e) => {
    e.preventDefault();

    const hello = {
      id: `${id}`,
      accountHolder: `${cardHolder}`,
      cardNumber: `${cardNum}`,
      mm: `${expiryMonth}`,
      yy: `${expiryYear}`,
      cvv: `${cvv}`,
    };
    console.log(hello);
    fetch(`${process.env.REACT_APP_APIURL}/editPaymentMethod`, {
      method: "POST",
      body: JSON.stringify(hello),
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))

      .then((json) => {
        setData({
          User: json,
        });
        console.log(json.message);
        if (json.message === "Card Updated") {
          // localStorage.removeItem("token");
          window.location.reload(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <Link className="nav-link" to="/viewprofile">
                  Account Setting
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  data-bs-toggle="pill"
                  to="/accountsettingpaymentmethod"
                >
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

            <div id="menu4" className="container tab-pane d-block">
              <br />
              <h2 className="as-second-row_h2">Payment Information:</h2>
              <div className="row justify-content-end">
                {state?.length > [0] ? (
                  <div className="col-sm-5">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-success border-0 btn-block user_addm"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Add Payment Method
                      </button>

                      {/* <!-- Button trigger modal --> */}
                      {/* <button type="button" class="btn btn-primary">
                      Launch static backdrop modal
                    </button> */}

                      {/* <!-- Modal --> */}
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                        style={{ background: "#00000052" }}
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content border-0">
                            <div
                              class="modal-header border-0"
                              style={{ background: "rgb(3, 151, 156)" }}
                            >
                              <h1
                                class="modal-title fs-5 text-white"
                                id="exampleModalLabel"
                              >
                                Save Card Details
                              </h1>
                              <button
                                type="button"
                                class="bg-transparent border-0"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i class="fa-solid fa-xmark fs-3 text-white"></i>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form
                                style={{ padding: "4%" }}
                                className="text-center"
                                onSubmit={handleSubmit}
                              >
                                <div className="Home-Name">
                                  <input
                                    type="text"
                                    name="accountHolder"
                                    placeholder="Card Holder Name"
                                    onChange={handleChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.accountHolder}
                                  </p>
                                </div>
                                <div className="Home-Name">
                                  <input
                                    type="tel"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    pattern="[\d| ]{16,22}"
                                    maxLength={19}
                                    onChange={handleInputChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cardNumber}
                                  </p>
                                </div>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      name="mm"
                                      type="tel"
                                      // pattern="\d\d/\d\d"
                                      maxlength="2"
                                      placeholder="MM"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.mm}
                                    </p>
                                  </div>

                                  <div className="Home-Name   ps-1">
                                    <input
                                      name="yy"
                                      type="tel"
                                      maxlength="2"
                                      placeholder="YY"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.yy}
                                    </p>
                                  </div>
                                </div>
                                <div className="Home-Name pe-1">
                                  <input
                                    type="tel"
                                    // min={date.currentTime}
                                    pattern="\d*"
                                    name="cvv"
                                    placeholder="CVC"
                                    maxlength="3"
                                    onChange={handleChange}
                                    className="text_set ms-0 me-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cvv}
                                  </p>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-dark border-0 mt-3 ms-0"
                                  style={{ background: "rgb(2, 154, 153)" }}
                                >
                                  Save Payment
                                </button>{" "}
                                {message === "Payment Detail Saved" ? (
                                  <h3
                                    className="Success text-center"
                                    style={{ color: "#03979c" }}
                                  >
                                    {message}
                                  </h3>
                                ) : (
                                  <h3 className="Success text-danger text-center">
                                    {message}
                                  </h3>
                                )}
                                {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <Link to="/transactionhistory">
                        <button
                          type="button"
                          className="btn w-100 btn-success border-0 btn-block user_addm"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          Add Money to Wallet
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="col-sm-12">
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-success border-0 btn-block user_addm"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        Add Payment Method
                      </button>

                      {/* <!-- Button trigger modal --> */}
                      {/* <button type="button" class="btn btn-primary">
                      Launch static backdrop modal
                    </button> */}

                      {/* <!-- Modal --> */}
                      <div
                        class="modal fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                        style={{ background: "#00000052" }}
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content border-0">
                            <div
                              class="modal-header border-0"
                              style={{ background: "rgb(3, 151, 156)" }}
                            >
                              <h1
                                class="modal-title fs-5 text-white"
                                id="exampleModalLabel"
                              >
                                Save Card Details
                              </h1>
                              <button
                                type="button"
                                class="bg-transparent border-0"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i class="fa-solid fa-xmark fs-3 text-white"></i>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form
                                style={{ padding: "4%" }}
                                className="text-center"
                                onSubmit={handleSubmit}
                              >
                                <div className="Home-Name">
                                  <input
                                    type="text"
                                    name="accountHolder"
                                    placeholder="Card Holder Name"
                                    onChange={handleChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.accountHolder}
                                  </p>
                                </div>
                                <div className="Home-Name">
                                  <input
                                    type="tel"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    pattern="[\d| ]{16,22}"
                                    maxLength={19}
                                    onChange={handleInputChange}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cardNumber}
                                  </p>
                                </div>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      name="mm"
                                      type="tel"
                                      // pattern="\d\d/\d\d"
                                      maxlength="2"
                                      placeholder="MM"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.mm}
                                    </p>
                                  </div>

                                  <div className="Home-Name   ps-1">
                                    <input
                                      name="yy"
                                      type="tel"
                                      maxlength="2"
                                      placeholder="YY"
                                      onChange={handleChange}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.yy}
                                    </p>
                                  </div>
                                </div>
                                <div className="Home-Name pe-1">
                                  <input
                                    type="tel"
                                    // min={date.currentTime}
                                    pattern="\d*"
                                    name="cvv"
                                    placeholder="CVC"
                                    maxlength="3"
                                    onChange={handleChange}
                                    className="text_set ms-0 me-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cvv}
                                  </p>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-dark border-0 mt-3 ms-0"
                                  style={{ background: "rgb(2, 154, 153)" }}
                                >
                                  Save Payment
                                </button>{" "}
                                {message === "Payment Detail Saved" ? (
                                  <h3
                                    className="Success text-center"
                                    style={{ color: "#03979c" }}
                                  >
                                    {message}
                                  </h3>
                                ) : (
                                  <h3 className="Success text-danger text-center">
                                    {message}
                                  </h3>
                                )}
                                {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-grid">
                      <Link to="/transactionhistory">
                        <button
                          type="button"
                          className="btn border-0 mb-0 btn-success w-100 btn-block"
                        >
                          Add Money to Wallet
                        </button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" class="btn btn-primary">
                      Launch static backdrop modal
                    </button> */}

                {/* <!-- Modal --> */}

                {state?.map((friend, index) => {
                  return (
                    <>
                      <div className="col-sm-7">
                        <div className="table-responsive  text-nowrap">
                          <table className="table table-borderless ">
                            <tbody>
                              <tr
                                className="p-0"
                                style={{ background: "#029a99" }}
                              >
                                <td className="p-2 fs-4 text-white">
                                  Card &nbsp; {index + 1}
                                </td>
                                <td className="p-2 text-end fs-4 text-white">
                                  {" "}
                                  <button
                                    className="bg-transparent btn btn-success  border-0 p-0 mb-0 text-white fs-6"
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target={"#savepayment" + friend._id}
                                    onClick={() => edit(friend._id)}
                                  >
                                    <span className="fa fa-edit" />
                                  </button>
                                  &nbsp;
                                  <button
                                    title="Delete"
                                    onClick={() => removeHandler(friend._id)}
                                    className="bg-transparent  border-0 text-white fs-6"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                  >
                                    <span class="far fa-trash-alt  "></span>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-25 py-2">
                                  Card Holder Name &nbsp; :
                                </td>

                                <td className=" py-2">
                                  {friend.accountHolder}
                                </td>
                              </tr>
                              <tr>
                                <td className="w-25 py-2">Card No. &nbsp; :</td>
                                <td className=" py-2"> {friend.cardNumber}</td>
                              </tr>
                              <tr>
                                <td className="w-25 py-2">
                                  Expiry Month &nbsp; :
                                </td>

                                <td className=" py-2">{friend.mm}</td>
                              </tr>
                              <tr>
                                <td className="w-25 py-2">
                                  Expiry Year &nbsp; :
                                </td>

                                <td className=" py-2">{friend.yy}</td>
                              </tr>
                              <tr>
                                <td className="w-25 py-2">CVC &nbsp; :</td>
                                <td className=" py-2">{friend.cvv}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div
                        class="modal fade"
                        id={"savepayment" + friend._id}
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                        style={{ background: "#00000052" }}
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content border-0">
                            <div
                              class="modal-header border-0"
                              style={{ background: "rgb(3, 151, 156)" }}
                            >
                              <h1
                                class="modal-title fs-5 text-white"
                                id="exampleModalLabel"
                              >
                                Update Card Details
                              </h1>
                              <button
                                type="button"
                                class="bg-transparent border-0"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >
                                <i class="fa-solid fa-xmark fs-3 text-white"></i>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form
                                style={{ padding: "4%" }}
                                className="text-center"
                                onSubmit={EmployerClick}
                              >
                                <div className="Home-Name">
                                  <input
                                    type="text"
                                    name="accountHolder"
                                    placeholder="Card Holder Name"
                                    onChange={(e) =>
                                      setCardHolder(e.target.value)
                                    }
                                    value={cardHolder}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.accountHolder}
                                  </p>
                                </div>
                                <div className="Home-Name">
                                  <input
                                    type="tel"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    pattern="[\d| ]{16,22}"
                                    maxLength={19}
                                    onChange={updateInputChange}
                                    value={cardNum}
                                    className="text_set ms-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cardNumber}
                                  </p>
                                </div>
                                <div className="form-inputs d-flex space-between">
                                  <div className="Home-Name pe-1">
                                    <input
                                      name="mm"
                                      type="tel"
                                      // pattern="\d\d/\d\d"
                                      maxlength="2"
                                      placeholder="MM"
                                      onChange={(e) =>
                                        setExpiryMonth(e.target.value)
                                      }
                                      value={expiryMonth}
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.mm}
                                    </p>
                                  </div>

                                  <div className="Home-Name   ps-1">
                                    <input
                                      name="yy"
                                      type="tel"
                                      maxlength="2"
                                      placeholder="YY"
                                      value={expiryYear}
                                      onChange={(e) =>
                                        setExpiryYear(e.target.value)
                                      }
                                      className="text_set ms-0 mt-0"
                                    />
                                    <p
                                      className="mb-0"
                                      style={{ color: "red" }}
                                    >
                                      {formErrors.yy}
                                    </p>
                                  </div>
                                </div>
                                <div className="Home-Name pe-1">
                                  <input
                                    type="tel"
                                    // min={date.currentTime}
                                    pattern="\d*"
                                    value={cvv}
                                    name="cvv"
                                    placeholder="CVC"
                                    maxlength="3"
                                    onChange={(e) => setCvv(e.target.value)}
                                    className="text_set ms-0 me-0 mt-0"
                                  />
                                  <p className="mb-0" style={{ color: "red" }}>
                                    {formErrors.cvv}
                                  </p>
                                </div>
                                <button
                                  type="submit"
                                  // onClick={() => EmployerClick(friend._id)}
                                  className="btn btn-dark border-0 mt-3 ms-0"
                                  style={{ background: "rgb(2, 154, 153)" }}
                                >
                                  Save Payment
                                </button>{" "}
                                {message === "Card Updated" ? (
                                  <h3
                                    className="Success text-center"
                                    style={{ color: "#03979c" }}
                                  >
                                    {message}
                                  </h3>
                                ) : (
                                  <h3 className="Success text-danger text-center">
                                    {message}
                                  </h3>
                                )}
                                {/* <Link to="/Login"><button type="button" className="btn_set2" onClick={(e) => this.create(e)}>Login</button></Link> */}
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountSettingPaymentMethod;

// import React, { Component } from "react";
// import { Card } from "react-bootstrap";
// import "./styles.css";

// import {
//   formatCreditCardNumber,
//   formatCVC,
//   formatExpirationDate,
// } from "./utils";

// class AccountSettingPaymentMethod extends Component {
//   state = {
//     number: "",
//     name: "",
//     expiry: "",
//     cvc: "",
//     issuer: "",
//     focused: "",
//     formData: null,
//   };

//   handleCallback = ({ issuer }, isValid) => {
//     if (isValid) {
//       this.setState({ issuer });
//     }
//   };

//   handleInputFocus = ({ target }) => {
//     this.setState({
//       focused: target.name,
//     });
//   };

//   handleInputChange = ({ target }) => {
//     if (target.name === "number") {
//       target.value = formatCreditCardNumber(target.value);
//     } else if (target.name === "expiry") {
//       target.value = formatExpirationDate(target.value);
//     } else if (target.name === "cvc") {
//       target.value = formatCVC(target.value);
//     }

//     this.setState({ [target.name]: target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert("You have finished payment!");
//     this.form.reset();
//   };

//   render() {
//     const { name, number, expiry, cvc, focused, issuer } = this.state;

//     return (
//       <div key="Payment">
//         <div className="App-payment">
//           <h1>Enter your payment details</h1>
//           <h4>please input your information below</h4>
//           <Card
//             number={number}
//             name={name}
//             expiry={expiry}
//             cvc={cvc}
//             focused={focused}
//             callback={this.handleCallback}
//           />
//           <form ref={(c) => (this.form = c)} onSubmit={this.handleSubmit}>
//             <div className="form-group">
//               <small>Name on card:</small>

//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="Name"
//                 pattern="[a-z A-Z-]+"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>
//             <div className="form-group">
//               <small>Card Number:</small>

//               <input
//                 type="tel"
//                 name="number"
//                 className="form-control"
//                 placeholder="Card Number"
//                 pattern="[\d| ]{16,22}"
//                 maxLength="19"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>

//             <div className="form-group">
//               <small>Expiration Date:</small>

//               <input
//                 type="tel"
//                 name="expiry"
//                 className="form-control"
//                 placeholder="Valid Thru"
//                 pattern="\d\d/\d\d"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>
//             <div className="form-group">
//               <small>CVC:</small>

//               <input
//                 type="tel"
//                 name="cvc"
//                 className="form-control"
//                 placeholder="CVC"
//                 pattern="\d{3}"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>
//             <input type="hidden" name="issuer" value={issuer} />
//             <div className="form-actions">
//               <button>Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default AccountSettingPaymentMethod;
