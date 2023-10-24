import React, { useEffect, useState } from "react";

import axios from "axios";
import ExtraCredit from "./ExtraCredit";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "./Loader";

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

const TransactionHistory = () => {
  const [credit, setCredit] = useState([]);
  const [debit, setDebit] = useState([]);
  const [totalCredit, settotalCredit] = useState();
  const [totalDebit, settotalDebit] = useState();
  const [Data1, setData1] = useState([]);
  const [Users, setUsers] = useState([]);
  const [paypal, setPaypal] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("wallet");
    sessionStorage.removeItem("pay_id");

    const getToken = localStorage.getItem("token");
    const tokenID = localStorage.getItem("token");
    console.log("hello+++++++++++", tokenID);
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    }) // .then((res) => res.json())
      .then((response) =>
        response.json(
          setUsers({
            response,
          }),
          console.log(Users)
        )
      )

      .then((json) => {
        // if (json.message === "mail have sent successfully") {
        // 	navigate('/login');
        // }

        setData1(json.data);
        console.log("*******&&&&&&&&&&&&&", json.data);

        // setError(json.error)
      })
      .catch((err) => {
        console.log(err);
      });

    if (getToken == null) {
      navigate("/login");
    }
  }, [navigate]);

  async function showRazorpay() {
    setIsLoading(true);
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    var payload = JSON.stringify({
      amount: amount,
    });

    const data = await fetch(
      `${process.env.REACT_APP_APIURL}/razorpayPayment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
        body: payload,
      }
    ).then((t) => t.json());
    setIsLoading(false);
    console.log(data);
    const options = {
      key: "rzp_test_Xa2mSWNFvEWycp",
      currency: data.order.currency,
      amount: data.amount.toString(),
      order_id: data.order.id,
      name: "Donation",
      callback_url: "/razorpay-is-completed",
      description: "Thank you for nothing. Please give us some money",
      handler: async function (response) {
        console.log(response);
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });

        var config = {
          method: "post",
          url: `${process.env.REACT_APP_APIURL}/razorpay-is-completed`,
          headers: {
            Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log("log");
        await axios(config)
          .then(function (response) {
            console.log(response.data);
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

  useEffect(() => {
    setIsLoading(true);
    const tokenID = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_APIURL}/walletTransactionHistory`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json())
      .then((Response) => {
        setCredit(Response.credit.sort().reverse());
        setDebit(Response.debit.sort().reverse());
        settotalCredit(Response.totalCredit);
        settotalDebit(Response.totalDebit);
        console.log(Response);
        setIsLoading(false);
      });
  }, []);

  const walletRecharge = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_APIURL}/payment`, {
        wallet: amount,
      })
      .then((response) => {
        sessionStorage.setItem("wallet", amount);
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const payWithPaypal = () => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_APIURL}/PaypalPayment`, {
        wallet: paypal,
      })
      .then((response) => {
        sessionStorage.setItem("wallet", paypal);
        console.log(response);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setPaypal({
          response,
        });
        setIsLoading(false);
      })

      .catch((error) => console.log(error));
  };
  console.log(paypal);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="reg_sec">
          <div className="container mt-3">
            <div className="row align-items-baseline">
              <div className="col-lg-3">
                <ul
                  className="nav nav-pills flex-column acunt_dsh"
                  role="tablist"
                >
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
                    <Link
                      className="nav-link"
                      to="/accountsettingsubscriptions"
                    >
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
                      className="nav-link"
                      to="/accountsettingpaymentmethod"
                    >
                      Payment Methods
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="pill"
                      to="/transactionhistory"
                    >
                      Credits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <h5 className="user_tab1 mb-2">
                  Welcome to <span className="user_ach">User</span>
                </h5>
                <p className="d-flex justify-content-center align-items-center fw-bold fs-5">
                  Wallet Balance:&nbsp;&nbsp;
                  <span className="fw-bold fs-4" style={{ color: "#029a9f" }}>
                    ${Data1?.wallet}
                  </span>
                </p>
                <ExtraCredit />
                <div className="payment-gateway justify-content-center">
                  <button
                    type="button"
                    className="btn payment-walllet"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal11"
                  >
                    Wallet with Stripe
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal11"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Add Wallet with Stripe
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body">
                          <input
                            className="w-100 px-1 py-3"
                            placeholder="0"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                          />
                        </div>
                        <div className="modal-footer payment-model-footer ">
                          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                          <button
                            type="button"
                            className="btn border-0 text-white w-100"
                            data-bs-dismiss="modal"
                            onClick={() => walletRecharge()}
                            disabled={isLoading}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn  payment-walllet"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Wallet with PayPal
                  </button>

                  <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Add Wallet with PayPal
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body">
                          <input
                            className="w-100 px-1 py-3"
                            placeholder="0"
                            type="number"
                            value={paypal}
                            onChange={(e) => setPaypal(e.target.value)}
                          />
                        </div>
                        <div className="modal-footer payment-model-footer ">
                          {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                          <button
                            type="button"
                            className="btn  border-0 text-white w-100"
                            onClick={() => payWithPaypal()}
                            data-bs-dismiss="modal"
                            disabled={isLoading}
                          >
                            Proceed
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn payment-walllet"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    Wallet with RazorPay
                  </button>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal3"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header ">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Add Wallet with RazorPay
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>

                      <div className="modal-body">
                        <input
                          className="w-100 px-1 py-3"
                          placeholder="0"
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer payment-model-footer ">
                        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                        <button
                          type="button"
                          className="btn  border-0 text-white w-100"
                          onClick={() => showRazorpay()}
                          data-bs-dismiss="modal"
                          disabled={isLoading}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <table
                  className="table text-white credt-total mb-3"
                  data-bs-spy="scroll"
                >
                  <thead>
                    <tr>
                      <th>Credit History</th>
                      <th className="w-50 text-end">
                        Total: $ <span>{totalCredit}</span>
                      </th>
                    </tr>
                  </thead>
                </table>
                <div
                  style={{
                    overflow: "auto",
                    height: "200px",
                    marginBottom: "6%",
                  }}
                >
                  <table className="table mb-0 table-bordered">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Transactions ID</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {credit &&
                        credit.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{item.datetime}</td>
                              <td>{item.transactionId}</td>
                              <td>{item.pay_type}</td>
                              <td style={{ color: "green", fontWeight: "700" }}>
                                +{item.wallet}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>

                <table className="table text-white credt-total mb-3">
                  <thead>
                    <tr>
                      <th>Debit History</th>
                      <th className="w-50 text-end">
                        Total: $ <span>{totalDebit}</span>
                      </th>
                    </tr>
                  </thead>
                </table>

                <div
                  style={{
                    overflow: "auto",
                    height: "200px",
                    marginBottom: "6%",
                  }}
                >
                  <table className="table mb-0 table-bordered">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Transactions ID</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {debit &&
                        debit.map((items, index) => {
                          return (
                            <tr key={index}>
                              <td>{items.datetime}</td>
                              <td>{items.transactionId}</td>
                              <td>{items.pay_type}</td>
                              <td style={{ color: "red", fontWeight: "700" }}>
                                -{items.wallet}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default TransactionHistory;
