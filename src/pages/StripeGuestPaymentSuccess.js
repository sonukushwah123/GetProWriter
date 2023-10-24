import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StripeGuestPaymentSuccess = () => {
  const tokenID = localStorage.getItem("token");
  const pay_id = sessionStorage.getItem("pay_id");
  const email = sessionStorage.getItem("email");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };
  //wallet: parseInt(amount),
  console.log("QWERGWEGRG", email);
  const data = { pay_id, email };
  // const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .post(
          `${process.env.REACT_APP_APIURL}/stripeGuestPaymentSuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);
          console.log("weewq", res.data.data);

          sessionStorage.removeItem("pay_id");
          // sessionStorage.removeItem("wallet");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // if(!sessionStorage.getItem("wallet"))
    []
  );

  return (
    <section className="fp_sec bg-transparent ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <form className="fp_form m-0 w-100 h-100">
              <span className=" p-0 fs-1 fw-bold">
                GuestPayment Successfully
              </span>

              <p className="fp-p p-0">
                Your Stripe GuestPayment is Successfull{" "}
              </p>

              <Link className="" to="/transactionhistory">
                <button type="submit" className="fp-btn px-5  m-0">
                  Go Back
                </button>
              </Link>

              <br />
              {/* {Object.keys(formErrors, message).length === 0 && isSubmit ? (
                  <span className="Success">{message}</span>
                ) : (
                  ""
                )} */}
            </form>
          </div>

          <div className="col-md-4">
            <img
              src="writer/img/Completed-pana.png"
              alt="Complete-pana"
              className="fp-img m-0 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripeGuestPaymentSuccess;
