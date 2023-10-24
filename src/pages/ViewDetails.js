import "../styles/style.css";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loader from "./Loader";

const ViewDetails = () => {
  let urlApi = `${process.env.REACT_APP_APIURL}`;
  const { id } = useParams();
  console.log(id, "id");

  const [posts, SetPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const tokenID = localStorage.getItem("token");
    console.log("id", id);
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_APIURL}/getAuthor/${id}`,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `${tokenID}`,
            },
          }
        );
        SetPosts(data);
        console.log(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [id]);

  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );

  console.log(posts);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="team_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="author_box p-3 text-center"
                  style={{ border: "1px solid #029A99" }}
                >
                  <img
                    src={urlApi + "/image/" + posts?.data?.image}
                    alt="author-img"
                    className="author_sec-img ms-0"
                    style={{ border: "5px solid #029A99" }}
                  />
                  <h4 className="author_Sec-h2 fs-2">{posts?.data?.title}</h4>
                  <br />
                  <p className="author_Sec-p fs-4">
                    Designation:{" "}
                    <span className="text-dark">{posts?.data?.dec}</span>
                  </p>
                  <RenderHTML HTML={posts?.data?.longDec} />{" "}
                </div>
              </div>
              <div className="col-md-8">
                <h2 className="author_Sec-h2 article  text-start ">
                  Articles by {posts?.data?.title}
                </h2>
                <p className="author_Sec-p text-start fs-6 mt-4">
                  Sorry there is no article found for this author....!
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ViewDetails;
