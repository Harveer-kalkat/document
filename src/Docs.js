import React, {useEffect,useState,Component } from 'react';
export class Docs extends Component {
    state={document:null}
  componentDidMount()
  {
    if(localStorage.getItem('document')!=null)
    {
       let arr=JSON.parse(localStorage.getItem('document'));
       this.setState({document:arr.length})
    }
}
    render() {
        return (
            <div className="doc">
                <h1> Document</h1>
            <form>
                    <textarea value={this.state.document} rows="15" cols="40"/><br></br>
                    <input type="submit" value="Done"/>
            </form>
            </div>
        )
    }
}

export default Docs
