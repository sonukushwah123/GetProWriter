import React, { Component } from "react";

import Loader from "./Loader";

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      isLoading: false,
      // visibility: false,
    };
    // this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${process.env.REACT_APP_APIURL}/getFaqs `, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then(async (response) => {
        const User = await response.json();
        if (response.ok) {
          console.log(User);
          this.setState({
            ...this.state,
            User: User.data.sort().reverse(),
            isLoading: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // handleToggleVisibility() {
  //   this.setState((prevState) => {
  //     return {
  //       visibility: !prevState.visibility,
  //     };
  //   });
  // }

  render() {
    const { User } = this.state;
    const RenderHTML = (props) => (
      <p
        className="accordion-body mb-0"
        dangerouslySetInnerHTML={{ __html: props.HTML }}
      ></p>
    );
    if (User.length < 0) {
      return User.length > 0;
    }
    console.log("this.props.User", this.state.User);
    return (
      <div>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <>
            <section className="faq_sec d-flex justify-content-center align-items-center">
              <div className="container">
                <h2 className="faq_sec-h2 p-0">
                  Frequently Asked Questions{" "}
                  <p className="faq_sec-p fs-6 fw-normal">
                    Sometimes all you need is a fast answer to a question. We
                    understand. Answers to our most frequently asked questions
                    may be found here.
                  </p>
                </h2>
              </div>
            </section>

            <section className="faq_section1">
              <div className="container">
                <div className="row">
                  <h2 className="faq_h3">FAQs</h2>
                  <div className="faq-inner">
                    {this.state.User &&
                      this.state.User.map((friend) => {
                        return (
                          <div
                            className="faq-item p-0 bg_set accordion-item"
                            // onClick={this.handleToggleVisibility}
                            key={friend._id}
                          >
                            <h2
                              className="faq_item-h3 p-0 accordion-header"
                              id={friend._id}
                            >
                              <button
                                className="faq-plus size fw-normal  align-items-baseline accordion-button bg-transparent text-white accordion-button shadow-none collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#" + "s" + friend._id}
                                aria-expanded="false"
                                aria-controls={"s" + friend._id}
                              >
                                {friend.title}
                              </button>
                            </h2>

                            <div
                              id={"s" + friend._id}
                              className="bg-white accordion-collapse collapse"
                              aria-labelledby={friend._id}
                            >
                              {/* <div className="accordion-body">{friend.dec}</div> */}
                              <RenderHTML HTML={friend.dec} />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    );
  }
}

export default Faq;
