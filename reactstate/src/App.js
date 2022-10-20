import React from 'react'
import "./App.css";
import Profile from "./profil/profil";
import Pic from "./Pic.jpg";


class App extends React.Component {
  constructor(person) {
    super(person);

    this.state = {
      fullName: " Mohamed Nasreddine Jarbouae ",
      profession: "Engineer ",
      bio: " Good ",
      pic: <img src={Pic} alt="Pic.jpg" />,
      show: false,
      time: 0,
    };
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {" "}
          {this.state.show ? "Hide Profile" : " Show Profile "}{" "}
        </button>

        {this.state.show && (
          <Profile
            fullName={this.state.fullName}
            profession={this.state.profession}
            bio={this.state.bio}
            pic={this.state.pic}
          />
        )}
      </div>
    );
  }
}

export default App;