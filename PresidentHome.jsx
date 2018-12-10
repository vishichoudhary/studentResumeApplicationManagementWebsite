import React, { Component } from "react";
// import { Route,NavLink,HashRouter} from "react-router-dom";
// import Profile from "./Profile";
// import Imgtab from "./Imgtab";
import {Button} from "@material-ui/core";

class PresidentHome extends Component {
  render() {
    return (
      // <HashRouter>
          <div>
          <Button className="create" variant="contained" color="secondary" onClick={(e)=>{this.handleClickOpen(e)}}>Create events</Button><br/><br/>

            <h1>Create Events</h1> 
           
          </div>
        // </HashRouter>
    );
  }
}
 
export default PresidentHome;