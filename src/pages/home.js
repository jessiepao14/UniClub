import React from "react";
import List from "./list";
import UpcomingList from "./upcomingList";
// import calendar from "../images/YhackCalendarFinal.png";
import Carousel from "./carousel";
import EventHeader from "./event-header";

function Home() {
  return (
    <>
      <EventHeader />
      <div class="container home">
        <div class="row">
          <div class="col">
            <List />
          </div>
          <div class="col">
            <Carousel />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <UpcomingList />
          </div>
          <div class="col"></div>
        </div>
      </div>
    </>
  );
}

export default Home;

// ONLY ALLOWED TO HAVE ONE ELEMENT PER RETURN FUNCTION

// IF MORE ENCLOSE IN <> </>
