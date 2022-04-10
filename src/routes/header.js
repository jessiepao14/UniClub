import "./header-style.css";
import React from "react";
import pic from "./michael.jpeg";

class Header extends React.Component {
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
      <div class="d-flex align-items-center mb-3">
        <div>
          <img src={pic} alt="Profile" class="ml-3"></img>
        </div>
        <div class="align-self-center flex-grow-1">
          <ul>
            <li>
              <h1>Michael</h1>
            </li>
            <li>He/Him</li>
            <li>3rd Year</li>
            <li>Computer Science Major</li>
          </ul>
        </div>
        <div class="mx-2">
          <button class="btn btn-primary me-md-2" type="button">
            Edit
          </button>
        </div>
        <div class="mr-3">
          <button class="btn btn-primary" type="button">
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
