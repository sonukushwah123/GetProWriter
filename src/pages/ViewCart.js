import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useRazorpay from "react-razorpay";

import Loader from "./Loader";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const ViewCart = () => {
  // const [num, setNum] = useState(0);
  const Razorpay = useRazorpay();

  // const [nums, setNums] = useState(0);
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [couponApplied, setCouponApplied] = useState({});
  const [isAddLoading, setIsAddLoading] = useState(false);
  const [couponText, setCouponText] = useState("");
  const [currentWalletData, setCurrentWalletData] = useState({});
  const [orderErrorMessage, setOrderErrorMessage] = useState("");
  const [amount, setAmount] = useState({});
  const [paypal, setPaypal] = useState("");
  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(false);
  const [price, setPrice] = useState({});
  const [Loading, setLoading] = useState(false);
  const [couponCheck, setCouponCheck] = useState();

  async function showRazorpay(amount) {
    const tokenID = localStorage.getItem("token");

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";

    var payload = JSON.stringify({
      amount: amount,
    });

    const data = await fetch(`${process.env.REACT_APP_APIURL}/orderRazorpay`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
      body: payload,
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: "rzp_test_Xa2mSWNFvEWycp",
      currency: data.order.currency,
      amount: data.amount.toString(),
      order_id: data.order.id,
      name: "Order",
      callback_url: "/razorpay-is-completed",
      description: "Thank you for nothing. Please give us some money",
      handler: async function (response) {
        var data = JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          couponAmount: couponAmount,
          couponName: couponName,
        });

        var config = {
          method: "post",
          url: `${process.env.REACT_APP_APIURL}/orderRazorpaySuccess`,
          headers: {
            Authorization: tokenID,
            "Content-Type": "application/json",
          },
          data: data,
        };

        await axios(config)
          .then(function (response) {
            console.log(response.data);
            // window.location.reload(true);
            navigate("/razorpaysuccess");
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log(response);
        // alert("Transaction successful");
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    viewCart();
    // getCoupons();
  }, []);
  useEffect(() => {
    sessionStorage.removeItem("wallet");
    sessionStorage.removeItem("pay_id");
    // add entity - POST
    // e.preventDefault();
    // creates entity
    const tokenID = localStorage.getItem("token");
    console.log("hello", tokenID);
    fetch(`${process.env.REACT_APP_APIURL}/viewProfile`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
        Authorization: `${tokenID}`,
      },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json.data);
        setCurrentWalletData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_APIURL}/getServices`, {
      method: "GET",
      mode: "cors",

      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((json) => {
        console.log(json);
        // setCurrentWalletData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewCart = async () => {
    setLoading(true);
    const tokenID = localStorage.getItem("token");
    if (!tokenID) {
      setLoading(false);
      console.log("logout");
      let getAllProduct = JSON.parse(localStorage.getItem("product"));
      if (getAllProduct === null) {
        getAllProduct = [];
      }
      setCartItems(getAllProduct);
      setLogout(true);
      let totalPrice = 0;
      for (let i = 0; i < getAllProduct.length; i++) {
        totalPrice += getAllProduct[i].price * getAllProduct[i].quantity;
        // totalItems += getAllProduct[i].quantity;
      }
      console.log(totalPrice);
      setPrice(totalPrice);
      console.log(price);
      // for (let i = 0; i < getAllProduct.length; i++) {
      //   console.log(getAllProduct[i].title);
      //   //  arr.push(getAllProduct[i]);
      // }
      // if (Object.keys(getAllProduct).length === 0) {
      //   console.log(cartItems);
      //   // fetchData()
      // }
    } else {
      console.log("login");
      setLogin(true);
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${tokenID}`,
      };
      await axios
        .get(`${process.env.REACT_APP_APIURL}/viewCart`, {
          headers: headers,
        })
        .then((response) => {
          console.log("cart items ---------------", response);
          // this.setState({ ...this.state, cartItems: response.data });
          setCartItems(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const addTocarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");

    console.log(cartItems);
    console.log(id);
    console.log(
      cartItems.message?.filter((item, index) => item.productId._id === id)
    );

    let quantity = 1;
    if (cartItems.message.length > 0) {
      quantity = cartItems.message?.filter(
        (item, index) => item.productId._id === id
      )[0]
        ? cartItems.message?.filter(
            (item, index) => item.productId._id === id
          )[0].quantity + 1
        : 1;
    } else {
      quantity = 1;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    const data = { quantity: quantity };
    // setIsAddLoading(true);
    await axios
      .post(`${process.env.REACT_APP_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })

      .then((response) => {
        console.log("qwertyuioiuyfd", response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsAddLoading(false));
  };

  const deleteFromcarthandler = async (id) => {
    const tokenID = localStorage.getItem("token");
    console.log(cartItems);
    console.log(id);
    console.log(
      cartItems.message?.filter((item, index) => item.productId._id === id)
    );

    let quantity = 1;
    if (cartItems.message.length > 0) {
      quantity =
        cartItems.message?.filter((item, index) => item.productId._id === id)[0]
          .quantity > 1
          ? cartItems.message?.filter(
              (item, index) => item.productId._id === id
            )[0].quantity - 1
          : 0;
    } else {
      quantity = 1;
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    const data = { quantity: quantity };
    // setIsAddLoading(true);
    await axios
      .post(`${process.env.REACT_APP_APIURL}/addCart/${id}`, data, {
        headers: headers,
      })
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      });
    // .finally(() => setIsAddLoading(false));
  };

  const deleteCartItem = async (id) => {
    const tokenID = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    setIsAddLoading(true);
    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/deleteCart/${id}`,
        {},
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data.message);
        viewCart();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsAddLoading(false));
  };

  const checkCoupon = async () => {
    await axios
      .post(`${process.env.REACT_APP_APIURL}/getCoupon`, {
        applyCouponName: couponText,
      })
      .then((response) => {
        console.log("coupons ++++++++++++++++++", response.data.message);

        setCouponCheck(response.data.message);
        if (response.data.message.status !== "Deactive") {
          setCoupons(response.data);
          setCouponApplied(response.data);
        }

        // if (response.message) {
        //   // localStorage.setItem("token", json.token);
        //   // setIsLoggedin(true);
        // }
        console.log("----", coupons.message);
        console.log("-----", couponApplied.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const walletUpdateHandler = async (newTotal) => {
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    const totalAmount = newTotal;
    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";

    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/useWallet/`,
        {
          totalAmount,
          couponAmount,
          couponName,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);

        if (response.data.data === "order Placed") {
          navigate(
            `/walletpaymentsuccess?orderId=${response?.data?.message?._id}`
          );
        } else {
          setOrderErrorMessage(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const payWithStrip = (amount) => {
    axios
      .post(`${process.env.REACT_APP_APIURL}/orderStripe`, {
        TotalAmount: amount,
      })
      .then((response) => {
        sessionStorage.setItem("TotalAmount", amount);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        setAmount({
          response,
        });
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  console.log(amount);

  const payWithPaypal = (paypal) => {
    axios
      .post(`${process.env.REACT_APP_APIURL}/orderPaypal`, {
        totalamount: paypal,
      })
      .then((response) => {
        sessionStorage.setItem("totalamount", paypal);
        sessionStorage.setItem("pay_id", response.data.id);
        window.open(response.data.url, "_self");
        console.log(response.data.url);
        setPaypal({
          response,
        });
      })

      .catch((error) => console.log(error));
  };
  console.log(paypal);
  const Alldeletelogoutcarthandler = (id) => {
    // let getAllProduct = JSON.parse(localStorage.getItem("product"));
    // const Indexobj = getAllProduct.findIndex(
    //   (obj) => obj._id === id);
    // data.splice(getAllProduct, 1);
    // return getAllProduct;
    // console.log(Indexobj);
  };

  // let getAllProduct = JSON.parse(localStorage.getItem("product"));
  // const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
  // //   findOneProduct[0].quantity
  // console.log(Indexobj);
  // getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity - 1;
  // localStorage.setItem("product", JSON.stringify(getAllProduct));
  // let getAllProduct2 = JSON.parse(localStorage.getItem("product"));
  // for (let i = 0; i < getAllProduct2.length; i++) {
  //   const quantity = getAllProduct[i].quantity;
  //   if (quantity === 0) {
  //     const filterProduct = getAllProduct2.filter(
  //       (item) => item.quantity !== 0
  //     );
  //     viewCart();
  //     localStorage.setItem("product", JSON.stringify(filterProduct));
  //     console.log(getAllProduct2);
  //     console.log(filterProduct);
  //   }
  //   viewCart();
  // }

  const deletelogoutcarthandler = (id) => {
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
    //   findOneProduct[0].quantity
    console.log(Indexobj);
    getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity - 1;

    localStorage.setItem("product", JSON.stringify(getAllProduct));

    let getAllProduct2 = JSON.parse(localStorage.getItem("product"));
    for (let i = 0; i < getAllProduct2.length; i++) {
      const quantity = getAllProduct[i].quantity;
      if (quantity === 0) {
        const filterProduct = getAllProduct2.filter(
          (item) => item.quantity !== 0
        );
        viewCart();
        localStorage.setItem("product", JSON.stringify(filterProduct));
        console.log(getAllProduct2);
        console.log(filterProduct);
      }
      viewCart();
    }
  };

  const addTologoutcarthandler = (id) => {
    let getAllProduct = JSON.parse(localStorage.getItem("product"));
    const Indexobj = getAllProduct.findIndex((obj) => obj._id === id);
    //   findOneProduct[0].quantity
    console.log(Indexobj);
    getAllProduct[Indexobj].quantity = getAllProduct[Indexobj].quantity + 1;

    localStorage.setItem("product", JSON.stringify(getAllProduct));
    viewCart();
  };

  const orderwithoutPayment = async (newTotal) => {
    setLoading(true);
    const tokenID = localStorage.getItem("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    const totalAmount = newTotal;
    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";
    await axios
      .post(
        `${process.env.REACT_APP_APIURL}/withoutPaymentOrder/`,
        {
          totalAmount,
          couponAmount,
          couponName,
        },

        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.data === "order Placed") {
          navigate(
            `/orderwithoutpayment?orderId=${response?.data?.message?._id}`
          );
        }

        setLoading(false);
        //else {
        //   setOrderErrorMessage(response.data.data);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [savePayment, setSavePayment] = useState([]);

  useEffect(() => {
    const tokenID = localStorage.getItem("token");
    console.log(tokenID);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };
    axios
      .get(`${process.env.REACT_APP_APIURL}/fetchPaymentMethod`, {
        headers: headers,
      })
      .then((res) => {
        setSavePayment(res.data.message);
        console.log(res.data.message);
      });
  }, []);

  const savePayments = async (id) => {
    console.log(id);
    const tokenID = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${tokenID}`,
    };

    const savePaymentId = id;

    console.log(savePaymentId);

    axios
      .post(
        `${process.env.REACT_APP_APIURL}/useSavePaymentMethod`,
        {
          id: savePaymentId,
        },
        {
          headers: headers,
        }
      )
      .then((res) => {
        // setSavePayment(res.data.message);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function savePaymentRazorpay(amount, id) {
    console.log("iiii", id);
    console.log(savePayment);
    const filterData = savePayment?.filter((cards) => cards._id === id);
    console.log(filterData);
    const tokenID = localStorage.getItem("token");

    var razorpay = new Razorpay({
      key: "rzp_test_Xa2mSWNFvEWycp",
    });

    // const res = await loadScript(
    //   "https://checkout.razorpay.com/v1/checkout.js"
    // );

    // if (!res) {
    //   alert("Razorpay SDK failed to load. Are you online?");
    //   return;
    // }

    const couponAmount = couponApplied?.message
      ? couponApplied?.message?.couponType === "Flat"
        ? couponApplied.message.offAmount
        : (cartItems.totalPrice * couponApplied.message.offAmount) / 100
      : 0;
    const couponName = couponApplied?.message
      ? couponApplied.message.couponName
      : "";

    var payload = JSON.stringify({
      amount: amount,
    });

    const data = await fetch(
      `${process.env.REACT_APP_APIURL}/useSaveRazorpayPayment`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `${tokenID}`,
        },
        body: payload,
      }
    ).then((t) => t.json());
    console.log(data);

    const options = {
      amount: `${data.amount * 100}`,
      currency: "INR",
      email: "kushwa378@gmail.com",
      contact: "8949352677",
      notes: {
        address: "jjjjjjjjjjj",
      },

      order_id: data.order.id,
      method: "card",
      card: {
        number: `${filterData[0].cardNumber}`,
        name: `${filterData[0].accountHolder}`,
        expiry_month: filterData[0].mm,
        expiry_year: filterData[0].yy,
        cvv: filterData[0].cvv,
      },
    };
    // console.log(new window.Razorpay(options));
    // const paymentObject = new window.Razorpay(options);
    // paymentObject.open();

    // console.log("Razorpay", new Razorpay());
    // console.log("abc", razorpay.createPayment(options));
    // await setRzrerrorshow(razorpay);
    // console.log("alkkkkkkkk", rzrerrorshow.rzrpayInstannce._payment);

    razorpay.rzrpayInstannce.createPayment(options);
    razorpay.on("payment.success", function (res) {
      // swal("Success!", "Your payment is success", "success");

      var data = JSON.stringify({
        razorpay_payment_id: res.razorpay_payment_id,
        razorpay_order_id: res.razorpay_order_id,
        razorpay_signature: res.razorpay_signature,
      });
      console.log("sdfgk", data);

      var config = {
        method: "post",
        url: `${process.env.REACT_APP_APIURL}/orderRazorpaySuccess`,
        headers: {
          Authorization: tokenID,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          // window.location.reload(true);
          navigate(
            `/savecardrazorpaypaymentsuccess?orderId=${response?.data?.message?._id}`
          );
        })
        .catch(function (error) {
          console.log(error);
        });

      // alert("Transaction successful");
    });

    // if (razorpay.rzrpayInstannce._payment === null) {
    //   navigate("/failed");
    // }
    console.log("razorpay", razorpay);
    console.log("options", options);
  }

  const proceedlogoutCheckout = () => {
    console.log("kjsssssssssss");
    localStorage.setItem("false", "hiii");
    if (localStorage.getItem("false")) {
      navigate("/login");
    }
  };

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <>
            {login && (
              <div className="Cart">
                <div className="container">
                  <div className="out-cart">
                    <div className="inner-cart table-responsive  ">
                      <table className="table bg-transparent table-borderless border-0 mb-3">
                        <tbody>
                          <tr className="border-0">
                            <th></th>
                            <th>Product</th>

                            <th className="text-center p-0">Price</th>
                            <th className="text-center p-0">Quantity</th>
                            <th className="text-center p-0">Total</th>
                          </tr>
                        </tbody>
                        <tbody>
                          {cartItems.message?.map((item, index) => (
                            <tr
                              style={{ position: "relative" }}
                              className="second-tr"
                              key={item._id}
                            >
                              {isAddLoading === true && (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black",
                                    opacity: 0.4,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 999,
                                  }}
                                ></div>
                              )}
                              <th>
                                <i
                                  onClick={() =>
                                    deleteCartItem(item.productId._id)
                                  }
                                  aria-hidden="true"
                                  className="fas fa-times"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </th>
                              <th>{item.productId.title}</th>
                              <th className="p-0 text-center">
                                <span>
                                  <span>$</span>
                                  {item.productId.price}
                                </span>
                              </th>
                              <th className="p-0 text-center">
                                <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="minus"
                                    onClick={() => {
                                      deleteFromcarthandler(item.productId._id);
                                    }}
                                  >
                                    -
                                  </span>
                                  <h3> {item.quantity}</h3>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="plus"
                                    onClick={() => {
                                      addTocarthandler(item.productId._id);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </th>
                              <th className="p-0 text-center">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className>$</span>
                                    {item.quantity * item.productId.price}
                                  </bdi>
                                </span>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="coupon-wrap row">
                      <div className="coupon-inner col-md-6">
                        <div className="coupon">
                          <input
                            type="text"
                            value={couponText}
                            onChange={(e) => setCouponText(e.target.value)}
                            className="bg-transparent border-0"
                            placeholder="Coupon Code"
                          />
                          <button
                            type="button"
                            className="btn Coupons btn-primary mb-0"
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            onClick={() => checkCoupon()}
                          >
                            Apply Coupon
                          </button>
                        </div>
                        <div className=" text-danger">
                          {coupons.message === null && "!'Invalid Coupon'"}
                        </div>

                        <Link to="/Services">
                          <i
                            aria-hidden="true"
                            className="fas fa-chevron-left"
                          />
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-collaterals col-md-6">
                        <div className="cart_totals ">
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      {cartItems.totalPrice}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                              {couponApplied?.message?.offAmount ? (
                                <tr className="cart-subtotal">
                                  <th>Coupon Discount</th>
                                  <td>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        {couponApplied.message.couponType ===
                                        "Flat"
                                          ? "Flat "
                                          : `(${couponApplied.message.offAmount}%) `}
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {couponApplied.message.couponType ===
                                        "Flat"
                                          ? couponApplied.message.offAmount
                                          : (cartItems.totalPrice *
                                              couponApplied.message.offAmount) /
                                            100}
                                      </bdi>
                                    </span>
                                  </td>
                                </tr>
                              ) : null}
                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {couponApplied?.message?.offAmount
                                          ? couponApplied.message.couponType ===
                                            "Flat"
                                            ? cartItems.totalPrice -
                                              couponApplied.message.offAmount
                                            : cartItems.totalPrice -
                                              (cartItems.totalPrice *
                                                couponApplied.message
                                                  .offAmount) /
                                                100
                                          : cartItems.totalPrice}
                                      </bdi>
                                    </span>
                                  </strong>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wc-proceed-to-checkout   eael-cart-update-btn">
                            <button
                              className="checkout-button button alt wc-forward"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasScrolling"
                              aria-controls="offcanvasScrolling"
                            >
                              Proceed to Checkout
                            </button>{" "}
                          </div>

                          <div
                            className="offcanvas offcanvas-start"
                            data-bs-scroll="true"
                            data-bs-backdrop="false"
                            tabIndex="-1"
                            id="offcanvasScrolling"
                            aria-labelledby="offcanvasScrollingLabel"
                          >
                            <div
                              className="offcanvas-header text-white"
                              style={{ background: "rgb(2, 154, 153)" }}
                            >
                              <h5
                                className="offcanvas-title"
                                id="offcanvasScrollingLabel"
                              >
                                Amount Details
                              </h5>
                              <button
                                type="button"
                                className="bg-transparent border-0"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                              >
                                <i className="fa-solid fa-xmark fs-3 text-white"></i>
                              </button>
                            </div>
                            <div className="offcanvas-body">
                              <table className="shop_table shop_table_responsive">
                                <tbody>
                                  <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          {cartItems.totalPrice}
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>
                                  {couponApplied?.message?.offAmount ? (
                                    <tr className="cart-subtotal">
                                      <th>Coupon Discount</th>
                                      <td>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            {couponApplied.message
                                              .couponType === "Flat"
                                              ? couponApplied.message.offAmount
                                              : (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                100}
                                          </bdi>
                                        </span>
                                      </td>
                                    </tr>
                                  ) : null}
                                  <tr className="order-total">
                                    <th>Total</th>
                                    <td data-title="Total">
                                      <strong>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            {couponApplied?.message?.offAmount
                                              ? couponApplied.message
                                                  .couponType === "Flat"
                                                ? cartItems.totalPrice -
                                                  couponApplied.message
                                                    .offAmount
                                                : cartItems.totalPrice -
                                                  (cartItems.totalPrice *
                                                    couponApplied.message
                                                      .offAmount) /
                                                    100
                                              : cartItems.totalPrice}
                                          </bdi>
                                        </span>
                                      </strong>{" "}
                                    </td>
                                  </tr>
                                  <tr className="cart-subtotal">
                                    <th>Available Amount in Wallet</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          {currentWalletData?.wallet}
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div>
                                <div className="text-danger mb-3 text-center">
                                  <p className="mb-0">{orderErrorMessage}</p>
                                  {orderErrorMessage && (
                                    <span
                                      className="signup "
                                      style={{ cursor: "pointer" }}
                                      data-bs-dismiss="modal"
                                      onClick={() =>
                                        navigate("/transactionhistory")
                                      }
                                    >
                                      Add now!
                                    </span>
                                  )}
                                </div>

                                <div className="row mb-3">
                                  <div className="col-md-6 text-start ps-4">
                                    <button
                                      type="button"
                                      className="btn w-100 justify-content-center d-flex align-items-center Pay me-3"
                                      onClick={() =>
                                        walletUpdateHandler(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                    >
                                      Wallet
                                      {/* <i class="fa-solid fa-wallet end-0 ps-2"></i> */}
                                    </button>
                                  </div>
                                  <div className="col-md-6">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        payWithStrip(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                      className="btn w-100 Pay"
                                    >
                                      Stripe
                                    </button>
                                  </div>
                                </div>

                                <div className="row justify-content-center">
                                  <div className="col-md-6 text-start ps-4 mb-3">
                                    <button
                                      type="button"
                                      className="btn w-100 Pay me-3 "
                                      onClick={() =>
                                        payWithPaypal(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                    >
                                      Pay Pal
                                    </button>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                    <button
                                      onClick={() =>
                                        showRazorpay(
                                          couponApplied?.message?.offAmount
                                            ? couponApplied.message
                                                .couponType === "Flat"
                                              ? cartItems.totalPrice -
                                                couponApplied.message.offAmount
                                              : cartItems.totalPrice -
                                                (cartItems.totalPrice *
                                                  couponApplied.message
                                                    .offAmount) /
                                                  100
                                            : cartItems.totalPrice
                                        )
                                      }
                                      type="button"
                                      className="btn w-100 Pay"
                                    >
                                      Razor Pay
                                    </button>
                                  </div>

                                  <div className="col-md-12 text-center">
                                    {Loading ? (
                                      <button className="btn  Pay ">
                                        Order Without Payment
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        className="btn  Pay"
                                        onClick={() =>
                                          orderwithoutPayment(
                                            couponApplied?.message?.offAmount
                                              ? couponApplied.message
                                                  .couponType === "Flat"
                                                ? cartItems.totalPrice -
                                                  couponApplied.message
                                                    .offAmount
                                                : cartItems.totalPrice -
                                                  (cartItems.totalPrice *
                                                    couponApplied.message
                                                      .offAmount) /
                                                    100
                                              : cartItems.totalPrice
                                          )
                                        }
                                      >
                                        Order Without Payment
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <div className="row">
                                  {/* <h4>Save Payment method</h4> */}
                                  {savePayment?.map((friend, index) => {
                                    return (
                                      <div
                                        className=" p-2 mb-2 rounded"
                                        style={{ background: "#e3e3e3" }}
                                      >
                                        <div className="row align-items-center">
                                          <div className="col-sm-8 text-start ">
                                            <label>Name:</label>
                                            &nbsp;&nbsp;
                                            <span>{friend.accountHolder}</span>
                                            <br />
                                            <label> Ac/No.:</label> &nbsp;&nbsp;
                                            <span>{friend.cardNumber}</span>
                                          </div>

                                          <div className="col-sm-4">
                                            <button
                                              type="button"
                                              className="btn Pay border-0"
                                              data-bs-toggle="modal"
                                              data-bs-target={`${
                                                "#payment_id" + friend._id
                                              }`}
                                            >
                                              Pay Now
                                            </button>

                                            <div
                                              className="modal fade"
                                              id={`${
                                                "payment_id" + friend._id
                                              }`}
                                              data-bs-backdrop="static"
                                              data-bs-keyboard="false"
                                              tabIndex="-1"
                                              style={{
                                                background: "#00000059",
                                              }}
                                              aria-labelledby="exampleModalLabel"
                                              aria-hidden="true"
                                            >
                                              <div
                                                className="modal-dialog"
                                                style={{ zIndex: "2000" }}
                                              >
                                                <div className="modal-content border-0">
                                                  <div
                                                    className="modal-header border-0"
                                                    style={{
                                                      background:
                                                        "rgb(3, 151, 156)",
                                                    }}
                                                  >
                                                    <h1
                                                      className="modal-title fs-5 text-white"
                                                      id="exampleModalLabel"
                                                    >
                                                      Choose Save Payment Method
                                                      ?
                                                    </h1>
                                                    <button
                                                      type="button"
                                                      className="bg-transparent border-0"
                                                      data-bs-dismiss="modal"
                                                      aria-label="Close"
                                                    >
                                                      <i className="fa-solid fa-xmark fs-3 text-white"></i>
                                                    </button>
                                                  </div>
                                                  <div className="modal-body text-center py-5">
                                                    {" "}
                                                    <button
                                                      type="button"
                                                      onClick={() =>
                                                        savePaymentRazorpay(
                                                          couponApplied?.message
                                                            ?.offAmount
                                                            ? couponApplied
                                                                .message
                                                                .couponType ===
                                                              "Flat"
                                                              ? cartItems.totalPrice -
                                                                couponApplied
                                                                  .message
                                                                  .offAmount
                                                              : cartItems.totalPrice -
                                                                (cartItems.totalPrice *
                                                                  couponApplied
                                                                    .message
                                                                    .offAmount) /
                                                                  100
                                                            : cartItems.totalPrice,
                                                          friend._id
                                                        )
                                                      }
                                                      // onClick={() =>
                                                      //   this.showRazorpay(
                                                      //     friend._id
                                                      //   )
                                                      // }
                                                      className="services-btn2 me-2 mb-0"
                                                    >
                                                      Razorpay
                                                    </button>
                                                    <button
                                                      type="button"
                                                      onClick={() =>
                                                        savePayments(friend._id)
                                                      }
                                                      // onClick={() =>
                                                      //   this.PaypalSubscription(
                                                      //     friend._id
                                                      //   )
                                                      // }
                                                      className="services-btn2 mx-2 mb-0"
                                                    >
                                                      Paypal
                                                    </button>
                                                    <button
                                                      type="button"
                                                      onClick={() =>
                                                        savePayments(friend._id)
                                                      }
                                                      // onClick={() =>
                                                      //   this.StripeSubscription(
                                                      //     friend._id
                                                      //   )
                                                      // }
                                                      className="services-btn2 ms-2 mb-0"
                                                    >
                                                      Stripe
                                                    </button>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* <div className="table-responsive  text-nowrap">
                                          <table className="table table-borderless ">
                                            <tbody>
                                              <tr
                                                onClick={() =>
                                                  savePayments(friend._id)
                                                }
                                                className="p-0"
                                                style={{
                                                  background: "#029a99",
                                                  cursor: "pointer",
                                                }}
                                              >
                                                <td className="p-2 fs-4 text-start text-white">
                                                  Card
                                                </td>
                                                <td className="p-2 text-end fs-4 text-white">
                                                  {index + 1}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="w-25  text-start">
                                                  Acccount Holder &nbsp; :
                                                </td>

                                                <td>{friend.accountHolder}</td>
                                              </tr>
                                              <tr>
                                                <td className="w-25  text-start">
                                                  Ac/No. &nbsp; :
                                                </td>
                                                <td> {friend.accountNumber}</td>
                                              </tr>
                                              <tr>
                                                <td className="w-25  text-start">
                                                  Expiry Date &nbsp; :
                                                </td>

                                                <td>{friend.ifsc}</td>
                                              </tr>
                                              <tr>
                                                <td className="w-25  text-start">
                                                  CVC &nbsp; :
                                                </td>
                                                <td>{friend.cvc}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div> */}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>

          <>
            {logout && (
              <div className="Cart">
                <div className="container">
                  <div className="out-cart">
                    <div className="inner-cart">
                      <table className="table bg-transparent table-borderless border-0 mb-3">
                        <tbody>
                          <tr className="border-0">
                            <th></th>
                            <th>Product</th>

                            <th className="text-center p-0">Price</th>
                            <th className="text-center p-0">Quantity</th>
                            <th className="text-center p-0">Total</th>
                          </tr>
                        </tbody>
                        <tbody>
                          {cartItems?.map((item, index) => (
                            <tr
                              style={{ position: "relative" }}
                              className="second-tr"
                              key={item._id}
                            >
                              {isAddLoading === true && (
                                <div
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "black",
                                    opacity: 0.4,
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    zIndex: 999,
                                  }}
                                ></div>
                              )}
                              <th>
                                <i
                                  onClick={() =>
                                    Alldeletelogoutcarthandler(item._id)
                                  }
                                  aria-hidden="true"
                                  className="fas fa-times"
                                  style={{ cursor: "pointer" }}
                                ></i>
                              </th>
                              <th>{item.title}</th>
                              <th className="p-0 text-center">
                                <span>
                                  <bdi>
                                    <span>$</span>
                                    {item.price}
                                  </bdi>
                                </span>
                              </th>
                              <th className="p-0 text-center">
                                <div className="quantity d-flex align-items-center justify-content-between w-50 m-auto">
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="minus"
                                    onClick={() => {
                                      deletelogoutcarthandler(item._id);
                                    }}
                                  >
                                    -
                                  </span>
                                  <h3> {item.quantity}</h3>
                                  <span
                                    style={{ cursor: "pointer" }}
                                    className="cursor-pointer"
                                    data-action-type="plus"
                                    onClick={() => {
                                      addTologoutcarthandler(item._id);
                                    }}
                                  >
                                    +
                                  </span>
                                </div>
                              </th>
                              <th className="p-0 text-center">
                                <span className="woocommerce-Price-amount amount">
                                  <bdi>
                                    <span className>$</span>
                                    {item.quantity * item.price}
                                  </bdi>
                                </span>
                              </th>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="coupon-wrap row">
                      <div className="coupon-inner col-md-6">
                        <Link to="/Services">
                          <i
                            aria-hidden="true"
                            className="fas fa-chevron-left"
                          />
                          Continue Shopping
                        </Link>
                      </div>
                      <div className="cart-collaterals col-md-6">
                        <div className="cart_totals ">
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td>
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      {price}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>

                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        {price}
                                      </bdi>
                                    </span>
                                  </strong>{" "}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wc-proceed-to-checkout   eael-cart-update-btn">
                            {/* <Link to="/login"> */}
                            <button
                              className="checkout-button button alt wc-forward"
                              onClick={() => proceedlogoutCheckout()}
                            >
                              Proceed to Checkout
                            </button>
                            {/* </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default ViewCart;
