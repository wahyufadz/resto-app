import React, { Component } from 'react';
import Axios from 'axios';
import MenuView from '../components/MenuView';
import SearchMenu from '../components/SearchMenu';

class OrderMenu extends Component {
  state={
    initMenu:[

    ],
    availableMenu:[
    ],
    chosenMenu:[
    ]
  }
  
  componentDidMount(){
    Axios.get('http://localhost:3030/menu')
    .then(json => {
      this.setState({initMenu:json.data,availableMenu:json.data});
      console.log(this.state)
    })
  }

  searchMenu = (menu) =>{
    const initMenu=this.state.initMenu.filter(test=>{
      return !(this.state.chosenMenu.includes(test));
    });
    const availableMenu=initMenu.filter(test=>{
      return test.nama.indexOf(menu)!==-1?true:false;
    })
    this.setState({availableMenu:availableMenu});
    
  }

  selection=(id,type = 'select')=>{
    let add='chosenMenu';
    let rm='availableMenu';
    if(type!=='select'){
      add='availableMenu';
      rm='chosenMenu';
    }
    let newrm = this.state[rm];
    const newadd = this.state[add];
    for(let x=0;x<newrm.length;x++){
      if(newrm[x].id===id){
        newadd.push(newrm[x]);
        break;
      }
    }
    newrm = newrm.filter(menu=>{return menu.id!==id});
    this.setState({
      [rm]:newrm,
      [add]:newadd
    })
  }
  
  render() {
    return (
      <div className="row">
        <div className="col m4 s12">
          <h4 className="center">Menu</h4>
          <SearchMenu searchMenu={this.searchMenu}/>
          <MenuView menuView={this.state.availableMenu} selection={this.selection}/>
        </div>
        <div className="col m8 s12">
          <h4 className="center">Menu Terpilih</h4>
          <MenuView menuView={this.state.chosenMenu} selection={this.selection} onClickType='deselect'/>
        </div>
      </div>
      );
    }
  }

export default OrderMenu;
