import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import avatar1 from "../images/APSA.jpeg";
import avatar2 from "../images/chess club.jpeg";
import avatar3 from "../images/film society.jpeg";

export default function AlignItemsList() {
  return (
    <>
      <h3>Upcoming Events</h3>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="APSA Club" src={avatar1} />
          </ListItemAvatar>
          <ListItemText
            primary="Pizza Study Session"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  APSA Club
                </Typography>
                {" — 4/12, 7pm, Ideation Zone"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Chapman Chess Club" src={avatar2} />
          </ListItemAvatar>
          <ListItemText
            primary="Chess Tournament"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Chapman Chess Club
                </Typography>
                {" — 4/20, 5pm, Ideation Zone"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="The Film Society" src={avatar3} />
          </ListItemAvatar>
          <ListItemText
            primary="Movie Night"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  The Film Society
                </Typography>
                {" — 4/24, 4pm, Musco Lawn"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
