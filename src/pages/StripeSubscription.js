import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const StripeSubscription = () => {
  const tokenID = localStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `${tokenID}`,
  };

  const data = { pay_id: id };
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("id")) {
      navigate("/");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_APIURL}/StripeSubscriptionSuccess`,
          data,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);

          sessionStorage.removeItem("id");
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
              <span className=" p-0 fs-1 fw-bold">
                Subscription Successfully
              </span>
              <p className="fp-p p-0"></p>

              <Link className="" to="/dashboard">
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
              className="fp-img m-0 w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StripeSubscription;
