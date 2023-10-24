import React, { useEffect, useState } from "react";

const ExtraCredit = () => {
  const [ExtraCredit, setExtracredit] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getextracredit `, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => setExtracredit(response))
      .catch((err) => console.log(err));
  }, []);
  console.log(ExtraCredit);
  return (
    <div>
      {/* <p className="text-secondary text-center fs-5">
        If you add <strong className="text-dark">$500 </strong>
        then you will get{" "}
        <strong style={{ color: "rgb(2, 154, 159)" }}>$20</strong> in your
        wallet.
      </p> */}
      <p className="text-secondary text-center fs-5">
        {ExtraCredit?.message?.message}
        <strong style={{ color: "rgb(2, 154, 159)" }}>
          ${ExtraCredit?.message?.extraCredit}
        </strong>
      </p>
    </div>
  );
};

export default ExtraCredit;
