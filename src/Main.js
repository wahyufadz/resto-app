import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'

import Home from './pages/Home'
import AddMenu from './pages/AddMenu'
import OrderMenuBaru from './pages/OrderMenu';

export default class Main extends Component {
  render() {
    const link = [
      {address:"",label:"Home",component:Home},
      {address:"addmenu",label:"Add Menu",component:AddMenu},
      {address:"ordermenu",label:"Order Menu",component:OrderMenuBaru},
    ]

    const navbarLink = link.map(link=>(
      <li key={Math.floor(Math.random()*2000)}><NavLink to={"/"+link.address}>{link.label}</NavLink></li>
    ))

    const routeLink = link.map(link=>(
      <Route key={Math.floor(Math.random()*2000)} exact path={'/'+link.address} component={link.component}/>
    ))
    
    return (
      <div className="Main">
        <nav className="blue darken-3"> 
          <div className='nav-wrapper container-fluid'>
            <NavLink id="logo-container" to='/' className='brand-logo'>Resto App</NavLink>
            <ul className="right hide-on-med-and-down">
              {navbarLink}
            </ul>
            <ul id="nav-mobile" className="sidenav">
              {navbarLink}
            </ul>
            <a data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          </div>
        </nav>
        <div className="content container">
          {routeLink}
        </div>
      </div>
    )
  }
}
