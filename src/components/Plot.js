import React, { Component } from "react";
const base64prefix = "data:image/png;base64, "
class Plot extends Component {
  state = {
    url: ""
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("plot_url"));
   
    if (localStorage.getItem("plot_url")) {
      this.setState({
        url: this.userData.data.radar_img
      });
    }
    // console.log("url",url)
  }

  render() {
      const url = this.state.url;
    return (
      <div className="container">
        <div>
          <img src={base64prefix+this.state.url} alt="img" className=""/>
        </div>
      </div>
    );
  }
}

export default Plot;