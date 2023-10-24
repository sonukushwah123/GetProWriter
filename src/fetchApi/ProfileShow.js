import React, { useEffect, useState } from "react";

const ProfileShow = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json(console.log(response)))
      .then((json) => {
        setData(json.data);

        console.log(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return Data;
};

export default ProfileShow;
