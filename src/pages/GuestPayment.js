import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import useProfileShow from "../fetchApi/ProfileShow";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const GuestPayment = () => {
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
    email: "",
    amount: "",
    dec: "",
  };

  const [user, setUser] = useState(initialValues);
  // const [amount, setAmount] = useState("");
  // const [email, setEmail] = useState("");
  // const [dec, setDec] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, amount, dec } = user;

    const tokenID = localStorage.getItem("token");

    const object = {
      email: email.trim(),
      amount: amount.trim(),
      dec: dec.trim(),
    };

    const regex1 = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;
    if (
      email.trim() === "" ||
      amount.trim() === "" ||
      dec.trim() === "" ||
      regex1.test(email.trim()) === false
    ) {
      if (!tokenID) {
        setFormErrors(validate(user));
      } else {
        setFormErrors(validation(user));
      }
    }

    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
      // fetchData()
    }
  }, []);

  const validate = (values) => {
    const errors = {};

    const regex = /^[^@]+@(yahoo|gmail|mail)\.(com)$/i;

    if (!values.email) {
      errors.email = "!'Please Enter Your Email'";
    } else if (!regex.test(values.email)) {
      errors.email = "!'This is not Email Format'";
    }
    if (!values.amount) {
      errors.amount = "!'Please Enter Your Amount'";
    }

    if (!values.dec) {
      errors.dec = "!'Please Enter Description'";
    }
    return errors;
  };

  const validation = (values) => {
    const errors = {};

    if (!values.amount) {
      errors.amount = "!'Please Enter Your Amount'";
    }

    if (!values.dec) {
      errors.dec = "!'Please Enter Description'";
    }
    return errors;
  };

  async function showGuestRazorpay() {
    const tokenID = localStorage.getItem("token");
    const amount = user.amount;
    console.log(amount);
    const email = tokenID ? profile.email : user.email;
    console.log(email);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const payload = JSON.stringify({
      amount: amount,
      email: email,
    });

    const data = await fetch(
      `${process.env.REACT_APP_APIURL}/razorpayPayment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          // Authorization: `${tokenID}`,
        },
        body: payload,
      }
    ).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_Xa2mSWNFvEWycp",
      currency: data.order.currency,
      amount: data.amount.toString(),
      order_id: data.order.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",

      // email: data?.user,
      handler: async function (response) {
        const data = JSON.stringify({
          email: email,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });

        const config = {
          method: "post",
          url: `${process.env.REACT_APP_APIURL}/razorpayGuestPaymentSuccess`,
          headers: {
            // Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("log", data);
        await axios(config)
          .then(function (response) {
            console.log(response.data);
            // setEmail(response.data);
            // console.log(email)
            window.location.reload(true);
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(response);
        // alert("Transaction successful");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const GuestStripe = () => {
    const tokenID = localStorage.getItem("token");
    const amount = user.amount;
    console.log(amount);
    const email = tokenID ? profile.email : user.email;

    console.log(email);
    axios
      .post(`${process.env.REACT_APP_APIURL}/stripeGuestPayment`, {
        wallet: amount,
        email: email,
      })

      .then((response) => {
        sessionStorage.setItem("email", email);
        // console.log("wertertyertyuty", email);
        console.log(response);

        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
      })
      .catch((error) => console.log(error));
  };

  const GuestPaypal = () => {
    const tokenID = localStorage.getItem("token");
    const amount = user.amount;
    console.log(amount);
    const email = tokenID ? profile.email : user.email;
    console.log(email);
    axios
      .post(`${process.env.REACT_APP_APIURL}/PaypalGuestPayment`, {
        amount: amount,
        email: email,
      })
      .then((response) => {
        sessionStorage.setItem("amount", amount);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        console.log(response.data.url);
      })

      .catch((error) => console.log(error));
  };
  // console.log(paypal);

  return (
    <section className="fp_sec">
      <div className="container">
        <div className="row  align-items-center bg-white">
          <div className="col-md-6 text-center">
            <img
              src="writer/img/Payment-Information-cuate.png"
              className="fp-img"
              alt=""
            />
          </div>

          <div className="col-md-6 p-4">
            {token === false ? (
              <form className="" onSubmit={handleSubmit}>
                <div>
                  <label className="as-lbl">Enter Your Email</label>
                  <input
                    type="email"
                    id="fname1"
                    name="email"
                    // value={email}
                    onChange={handleChange}
                    className="as-text_set border rounded bg-white"
                  />
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                </div>
                <div>
                  <label className="as-lbl">Enter Your Amount</label>
                  <input
                    type="number"
                    id="fname1"
                    name="amount"
                    // value={amount}
                    onChange={handleChange}
                    className="as-text_set border rounded bg-white"
                  />
                  <p style={{ color: "red" }}>{formErrors.amount}</p>
                </div>
                <div>
                  <label className="as-lbl">Enter Your Description</label>
                  <textarea
                    className="form-control m-0 w-100 bg-white   mt-2 mb-3 form-area ct_text-set1"
                    rows="5"
                    name="dec"
                    id="message"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <p style={{ color: "red" }}>{formErrors.dec}</p>
                </div>
                {user.email.trim() === "" ||
                user.amount.trim() === "" ||
                user.dec.trim() === "" ? (
                  <button type="submit" className=" as-btn_set m-auto me-1">
                    Pay Now
                  </button>
                ) : (
                  <button
                    type="button"
                    className=" as-btn_set m-auto me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalGuest"
                  >
                    Pay Now
                  </button>
                )}
                <div
                  className="modal fade"
                  id="exampleModalGuest"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content border-0">
                      <div
                        className="modal-header border-0"
                        style={{ background: "rgb(3, 151, 156)" }}
                      >
                        <h1
                          className="modal-title fs-5 text-white"
                          id="exampleModalLabel"
                        >
                          GUEST PAYMENT
                        </h1>
                        <button
                          type="button"
                          className="bg-transparent border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fa-solid fa-xmark fs-3 text-white"></i>
                        </button>
                      </div>
                      <div className="modal-body text-center py-5">
                        {" "}
                        <button
                          type="button"
                          onClick={() => GuestStripe()}
                          className="btn Pay me-1"
                        >
                          Pay Stripe
                        </button>
                        <button
                          type="button"
                          onClick={() => GuestPaypal()}
                          className="btn Pay ms-1"
                        >
                          Pay Paypal
                        </button>
                        <button
                          type="button"
                          onClick={() => showGuestRazorpay()}
                          className="btn Pay ms-1"
                        >
                          Pay RazorPay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {message === "successfully updated" ? (
        <span className="Success" style={{ color: "#03979c" }}>
          {message}
        </span>
      ) : (
        <span className="Success text danger">{message}</span>
      )} */}
              </form>
            ) : (
              <form className="" onSubmit={handleSubmit}>
                <div>
                  <label className="as-lbl">Enter Your Email</label>
                  <input
                    type="email"
                    id="fname1"
                    value={profile.email}
                    onChange={handleChange}
                    className="as-text_set border rounded bg-white"
                  />
                </div>
                <div>
                  <label className="as-lbl">Enter Your Amount</label>
                  <input
                    type="number"
                    id="fname1"
                    name="amount"
                    // value={amount}
                    onChange={handleChange}
                    className="as-text_set border rounded bg-white"
                  />
                  <p style={{ color: "red" }}>{formErrors.amount}</p>
                </div>
                <div>
                  <label className="as-lbl">Enter Your Description</label>
                  <textarea
                    className="form-control m-0 w-100 bg-white   mt-2 mb-3 form-area ct_text-set1"
                    rows="5"
                    name="dec"
                    id="message"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <p style={{ color: "red" }}>{formErrors.dec}</p>
                </div>
                {user.amount.trim() === "" || user.dec.trim() === "" ? (
                  <button type="submit" className=" as-btn_set m-auto me-1">
                    Pay Now
                  </button>
                ) : (
                  <button
                    type="button"
                    className=" as-btn_set m-auto me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalGuest"
                  >
                    Pay Now
                  </button>
                )}
                <div
                  className="modal fade"
                  id="exampleModalGuest"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content border-0">
                      <div
                        className="modal-header border-0"
                        style={{ background: "rgb(3, 151, 156)" }}
                      >
                        <h1
                          className="modal-title fs-5 text-white"
                          id="exampleModalLabel"
                        >
                          GUEST PAYMENT
                        </h1>
                        <button
                          type="button"
                          className="bg-transparent border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="fa-solid fa-xmark fs-3 text-white"></i>
                        </button>
                      </div>
                      <div className="modal-body text-center py-5">
                        {" "}
                        <button
                          type="button"
                          onClick={() => GuestStripe()}
                          className="btn Pay me-1"
                        >
                          Pay Stripe
                        </button>
                        <button
                          type="button"
                          onClick={() => GuestPaypal()}
                          className="btn Pay ms-1"
                        >
                          Pay Paypal
                        </button>
                        <button
                          type="button"
                          onClick={() => showGuestRazorpay()}
                          className="btn Pay ms-1"
                        >
                          Pay RazorPay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {message === "successfully updated" ? (
        <span className="Success" style={{ color: "#03979c" }}>
          {message}
        </span>
      ) : (
        <span className="Success text danger">{message}</span>
      )} */}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestPayment;
