import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const PaymentMethod = () => {
  const [state, setState] = useState([]);
  const tokenID = localStorage.getItem("token");
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
  return state;
};

export default PaymentMethod;
