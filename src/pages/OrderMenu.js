import React, { Component } from 'react';
import { Subscribe } from 'unstated'

import Menus from '../container/Menus';

import MenuView from '../components/MenuView';
import MenuSearch from '../components/MenuSearch';

export default () => {
  return (
    <Subscribe to={[Menus]}>
      {menuContainer=>(
        <div className="row">
          <div className="col m4 s12">
            <h4 className="center">Menu</h4>
            <MenuSearch menuSearch={menuContainer.menuSearch}/>
          </div>
          <div className="col m8 s12">
            <h4 className="center">Menu Terpilih</h4>
          </div>
          <div className="col m12 s12">
            <div className="col m4 s12">
              <MenuView 
                menuView={menuContainer.state.availableMenu} 
                selection={menuContainer.selection}
              />
            </div>
            <div className="col m8 s12">
              <MenuView 
                menuView={menuContainer.state.chosenMenu} 
                selection={menuContainer.selection} 
                onClickType='deselect'
              />
            </div>
          </div>
        </div>
      )}
    </Subscribe>
  );
}

