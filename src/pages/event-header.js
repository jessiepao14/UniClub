import "./header-style.css";
import React from "react";
import pic from "../images/computer_science_club_logoV1.jpg";

class EventHeader extends React.Component {
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
        <div class="py-5">
          <img src={pic} alt="Profile" class="ml-4 header-img"></img>
        </div>
        <div class="align-self-center flex-grow-1">
          <ul>
            <li>
              <h1>Next Event</h1>
            </li>
            <li>
              <h4>Discord Night!</h4>
            </li>
            <li>Computer Science Club</li>
            <li>April 10, 7:00pm, Online</li>
          </ul>
        </div>
        <div class="mx-2">
          <button class="btn btn-primary me-md-2 btn-lg" type="button">
            Link
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

export default EventHeader;
