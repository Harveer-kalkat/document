import React, { Component } from 'react';
import Calendar from "react-calendar";
import {Redirect} from 'react-router';
export class Home extends Component {
    state = {date: new Date()}
        onChange = date => this.setState({ date })
        handleOnClick=()=>{
            this.setState({redirect:true});
        }
    render() {
        if(this.state.redirect){
            return<Redirect push to="/Docs"></Redirect>
        }
        return (
            <div>
            <h1 className="App">Your Diary.</h1>
            <div className="cal">
                <Calendar onChange={this.onChange} value={this.state.date} onClickDay={this.handleOnClick}/>
            </div>
            </div>
        )
    }
}

export default Home
