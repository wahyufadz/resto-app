import React, { Component } from 'react'

export default class AddMenu extends Component {
  state={
    addMenu:''
  }
  
  handleChange=(e)=>{
    this.setState({
      addMenu:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    let menu={id:Math.floor(Math.random()*9000),nama:this.state.addMenu}
    this.props.addMenu(menu);
    this.setState({
      addMenu:''
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s6">
          <label htmlFor="addMenu">Add Menu</label>
          <input type="text" name="addMenu" id="addMenu" className="validate" value={this.state.addMenu} onChange={(e)=>{this.handleChange(e)}} />
        </div>
      </form>
    )
  }
}
