import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

import Loader from "./Loader";
import Chat from "./Chat";

const Dashboard = () => {
  const [viewOrder, setViewOrder] = useState([]);
  const [Cancelled, setCancelled] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  const [allOreder, setAllOreder] = useState(false);

  const chatRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const orderIdParam = searchParams.get("orderId");

  console.log("sdrtyu", orderIdParam);

  useEffect(() => {
    if (orderIdParam && viewOrder?.length > 0) {
      setOrderId(orderIdParam);
      viewOrder?.map((friend) => {
        if (friend?._id === orderIdParam) {
          return setOrderName(
            friend?.products?.map((product) => product.p_title + " ")
          );
        }
        // else {
        //   return setOrderName("");
        // }
      });
      setShowChat(true);
    }
  }, [orderIdParam, viewOrder]);

  useEffect(() => {
    if (showChat) {
      window.scrollTo({
        top: chatRef?.current?.offsetTop,
        behavior: "smooth",
      });
    }
  }, [showChat, chatRef?.current]);

  // const navigate = useNavigate();
  // console.log("qwertyui",orderId)
  //   console.log(searchText);

  const [states, setStates] = useState([]);

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedId(e.target.value);
  };

  const ref = useRef(null);
  const tokenID = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      ref?.current?.click();
    });
    fetch(`${process.env.REACT_APP_APIURL}/viewOrder`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `${tokenID}`,
      },
    })
      .then((res) => res.json(console.log(res)))
      .then((response) => {
        setViewOrder(response.data.sort().reverse());
        setProducts(response.data.products);
        setIsLoading(false);
        setAllOreder(true);

        // const inputElement = React.useRef();
        // return <input ref={inputElement} />;
        // inputElement.click();
        // console.log(inputElement);
        console.log(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tokenID]);

  // const data = { sub_id };
  //   const navigate = useNavigate();

  const subscriptionCancel = (id, mainOrderId, pay_method) => {
    const tokenID = localStorage.getItem("token");
    //  const sub_id = sessionStorage.getItem("sub_id");
    // if (!sessionStorage.getItem("TotalAmount")) {
    //   navigate("/");
    // } else {
    // const data = (id);
    console.log("main", mainOrderId);
    console.log("pay_method", pay_method);
    axios
      .post(
        `${process.env.REACT_APP_APIURL}/CancelStripeSubcription`,
        JSON.stringify({
          sub_id: id,
          mainOrderId: mainOrderId,
          pay_method: pay_method,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenID}`,
          },
        }
      )
      .then((res) => {
        setCancelled(res);
        console.log(res.data);
        console.log(Cancelled);

        if (res.data.message === "your subscription canceled") {
          window.location.reload("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RenderHTML = (props) => (
    <p dangerouslySetInnerHTML={{ __html: props.HTML }}></p>
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="reg_sec">
          <div className="container mt-3">
            <div className="row align-items-baseline">
              <div className="col-lg-3">
                <ul
                  className="nav nav-pills flex-column acunt_dsh"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      data-bs-toggle="pill"
                      to="/dashboard"
                    >
                      Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/viewprofile">
                      Account Setting
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/accountsettingpaymentmethod"
                    >
                      Payment Methods
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/transactionhistory">
                      Credits
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-9">
                <h5 className="user_tab1 mb-2">
                  Welcome to <span className="user_ach">User</span>
                </h5>
                <div className="row">
                  <div className="col-sm-5">
                    <div className="input-group mb-3">
                      <span className="input-group-text user_ser">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        onChange={handleSelectChange}
                        className="form-control"
                        placeholder="Order"
                      />
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <select
                      className="form-select"
                      onChange={handleSelectChange}
                      name="ids"
                      id="ids"
                    >
                      <option onClick={() => setAllOreder(true)}>
                        All Orders
                      </option>

                      <option value="Pending">Order in Process</option>
                      <option value="success">Completed Orders</option>
                      <option value="canceled">Cancelled Orders</option>
                      <option value="Customize">Unpaid Orders</option>
                      <option> Ordered</option>
                      <option value="subscription">Subscriptions</option>
                      <option>RazorPay</option>
                      <option>Stripe</option>
                      <option>Paypal</option>
                      <option>Wallet</option>
                    </select>
                  </div>
                </div>

                <div
                  className="table-responsive  text-nowrap"
                  style={{ height: "200px" }}
                >
                  <table className="table   table-bordered mb-0">
                    <thead
                      className="text-white"
                      style={{ background: "#029a99" }}
                    >
                      <tr>
                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Pay-Method</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Chat</th>
                        <th>Status</th>
                        <th>Sub. Cancel</th>
                        <th>Order Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {viewOrder && selectedId
                        ? viewOrder
                            .filter((value) => {
                              return (
                                value.type.includes(selectedId) ||
                                value.status.includes(selectedId) ||
                                value.pay_method.includes(selectedId) ||
                                String(value.order_id).includes(selectedId)
                                // value.sub_status.includes(selectedId)
                              );
                            })
                            .map((friend, index) => {
                              return (
                                <>
                                  {friend.sub_status === "Active" ? (
                                    <tr key={index} className="viewOrderbody">
                                      <td>{friend.order_id}</td>
                                      <td>{friend.datetime}</td>

                                      <td>{friend.pay_method}</td>
                                      <td>{friend.type}</td>
                                      <td>{friend.totalAmount}</td>
                                      <td
                                        ref={ref}
                                        onClick={() => {
                                          setOrderId(friend._id);
                                          setOrderName(
                                            friend.products.map(
                                              (product) => product.p_title + " "
                                            )
                                          );
                                          setShowChat(true);
                                          setSearchParams({
                                            ...searchParams,
                                            orderId: friend._id,
                                          });
                                        }}
                                        className="viewOrderChat"
                                        style={{ cursor: "pointer" }}
                                      >
                                        Chat
                                      </td>
                                      <td>{friend.status}</td>

                                      <td
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        style={{ cursor: "pointer" }}
                                      >
                                        {friend.sub_status}
                                      </td>

                                      <div
                                        className="modal fade"
                                        id="exampleModal"
                                        tabIndex="-1"
                                        aria-labelledby="exampleModalLabel"
                                        aria-hidden="true"
                                      >
                                        <div className="modal-dialog">
                                          <div className="modal-content border-0">
                                            <div className="">
                                              <button
                                                type="button"
                                                className="btn-close p-3 outline-0"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                              ></button>
                                            </div>
                                            <div className="modal-body text-center">
                                              <h4>
                                                Are You Sure This Subscription
                                                Cancel?
                                              </h4>
                                            </div>

                                            {friend.sub_status === "Active" ? (
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  subscriptionCancel(
                                                    friend.sub_id,
                                                    friend._id,
                                                    friend.pay_method
                                                  )
                                                }
                                                className=" border-0  text-white py-2 fs-4 rounded-0 chat_s_btn"
                                              >
                                                Cancel
                                              </button>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        </div>
                                      </div>

                                      <td>
                                        <button
                                          className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                          type="button"
                                          data-bs-toggle="offcanvas"
                                          data-bs-target={
                                            "#viewdetails" + friend._id
                                          }
                                          aria-controls="offcanvasScrolling"
                                        >
                                          View Details
                                        </button>
                                        <div
                                          className="offcanvas viewOrder text-wrap offcanvas-end"
                                          data-bs-scroll="true"
                                          data-bs-backdrop="false"
                                          tabIndex="-1"
                                          id={"viewdetails" + friend._id}
                                          aria-labelledby="offcanvasScrollingLabel"
                                        >
                                          <div
                                            className="offcanvas-header text-white pe-4"
                                            style={{
                                              background: "rgb(2, 154, 153)",
                                            }}
                                          >
                                            <button
                                              type="button"
                                              className="bg-transparent border-0"
                                              data-bs-dismiss="offcanvas"
                                              aria-label="Close"
                                            >
                                              <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                            </button>

                                            <h5
                                              className="offcanvas-title"
                                              id="offcanvasScrollingLabel"
                                            >
                                              Order Details
                                            </h5>
                                          </div>
                                          <div className="offcanvas-body">
                                            <table className="table table-borderless mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Order Id</td>
                                                  <td>:</td>

                                                  <td>{friend.order_id}</td>
                                                </tr>
                                                <tr>
                                                  <td>Date</td>
                                                  <td>:</td>{" "}
                                                  <td> {friend.datetime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Pay-Method</td>
                                                  <td>:</td>
                                                  <td>{friend.pay_method}</td>
                                                </tr>
                                                <tr>
                                                  <td>Type</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.type}</td>
                                                </tr>

                                                <tr>
                                                  <td>Amount</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.totalAmount}</td>
                                                </tr>
                                                <tr>
                                                  <td>Sub.Cancel</td>
                                                  <td>:</td>
                                                  <td>{friend.sub_status}</td>
                                                </tr>
                                                <tr>
                                                  <td>Status</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.status}</td>
                                                </tr>
                                                {friend.products.map(
                                                  (product, index) => {
                                                    return (
                                                      <>
                                                        <h4>
                                                          Products:{index + 1}
                                                        </h4>
                                                        <tr>
                                                          <td>Title</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {product?.p_title}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Short Title</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {
                                                              product.p_shortTitle
                                                            }
                                                          </td>
                                                        </tr>

                                                        <tr>
                                                          <td>Description</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            <RenderHTML
                                                              HTML={
                                                                product.p_dec
                                                              }
                                                            />
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Price</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {product.p_price}
                                                          </td>
                                                        </tr>
                                                      </>
                                                    );
                                                  }
                                                )}
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ) : (
                                    <tr key={index} className="viewOrderbody">
                                      <td>{friend.order_id}</td>
                                      <td> {friend.datetime}</td>

                                      <td>{friend.pay_method}</td>
                                      <td>{friend.type}</td>
                                      <td>{friend.totalAmount}</td>
                                      <td
                                        ref={ref}
                                        onClick={() => {
                                          setOrderId(friend._id);
                                          setOrderName(
                                            friend.products.map(
                                              (product) => product.p_title + " "
                                            )
                                          );
                                          setShowChat(true);
                                          setSearchParams({
                                            ...searchParams,
                                            orderId: friend._id,
                                          });
                                        }}
                                        className="viewOrderChat"
                                        style={{ cursor: "pointer" }}
                                      >
                                        Chat
                                      </td>
                                      <td>{friend.status}</td>
                                      <td>
                                        {" "}
                                        <Link
                                          className="bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                          role="button"
                                          aria-disabled="true"
                                        >
                                          {friend.sub_status}
                                        </Link>
                                      </td>
                                      {friend.type === "Customize" ? (
                                        <td>
                                          <button
                                            className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target={
                                              "#viewdetails" + friend._id
                                            }
                                            aria-controls="offcanvasScrolling"
                                          >
                                            View Details
                                          </button>
                                          <div
                                            className="offcanvas viewOrder text-wrap offcanvas-end"
                                            data-bs-scroll="true"
                                            data-bs-backdrop="false"
                                            tabIndex="-1"
                                            id={"viewdetails" + friend._id}
                                            aria-labelledby="offcanvasScrollingLabel"
                                          >
                                            <div
                                              className="offcanvas-header text-white pe-4"
                                              style={{
                                                background: "rgb(2, 154, 153)",
                                              }}
                                            >
                                              <button
                                                type="button"
                                                className="bg-transparent border-0"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                              >
                                                <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                              </button>

                                              <h5
                                                className="offcanvas-title"
                                                id="offcanvasScrollingLabel"
                                              >
                                                Order Details
                                              </h5>
                                            </div>
                                            <div className="offcanvas-body">
                                              <table className="table table-borderless mb-0">
                                                <tbody>
                                                  <tr>
                                                    <td>Order Id</td>
                                                    <td>:</td>

                                                    <td>{friend.order_id}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Date</td>
                                                    <td>:</td>{" "}
                                                    <td> {friend.datetime}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Pay-Method</td>
                                                    <td>:</td>
                                                    <td>{friend.pay_method}</td>
                                                  </tr>

                                                  <tr>
                                                    <td>Amount</td>
                                                    <td>:</td>{" "}
                                                    <td>
                                                      {friend.totalAmount}
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>Status</td>
                                                    <td>:</td>{" "}
                                                    <td>{friend.status}</td>
                                                  </tr>
                                                  <h4>Products:</h4>
                                                  <tr>
                                                    <td>Type</td>
                                                    <td>:</td>{" "}
                                                    <td>{friend.type}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Content Type</td>
                                                    <td>:</td>{" "}
                                                    <td>
                                                      {friend.contentType}
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td>Deadline</td>
                                                    <td>:</td>{" "}
                                                    <td>{friend.deadline}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Expert Level</td>
                                                    <td>:</td>{" "}
                                                    <td>
                                                      {friend.expertLevel}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </td>
                                      ) : (
                                        <td>
                                          <button
                                            className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target={
                                              "#viewdetails" + friend._id
                                            }
                                            aria-controls="offcanvasScrolling"
                                          >
                                            View Details
                                          </button>
                                          <div
                                            className="offcanvas viewOrder text-wrap offcanvas-end"
                                            data-bs-scroll="true"
                                            data-bs-backdrop="false"
                                            tabIndex="-1"
                                            id={"viewdetails" + friend._id}
                                            aria-labelledby="offcanvasScrollingLabel"
                                          >
                                            <div
                                              className="offcanvas-header text-white pe-4"
                                              style={{
                                                background: "rgb(2, 154, 153)",
                                              }}
                                            >
                                              <button
                                                type="button"
                                                className="bg-transparent border-0"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                              >
                                                <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                              </button>

                                              <h5
                                                className="offcanvas-title"
                                                id="offcanvasScrollingLabel"
                                              >
                                                Order Details
                                              </h5>
                                            </div>
                                            <div className="offcanvas-body">
                                              <table className="table table-borderless mb-0">
                                                <tbody>
                                                  <tr>
                                                    <td>Order Id</td>
                                                    <td>:</td>

                                                    <td>{friend.order_id}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Date</td>
                                                    <td>:</td>{" "}
                                                    <td> {friend.datetime}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Pay-Method</td>
                                                    <td>:</td>
                                                    <td>{friend.pay_method}</td>
                                                  </tr>
                                                  <tr>
                                                    <td>Type</td>
                                                    <td>:</td>{" "}
                                                    <td>{friend.type}</td>
                                                  </tr>

                                                  <tr>
                                                    <td>Amount</td>
                                                    <td>:</td>{" "}
                                                    <td>
                                                      {friend.totalAmount}
                                                    </td>
                                                  </tr>

                                                  <tr>
                                                    <td>Status</td>
                                                    <td>:</td>{" "}
                                                    <td>{friend.status}</td>
                                                  </tr>
                                                  {friend.products.map(
                                                    (product, index) => {
                                                      return (
                                                        <>
                                                          <h4>
                                                            Products:{index + 1}
                                                          </h4>
                                                          <tr>
                                                            <td>Title</td>
                                                            <td>:</td>{" "}
                                                            <td>
                                                              {product?.p_title}
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>Short Title</td>
                                                            <td>:</td>{" "}
                                                            <td>
                                                              {
                                                                product.p_shortTitle
                                                              }
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>Quantity</td>
                                                            <td>:</td>{" "}
                                                            <td>
                                                              {
                                                                product.p_quantity
                                                              }
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>Description</td>
                                                            <td>:</td>{" "}
                                                            <td>
                                                              <RenderHTML
                                                                HTML={
                                                                  product.p_dec
                                                                }
                                                              />
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>Price</td>
                                                            <td>:</td>{" "}
                                                            <td>
                                                              {product.p_price}
                                                            </td>
                                                          </tr>
                                                        </>
                                                      );
                                                    }
                                                  )}
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                </>
                              );
                            })
                        : viewOrder.map((friend, index) => {
                            return (
                              <>
                                {friend.sub_status === "Active" ? (
                                  <tr key={index} className="viewOrderbody">
                                    <td>{friend.order_id}</td>
                                    <td>{friend.datetime}</td>

                                    {friend?.products.map((product) => {
                                      console.log("aksdjfh", product);
                                      return (
                                        <>
                                          {" "}
                                          <td cla>{product?.p_title}</td>
                                          <br />
                                        </>
                                      );
                                    })}

                                    <td>{friend.pay_method}</td>
                                    <td>{friend.type}</td>
                                    <td>{friend.totalAmount}</td>
                                    <td
                                      ref={ref}
                                      onClick={() => {
                                        setOrderId(friend._id);
                                        setOrderName(
                                          friend.products.map(
                                            (product) => product.p_title + " "
                                          )
                                        );
                                        setShowChat(true);
                                        setSearchParams({
                                          ...searchParams,
                                          orderId: friend._id,
                                        });
                                      }}
                                      className="viewOrderChat"
                                      style={{ cursor: "pointer" }}
                                    >
                                      Chat
                                    </td>
                                    <td>{friend.status}</td>

                                    <td
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                      style={{ cursor: "pointer" }}
                                    >
                                      {friend.sub_status}
                                    </td>

                                    <div
                                      className="modal fade"
                                      id="exampleModal"
                                      tabIndex="-1"
                                      aria-labelledby="exampleModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content border-0">
                                          <div className="">
                                            <button
                                              type="button"
                                              className="btn-close p-3 outline-0"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div className="modal-body text-center">
                                            <h4>
                                              Are You Sure This Subscription
                                              Cancel?
                                            </h4>
                                          </div>

                                          {friend.sub_status === "Active" ? (
                                            <button
                                              type="button"
                                              onClick={() =>
                                                subscriptionCancel(
                                                  friend.sub_id,
                                                  friend._id,
                                                  friend.pay_method
                                                )
                                              }
                                              className=" border-0  text-white py-2 fs-4 rounded-0 chat_s_btn"
                                            >
                                              Cancel
                                            </button>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    </div>

                                    <td>
                                      <button
                                        className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                        type="button"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target={
                                          "#viewdetails" + friend._id
                                        }
                                        aria-controls="offcanvasScrolling"
                                      >
                                        View Details
                                      </button>
                                      <div
                                        className="offcanvas viewOrder text-wrap offcanvas-end"
                                        data-bs-scroll="true"
                                        data-bs-backdrop="false"
                                        tabIndex="-1"
                                        id={"viewdetails" + friend._id}
                                        aria-labelledby="offcanvasScrollingLabel"
                                      >
                                        <div
                                          className="offcanvas-header text-white pe-4"
                                          style={{
                                            background: "rgb(2, 154, 153)",
                                          }}
                                        >
                                          <button
                                            type="button"
                                            className="bg-transparent border-0"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                          >
                                            <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                          </button>

                                          <h5
                                            className="offcanvas-title"
                                            id="offcanvasScrollingLabel"
                                          >
                                            Order Details
                                          </h5>
                                        </div>
                                        <div className="offcanvas-body">
                                          <table className="table table-borderless mb-0">
                                            <tbody>
                                              <tr>
                                                <td>Order Id</td>
                                                <td>:</td>

                                                <td>{friend.order_id}</td>
                                              </tr>
                                              <tr>
                                                <td>Date</td>
                                                <td>:</td>{" "}
                                                <td> {friend.datetime}</td>
                                              </tr>
                                              <tr>
                                                <td>Pay-Method</td>
                                                <td>:</td>
                                                <td>{friend.pay_method}</td>
                                              </tr>
                                              <tr>
                                                <td>Type</td>
                                                <td>:</td>{" "}
                                                <td>{friend.type}</td>
                                              </tr>

                                              <tr>
                                                <td>Amount</td>
                                                <td>:</td>{" "}
                                                <td>{friend.totalAmount}</td>
                                              </tr>
                                              <tr>
                                                <td>Sub.Cancel</td>
                                                <td>:</td>
                                                <td>{friend.sub_status}</td>
                                              </tr>
                                              <tr>
                                                <td>Status</td>
                                                <td>:</td>{" "}
                                                <td>{friend.status}</td>
                                              </tr>
                                              {friend.products.map(
                                                (product, index) => {
                                                  return (
                                                    <>
                                                      <h4>
                                                        Products:{index + 1}
                                                      </h4>
                                                      <tr>
                                                        <td>Title</td>
                                                        <td>:</td>{" "}
                                                        <td>
                                                          {product?.p_title}
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>Short Title</td>
                                                        <td>:</td>{" "}
                                                        <td>
                                                          {product.p_shortTitle}
                                                        </td>
                                                      </tr>

                                                      <tr>
                                                        <td>Description</td>
                                                        <td>:</td>{" "}
                                                        <td>
                                                          <RenderHTML
                                                            HTML={product.p_dec}
                                                          />
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td>Price</td>
                                                        <td>:</td>{" "}
                                                        <td>
                                                          {product.p_price}
                                                        </td>
                                                      </tr>
                                                    </>
                                                  );
                                                }
                                              )}
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                ) : (
                                  <tr key={index} className="viewOrderbody">
                                    <td>{friend.order_id}</td>
                                    <td> {friend.datetime}</td>

                                    {friend?.products.map((product) => {
                                      console.log("aksdjfh", product);
                                      return (
                                        <>
                                          {" "}
                                          <td cla>{product?.p_title}</td>
                                          <br />
                                        </>
                                      );
                                    })}

                                    <td>{friend.pay_method}</td>
                                    <td>{friend.type}</td>
                                    <td>{friend.totalAmount}</td>
                                    <td
                                      ref={ref}
                                      onClick={() => {
                                        setOrderId(friend._id);
                                        setOrderName(
                                          friend.products.map(
                                            (product) => product.p_title + " "
                                          )
                                        );
                                        setShowChat(true);
                                        setSearchParams({
                                          ...searchParams,
                                          orderId: friend._id,
                                        });
                                      }}
                                      className="viewOrderChat"
                                      style={{ cursor: "pointer" }}
                                    >
                                      Chat
                                    </td>
                                    <td>{friend.status}</td>
                                    <td>
                                      {" "}
                                      <Link
                                        className="bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                        role="button"
                                        aria-disabled="true"
                                      >
                                        {friend.sub_status}
                                      </Link>
                                    </td>
                                    {friend.type === "Customize" ? (
                                      <td>
                                        <button
                                          className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                          type="button"
                                          data-bs-toggle="offcanvas"
                                          data-bs-target={
                                            "#viewdetails" + friend._id
                                          }
                                          aria-controls="offcanvasScrolling"
                                        >
                                          View Details
                                        </button>
                                        <div
                                          className="offcanvas viewOrder text-wrap offcanvas-end"
                                          data-bs-scroll="true"
                                          data-bs-backdrop="false"
                                          tabIndex="-1"
                                          id={"viewdetails" + friend._id}
                                          aria-labelledby="offcanvasScrollingLabel"
                                        >
                                          <div
                                            className="offcanvas-header text-white pe-4"
                                            style={{
                                              background: "rgb(2, 154, 153)",
                                            }}
                                          >
                                            <button
                                              type="button"
                                              className="bg-transparent border-0"
                                              data-bs-dismiss="offcanvas"
                                              aria-label="Close"
                                            >
                                              <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                            </button>

                                            <h5
                                              className="offcanvas-title"
                                              id="offcanvasScrollingLabel"
                                            >
                                              Order Details
                                            </h5>
                                          </div>
                                          <div className="offcanvas-body">
                                            <table className="table table-borderless mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Order Id</td>
                                                  <td>:</td>

                                                  <td>{friend.order_id}</td>
                                                </tr>
                                                <tr>
                                                  <td>Date</td>
                                                  <td>:</td>{" "}
                                                  <td> {friend.datetime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Pay-Method</td>
                                                  <td>:</td>
                                                  <td>{friend.pay_method}</td>
                                                </tr>

                                                <tr>
                                                  <td>Amount</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.totalAmount}</td>
                                                </tr>

                                                <tr>
                                                  <td>Status</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.status}</td>
                                                </tr>
                                                <h4>Products:</h4>
                                                <tr>
                                                  <td>Type</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.type}</td>
                                                </tr>
                                                <tr>
                                                  <td>Content Type</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.contentType}</td>
                                                </tr>
                                                <tr>
                                                  <td>Deadline</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.deadline}</td>
                                                </tr>
                                                <tr>
                                                  <td>Expert Level</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.expertLevel}</td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    ) : (
                                      <td>
                                        <button
                                          className="btn bg-transparent btn text-dark fw-normal p-0 m-0 fs-6 border-0 "
                                          type="button"
                                          data-bs-toggle="offcanvas"
                                          data-bs-target={
                                            "#viewdetails" + friend._id
                                          }
                                          aria-controls="offcanvasScrolling"
                                        >
                                          View Details
                                        </button>
                                        <div
                                          className="offcanvas viewOrder text-wrap offcanvas-end"
                                          data-bs-scroll="true"
                                          data-bs-backdrop="false"
                                          tabIndex="-1"
                                          id={"viewdetails" + friend._id}
                                          aria-labelledby="offcanvasScrollingLabel"
                                        >
                                          <div
                                            className="offcanvas-header text-white pe-4"
                                            style={{
                                              background: "rgb(2, 154, 153)",
                                            }}
                                          >
                                            <button
                                              type="button"
                                              className="bg-transparent border-0"
                                              data-bs-dismiss="offcanvas"
                                              aria-label="Close"
                                            >
                                              <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                            </button>

                                            <h5
                                              className="offcanvas-title"
                                              id="offcanvasScrollingLabel"
                                            >
                                              Order Details
                                            </h5>
                                          </div>
                                          <div className="offcanvas-body">
                                            <table className="table table-borderless mb-0">
                                              <tbody>
                                                <tr>
                                                  <td>Order Id</td>
                                                  <td>:</td>

                                                  <td>{friend.order_id}</td>
                                                </tr>
                                                <tr>
                                                  <td>Date</td>
                                                  <td>:</td>{" "}
                                                  <td> {friend.datetime}</td>
                                                </tr>
                                                <tr>
                                                  <td>Pay-Method</td>
                                                  <td>:</td>
                                                  <td>{friend.pay_method}</td>
                                                </tr>
                                                <tr>
                                                  <td>Type</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.type}</td>
                                                </tr>

                                                <tr>
                                                  <td>Amount</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.totalAmount}</td>
                                                </tr>

                                                <tr>
                                                  <td>Status</td>
                                                  <td>:</td>{" "}
                                                  <td>{friend.status}</td>
                                                </tr>
                                                {friend.products.map(
                                                  (product, index) => {
                                                    return (
                                                      <>
                                                        <h4>
                                                          Products:{index + 1}
                                                        </h4>
                                                        <tr>
                                                          <td>Title</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {product?.p_title}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Short Title</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {
                                                              product.p_shortTitle
                                                            }
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Quantity</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {product.p_quantity}
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Description</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            <RenderHTML
                                                              HTML={
                                                                product.p_dec
                                                              }
                                                            />
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td>Price</td>
                                                          <td>:</td>{" "}
                                                          <td>
                                                            {product.p_price}
                                                          </td>
                                                        </tr>
                                                      </>
                                                    );
                                                  }
                                                )}
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                      </td>
                                    )}
                                  </tr>
                                )}
                              </>
                            );
                          })}
                    </tbody>
                  </table>
                </div>

                <div ref={chatRef}>
                  {showChat && <Chat orderId={orderId} orderName={orderName} />}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
