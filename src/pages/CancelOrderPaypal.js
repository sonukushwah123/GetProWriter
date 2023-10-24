import React from "react";
import { Link } from "react-router-dom";

const CancelOrderPaypal = () => {
  return (
    <div>
      <section className="fp_sec bg-transparent ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <form className="fp_form m-0 w-100 h-100">
                {/* <<onSubmit={handleSubmit} */}
                <span className=" p-0 fs-1 fw-bold text-danger">
                  Payment Failed
                </span>
                <p className="fp-p p-0">
                  Your Payment Failed. Please try again later!
                </p>

                <Link className="" to="/viewcart">
                  <button type="submit" className="fp-btn px-5 bg-danger m-0">
                    Try Again!
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

            <div className="col-md-6">
              <img
                src="writer/img/payment-error-info-message-smartphone-customer-cross-marks-failure_106788-2322.webp"
                className="fp-img m-0 w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancelOrderPaypal;
