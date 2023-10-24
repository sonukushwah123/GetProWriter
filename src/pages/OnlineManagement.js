import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import useBlogData from "../fetchApi/BlogData";

import Loader from "./Loader";
let urlApi = `${process.env.REACT_APP_APIURL}`;

console.log(`${process.env.REACT_APP_APIURL}`);

const OnlineManagement = () => {
  const Blogs = useBlogData();

  const { id } = useParams();
  console.log(id, "id");

  const [post, SetPost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const tokenID = localStorage.getItem("token");
    console.log("id", id);
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_APIURL}/readMoreBlog/${id}`,
          {
            headers: {
              "Content-type": "application/json",
              Authorization: `${tokenID}`,
            },
          }
        );
        SetPost(data);
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

  console.log(post);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="blog_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="term_sec-9">
                  <img
                    src={urlApi + "/image/" + post?.data?.image}
                    className="blog_sec-img"
                  />
                  <div className="p-4">
                    <h2 className="blog_sec-h2 p-0">{post?.data?.title} </h2>
                    <div className="row">
                      <span className=" col-md-6 blog-span1  m-0">
                        {post?.data?.name}{" "}
                      </span>
                      <span className=" col-md-6 text-end  blog-span2 m-0">
                        {post?.data?.date}
                      </span>
                    </div>
                    <RenderHTML HTML={post?.data?.dec} />
                  </div>
                </div>
              </div>

              <div className="col-md-4 term_sec-3">
                <div className="block1 mx-0">
                  <form>
                    <p className="block_p">Search</p>
                    <input type="text" name="search" className="block_search" />
                    <button type="submit" className="block_btn">
                      search
                    </button>
                  </form>
                </div>

                <div className="block1 mx-0">
                  <h3 className="block-h3">Recent Posts</h3>
                  {Blogs?.map((friend, i) => {
                    return (
                      <p className="block-p2">
                        <Link to={`/blog/${friend.slug}`} className="block_a">
                          {friend.title}
                        </Link>
                      </p>
                    );
                  })}
                </div>

                <div className="block1 mx-0">
                  <h3 className="block-h3">Archives</h3>

                  {Blogs?.map((friend, i) => {
                    return (
                      <p className="block-p3">
                        <Link to={`/blog/${friend.slug}`} className="block_a">
                          {friend.date}
                        </Link>
                      </p>
                    );
                  })}
                </div>

                <div className="block1 mx-0">
                  <h3 className="block-h3">Categories</h3>
                  <p className="block-p3">Content Writing</p>
                  <p className="block-p3">General</p>
                  <p className="block-p3">Tips</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default OnlineManagement;
