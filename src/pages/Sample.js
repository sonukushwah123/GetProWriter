import React, { Component } from "react";

import Loader from "./Loader";

let urlApi = `${process.env.REACT_APP_APIURL}`;

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: [],
      searchText: "",
      startSearch: false,
      isLoading: false,
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      `${process.env.REACT_APP_APIURL}/getworkSamples`,
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (response.ok) {
      const User = await response.json();
      console.log(User);
      this.setState({
        ...this.state,
        User: User.data.sort().reverse(),
        isLoading: false,
        startSearch: true,
      });
    }
  }
  render() {
    const { User } = this.state;
    const RenderHTML = (props) => (
      <p
        dangerouslySetInnerHTML={{ __html: props.HTML }}
        className="samp_box-h3 fs-6"
        style={{ overflowX: "auto", height: "100px" }}
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
          <section className="samp_sec">
            <div className="container">
              <div className="text-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Your Work Sample"
                  className="samp_sec-search"
                  value={this.state.searchText}
                  onChange={(e) =>
                    this.setState({
                      ...this.state,
                      searchText: e.target.value,
                    })
                  }
                />
                &nbsp; &nbsp;
                <button
                  type="button"
                  onClick={() =>
                    this.setState({ ...this.state, startSearch: true })
                  }
                  className="samp_sec-btn "
                >
                  Search
                </button>
                <button
                  onClick={() =>
                    this.setState({ ...this.state, startSearch: false })
                  }
                  type="button"
                  className="samp_sec-btn1"
                >
                  Show All
                </button>
                <h2 className="samp_sec-h2 m-auto">Work Sample</h2>
                <p className="samp_sec-p">
                  You’re probably looking for ways to get people to pay
                  attention to you. Maybe you’re looking for a way to make
                  money. Maybe you’re trying to find a new portfolio to use. In
                  any case, you’re probably looking for tips on how to write
                  better content that gets people up at night
                </p>
              </div>
              <div className="row text-center">
                {this.state.User && this.state.searchText
                  ? this.state.User.filter((item, index) =>
                      item.title.includes(this.state.searchText)
                    ).map((friend, value) => {
                      return (
                        <div className="col-md-3" key={value.toString()}>
                          <div className="samp_box text-center">
                            <img
                              alt="images"
                              src={urlApi + "/image/" + friend.image}
                              className="samp_box-img"
                            />

                            <h3 className="samp_box-h3">{friend.title}</h3>

                            <RenderHTML HTML={friend.dec} />
                            <a
                              type="button"
                              rel="noreferrer"
                              href={urlApi + "/upload-pdf/" + friend.pdf}
                              download
                              target="_blank"
                              className="samp_box-btn text-white text-decoration-none"
                            >
                              {" "}
                              <i className="fa fa-download samp-icon"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      );
                    })
                  : this.state.User.map((friend, value) => {
                      return (
                        <div className="col-md-3" key={value.toString()}>
                          <div className="samp_box">
                            <div className="samp_box-img1">
                              <img
                                alt="images"
                                src={urlApi + "/image/" + friend.image}
                                className="samp_box-img"
                              />
                            </div>
                            <h3 className="samp_box-h3">{friend.title}</h3>
                            <RenderHTML HTML={friend.dec} />
                            <a
                              type="button"
                              rel="noreferrer"
                              href={urlApi + "/upload-pdf/" + friend.pdf}
                              download
                              target="_blank"
                              className="samp_box-btn text-white text-decoration-none"
                            >
                              {" "}
                              <i className="fa fa-download samp-icon"></i>
                              Download
                            </a>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </section>
        )}
      </div>
    );
    // :(
    // 	<div>No USers</div>
    // 	)
  }
}

export default Sample;
