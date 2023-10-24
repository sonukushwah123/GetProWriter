import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const OrderPaypalSuccess = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const tokenID = localStorage.getItem("token");
  const pay_id = sessionStorage.getItem("pay_id");
  const paypal = sessionStorage.getItem("totalamount");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };

  const data = { totalamount: parseInt(paypal), pay_id };
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("totalamount")) {
      navigate("/");
    } else {
      let a = searchParams.get("paymentId");
      let b = searchParams.get("PayerID");
      console.log("a=====", a);
      console.log("b=====", b);
      axios
        .post(`${process.env.REACT_APP_APIURL}/PaypalOrderSuccess`, data, {
          headers: headers,
        })
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("pay_id");
          sessionStorage.removeItem("totalamount");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <section className="fp_sec bg-transparent ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4">
            <form className="fp_form m-0 w-100 h-100">
              {/* <<onSubmit={handleSubmit} */}
              <span className=" p-0 fs-1 fw-bold">Payment Successfully</span>
              <p className="fp-p p-0">Your PayPal Payment Successfull</p>

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
              alt="Completed-pana"
              className="fp-img m-0 w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderPaypalSuccess;
