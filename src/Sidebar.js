import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Portal,
} from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import CollectionsIcon from "@material-ui/icons/Collections";
import StarIcon from "@material-ui/icons/Star";
function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar__drawer" onBlur={props.anchor(false)}>
        <List>
          <ListItem>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
