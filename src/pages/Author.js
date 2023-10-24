import React, { useEffect, useState } from "react";
import Loader from "./Loader";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const PER_PAGE = 4;
function Author() {
  let urlApi = `${process.env.REACT_APP_APIURL}`;
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  function handleClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  //0, 4, 8, 12

  const offset = currentPage * PER_PAGE;
  console.log("offset", offset);
  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );

  const pageCount = Math.ceil(images.length / PER_PAGE);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_APIURL}/getAuthors`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json.data);
        setImages(json.data.sort().reverse());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="team_sec">
          <div className="container">
            <div className="row">
              <h2 className="team_sec-h2">Meet our Authors</h2>
              <p className="team_sec-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lor
              </p>

              {images.slice(offset, offset + PER_PAGE).map((friend) => (
                <div className="col-md-3" key={friend._id}>
                  <div className="author_box p-4 text-center">
                    <img
                      src={urlApi + "/image/" + friend.image}
                      alt={friend.title}
                      className="author_sec-img m-0"
                    />
                    <h4 className="author_Sec-h2">{friend.title}</h4>
                    <RenderHTML HTML={friend.dec.slice(0, 50)} />

                    <Link to={`/author/${friend.slug}`}>
                      <button type="button" className="author-btn m-0">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              ))}

              <nav aria-label="..." className="mt-5">
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  pageCount={pageCount}
                  onPageChange={handleClick}
                  pageRangeDisplayed={1}
                  containerClassName={"pagination page"}
                  renderOnZeroPageCount={null}
                  previousLinkClassName={"pagination__link"}
                  nextLinkClassName={"pagination__link"}
                  disabledClassName={"pagination__link--disabled "}
                  activeClassName={"pagination__link--active"}
                  // renderOnZeroPageCount={null}
                />
              </nav>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default Author;
