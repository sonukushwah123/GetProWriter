import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const OrderWithoutPayment = () => {
  const [searchParams] = useSearchParams();
  const orderIdParam = searchParams.get("orderId");
  return (
    <div>
      <section className="fp_sec bg-transparent ">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5">
              <form className="fp_form m-0 w-100 h-100">
                {/* <<onSubmit={handleSubmit} */}
                <span className=" p-0 fs-1 fw-bold">
                  Without Payment successfull
                </span>
                <br />
                <Link className="" to={`/dashboard?orderId=${orderIdParam}`}>
                  <button type="submit" className="fp-btn px-5 m-0">
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

            <div className="col-md-5">
              <img
                src="writer/img/Successful-purchase.gif"
                alt="Successful-purchase"
                className="fp-img m-0 w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderWithoutPayment;
