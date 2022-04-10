import "./header-style.css";
import React from "react";
import pic from "../images/computer_science_club_logoV1.jpg";

class ClubHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: 1,
      headerTitles: ["Header"],
      picLink: "./defaulticon.png",
      button1: "Button1",
      button2: "Button2"
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      headers: props.headers,
      headerTitles: props.headerTitles,
      picLink: props.picLink,
      button1: props.button1,
      button2: props.button2
    };
  }

  render() {
    return (
      <div class="d-flex align-items-center club-header">
        <div>
          <img src={pic} alt="Profile" class="ml-4 header-img"></img>
        </div>
        <div class="align-self-center flex-grow-1">
          <ul>
            <li>
              <h1>Computer Science Club</h1>
            </li>
            <li>President: Michael</li>
            <li>Category: STEM</li>
            <li>Advisor: Linstead</li>
          </ul>
        </div>
        <div class="mx-2">
          <button class="btn btn-primary me-md-2 btn-lg" type="button">
            Join
          </button>
        </div>
        <div class="mr-4">
          <button class="btn btn-primary btn-lg" type="button">
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default ClubHeader;
