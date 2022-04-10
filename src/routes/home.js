import React from "react";
import UniNav from "./uni-navbar";
import List from "./list";
import UpcomingList from "./upcomingList";

function Home() {
  return (
    <>
      <UniNav />
      <div class="ml-3">
        <List />
        <UpcomingList />
      </div>
    </>
  );
}

export default Home;

// ONLY ALLOWED TO HAVE ONE ELEMENT PER RETURN FUNCTION

// IF MORE ENCLOSE IN <> </>
