import { useState, useEffect } from "react";

const BlogData = () => {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getBlog`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setBlogData(response.data);
        console.log(response.data);
      });
  }, []);
  return blogData;
};

export default BlogData;
