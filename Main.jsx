import React, { Component } from "react";
import { Route,NavLink,HashRouter} from "react-router-dom";
import csec from "./csec";
import Home from "./Home";
import {Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from "@material-ui/core";

class Main extends Component {

   state = {
    open: false,
  };
  handleClickOpen (e){
    this.setState({ open: true });
  };

  handleYes (e){
    this.props.history.push("/csec");
  };
  handleNo(e){
    this.setState({ open: false });
  }
  render() {
    return (
       <HashRouter>
          <div>
          <h1> Join the Clubs </h1>
          <Button className="csec" variant="contained" color="secondary" onClick={(e)=>{this.handleClickOpen(e)}}>CSEC</Button><br/><br/>
          <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"join club"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do You Want to Join This Club
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={(e)=>{this.handleYes(e)}} color="primary">
              Yes
            </Button>
            <Button onClick={(e)=>{this.handleNo(e)}} color="primary" autoFocus>
             No
            </Button>
          </DialogActions>
        </Dialog>
         
        
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;