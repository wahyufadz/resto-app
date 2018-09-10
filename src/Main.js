import React, { Component } from 'react'
import {Route,NavLink,HashRouter} from 'react-router-dom'
import Home from './nav/Home'
import AddMenu from './nav/AddMenu'
import OrderMenu from './nav/OrderMenu'

export default class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className='nav-wrapper'>
            <nav>
              <div className="container">
                <NavLink exact to='/' className='brand-logo left'>Resto App</NavLink>
                <ul className="right hide-on-med-and-dow">
                  <li><NavLink exact to="/">Home</NavLink></li>
                  <li><NavLink to="/addmenu">Add Menu</NavLink></li>
                  <li><NavLink to="/ordermenu">Order</NavLink></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="content container">
            <Route exact path='/' component={Home}/>
            <Route path='/addmenu' component={AddMenu}/>
            <Route path='/ordermenu' component={OrderMenu}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}
