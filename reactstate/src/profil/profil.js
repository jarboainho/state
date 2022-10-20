import React, { Component } from "react";

export default class Profile extends Component {
  state = {
    time: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 100);
  }
  render() {
    const { fullName, profession, bio } = this.props;
    return (
      <>
        <p>counter :{this.state.time}</p>
        <div className="pic"> {this.props.pic} </div>
        <h1 style={{ fontFamily: "cursive" }}> {fullName} </h1>
        <h3 style={{ fontFamily: "cursive" }}> {profession} </h3>
        <h2 style={{ fontFamily: "cursive" }}> {bio} </h2>
      </>
    );
  }
}
