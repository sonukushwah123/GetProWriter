import React, { useState } from "react";

import axios from "axios";

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

const Message = ({
  id,
  user,
  message,
  orderId,
  classs,
  type,
  name,
  datetime,
}) => {
  // const navigate = useNavigate();
  console.log("datetime", datetime);
  console.log("message", message);
  console.log("type", type);
  console.log("type", type);
  console.log("id", id);
  console.log("orderId", orderId);
  const [pendigAmount, setPendingAmount] = useState();

  const [PendingStatus, setPendingStatus] = useState(true);
  if (type === "link") {
    const tokenID = localStorage.getItem("token");
    fetch(`${process.env.REACT_APP_APIURL}/viewOrder`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then(async (response) => {
        //  setPendingViewOrder(response.data);

        console.log(response.data);
        const productStatus = await response.data?.filter(
          (item, index) => item._id === orderId
        )[0];
        console.log(productStatus);
        if (productStatus.status === "success") {
          setPendingStatus(false);
        } else {
          setPendingStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function pendigAmountRazor(message) {
    console.log(message);
    console.log(orderId);
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var payload = JSON.stringify({
      amount: message,
    });

    const data = await fetch(
      `${process.env.REACT_APP_APIURL}/PendingPaymentRazorpay`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
        body: payload,
      }
    ).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_KiBn8QyRFCYQnw",
      currency: data.order.currency,
      amount: data.amount,
      order_id: data.order.id,
      name: "Order",
      callback_url: "/razorpay-is-completed",
      description: "Thank you for nothing. Please give us some money",
      handler: async function (response) {
        console.log(orderId);
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          orderId: orderId,
        });

        var config = {
          method: "post",
          url: `${process.env.REACT_APP_APIURL}/PendingPaymentRazorpaySuccess`,
          headers: {
            Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };
        console.log(data);

        await axios(config)
          .then(function (response) {
            console.log(response.data);
            window.location.reload(true);
            // navigate("/PurchaseSuccess");
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

  const pendigAmountStripe = async (message, orderId) => {
    console.log("amount", message);
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/PendingPaymentStripe/`,
        {
          totalAmount: message,
          orderId,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("orderId", orderId);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setPendingAmount(response);
        console.log(pendigAmount);
        // if (response.data.data === "order Placed") {
        //   navigate("/PurchaseSuccess");
        // } else {
        //   setOrderErrorMessage(response.data.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pendigAmountPaypal = async (message, orderId) => {
    console.log("amount", message);
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/PendingPaymentPaypal/`,
        {
          totalamount: message,
          orderId,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("totalamount", message);
        sessionStorage.setItem("orderId", orderId);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        // setPendingAmount(response);
        // console.log(pendigAmount);
        // if (response.data.data === "order Placed") {
        //   navigate("/PurchaseSuccess");
        // } else {
        //   setOrderErrorMessage(response.data.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (user && type === "image") {
    return (
      <div className={`messageBox  ${classs}`}>
        <p className="fw-bold mb-2">{`${user}`}</p>
        <img src={`${message}`} className="mb-3 w-100 " alt="chatimg" />{" "}
        <p className="text-end mb-0 position-absolute bottom-0 end-0 w-100 pe-2 ">{`${datetime}`}</p>
      </div>
    );
  } else if (user && type === "pdf") {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => window.open(`${message}`)}
          className="border-0 mb-3 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {user && type === "pdf" ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i className="fa-solid fa-file-pdf fs-3 text-white"></i>
          ) : (
            false
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
        <p className="text-end mb-0 position-absolute bottom-0 end-0 w-100 pe-2">{`${datetime}`}</p>
      </div>
    );
  } else if ((user && type === "docx") || (user && type === "docs")) {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => window.open(`${message}`)}
          className="border-0 mb-3 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {(user && type === "docx") || (user && type === "docs") ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i className="fa-solid fa-file fs-3 text-white"></i>
          ) : (
            false
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
        <p className="text-end mb-0 position-absolute bottom-0 end-0 w-100 pe-2">{`${datetime}`}</p>
      </div>
    );
  } else if (user && type === "msword") {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => window.open(`${message}`)}
          className="border-0 mb-3 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {user && type === "msword" ? (
            // <i class="fa-solid fa-file-pdf "></i>

            <i class="fa-solid fa-file-word  text-white"></i>
          ) : (
            false
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
        <p className="text-end mb-0 position-absolute bottom-0 end-0 w-100 pe-2">{`${datetime}`}</p>
      </div>
    );
  } else if (user && type === "txt") {
    return (
      <div className={`messageBox ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <button
          onClick={() => window.open(`${message}`)}
          className="border-0 mb-0 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {user && type === "txt" ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i class="fa-solid fa-file-lines text-white"></i>
          ) : (
            false
          )}
        </button>
        <span className="ms-3"> {`${name}`}</span>
        <p className="text-end mb-0 position-absolute bottom-0 end-0 w-100 pe-2">{`${datetime}`}</p>
      </div>
    );
  } else if (user && type === "message") {
    return (
      <div className={`messageBox ${classs}`}>
        <p className="fw-bold mb-2">{`${user}`}</p>
        {`${message}`}
        <span className="float-end">{`${datetime}`}</span>
      </div>
    );
  } else if (user && type === "link" && PendingStatus === true) {
    return (
      <div className={`messageBox bg-light ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <div className="py-2 text-center bg-light">
          <h3>Payment</h3>
          <p>make payment</p>
        </div>
        {/* <button
          onClick={() => window.open(`${message}`)}
          className="border-0 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {user && type === "txt" ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i class="fa-solid fa-file-lines text-white"></i>
          ) : (
            false
          )}
        </button> */}
        <p
          className="px-3 text-white py-2 mb-0"
          style={{ background: "#029a99", cursor: "pointer" }}
          data-bs-toggle="modal"
          data-bs-target={"#customize" + id}
        >
          Pay
          <b className="float-end">{`${message}`}</b>
        </p>
        <div
          class="modal fade"
          id={"customize" + id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div
                className="modal-header border-0"
                style={{ background: "rgb(3, 151, 156)" }}
              >
                <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">
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
              <div class="modal-body text-center py-5">
                {" "}
                <button
                  type="button"
                  onClick={() => pendigAmountStripe(message, orderId)}
                  className="btn Pay me-1"
                >
                  Pay Stripe
                </button>
                <button
                  type="button"
                  onClick={() => pendigAmountPaypal(message, orderId)}
                  className="btn Pay ms-1"
                >
                  Pay Paypal
                </button>
                <button
                  type="button"
                  onClick={() => pendigAmountRazor(message)}
                  className="btn Pay ms-1"
                >
                  Pay RazorPay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`messageBox bg-light ${classs}`}>
        {" "}
        <p className="fw-bold mb-2">{`${user}`}</p>
        <div className="py-2 text-center bg-light">
          <img
            src="writer/img/35f323bc5b41dc4269001529e3ff1278.gif"
            alt="messagegif"
            className="w-25"
          />
          <h3>Payment Success</h3>
        </div>
        {/* <button
          onClick={() => window.open(`${message}`)}
          className="border-0 p-2 rounded"
          style={{ background: "#029a99" }}
        >
          {user && type === "txt" ? (
            // <i class="fa-solid fa-file-pdf "></i>
            <i class="fa-solid fa-file-lines text-white"></i>
          ) : (
            false
          )}
        </button> */}
        <p
          className="px-3 text-white py-2 mb-0"
          style={{ background: "#38d368" }}
        >
          Pay
          <b className="float-end">{`${message}`}</b>
        </p>
      </div>
    );
  }
};

export default Message;
