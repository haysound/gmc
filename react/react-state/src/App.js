import { Component } from "react";
import "./App.css";
import Alok from "./alok.jpg";

class App extends Component {
  constructor() {
    super();
    this.handleDisplay = this.handleDisplay.bind(this);
    this.state = {
      fullName: "Ayomide Ayansiji",
      bio: "I am a Software Engineer and i love programming",
      imgSrc: { Alok },
      profession: "Frontend Developer",
      visibility: false,
    };
  }

  handleDisplay() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    const person = this.state;
    return (
      <div className={this.state.visibility ? "center" : "change"}>
        <button onClick={this.handleDisplay}>
          {this.state.visibility ? "Hide Card" : "Show Card"}
        </button>
        {this.state.visibility && (
          <div className="container">
            <div className="main">
              <div className="info-container">
                <img src={person.imgSrc.Alok} alt="" />
              </div>
              <div className="interest">
                <div>
                  <h3>{person.fullName}</h3>
                </div>
              </div>
              <div className="about">
                <h3>{person.profession}</h3>
                <p>{person.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
