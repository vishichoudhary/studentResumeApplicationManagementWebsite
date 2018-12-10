import React, { Component } from 'react';
import {TextField,Grid,AppBar,Toolbar,Typography,Button} from '@material-ui/core';
import './App.css';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
      Name:"",
      Phone:"",
      Email:"",
      showDetails:false
    }
  }
  handlesubmit(e){
    e.preventDefault();
    this.setState({showDetails:true})
  }
  onChange(e,type)
  {
    if(type==="Name"){
      this.setState({Name:e.target.value})
    }
    else if(type==="Phone"){
      this.setState({Phone:e.target.value})
    }else if(type==="Email"){
      this.setState({Email:e.target.value})
    }
  }
  render() {
    var Style = {
      margin: '40px',
      border: '2px solid black'
    };
    return (
      <div className="App">
      <div align="center">
        <form>
          <Grid item md={2} style={Style}>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" color="primary">
                    Profile
                  </Typography>
                </Toolbar>
              </AppBar><br/><br/>
             Name:<TextField type="text" refs="Name" value={this.state.Name} onChange={(e)=>{this.onChange(e,"Name")}}/><br/><br/>
             Phone:<TextField type="text" refs="Phone" value={this.state.Phone} onChange={(e)=>{this.onChange(e,"Phone")}}/><br/><br/>
             Email:<TextField type="text" refs="Email" value={this.state.Email} onChange={(e)=>{this.onChange(e,"Email")}}/><br/><br/>
             <Button variant="contained" color="primary" onClick={(e)=>{this.handlesubmit(e)}}>showDetails</Button><br/><br/>
             </Grid>
        </form>
      </div>
      {this.state.showDetails && <Details  myNameProp = {this.state.Name} 
      myPhoneProp = {this.state.Phone}
      myEmailProp = {this.state.Email}/>}
      </div>
    );
  }
}


class Details extends Component {
  render() {
    return (
              <div align="center">
                <table>
                      <tr>
                          <th colspan="5">Profile Details are</th><br/>
                      </tr>
                      <tr>
                        <td>
                          <b>Name:</b>
                        </td>
                        <td>
                           {this.props.myNameProp}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Phone:</b>
                        </td>
                        <td>
                           {this.props.myPhoneProp}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>Email:</b>
                        </td>
                        <td>
                           {this.props.myEmailProp}
                        </td>
                      </tr>
                </table>
              </div>
            );
          }
}
export default Profile;