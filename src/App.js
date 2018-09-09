import React, { Component } from 'react';
import AvailableMenu from './components/AvailableMenu';
import ChosenMenu from './components/ChosenMenu';

class App extends Component {
  state={
    availableMenu:[
      {id:0,nama:'Nasi Goreng',harga:8000},
      {id:1,nama:'Nasi Pecel',harga:6000},
      {id:2,nama:'Nasi Bongkot',harga:7000},
    ],
    chosenMenu:[
    ]
  }
  
  selectMenu=(id)=>{
    const availableMenu = this.state.availableMenu;
    const newChosen = this.state.chosenMenu;
    for(let x=0;x<availableMenu.length;x++){
      if(availableMenu[x].id===id){
        newChosen.push(availableMenu[x]);
        break;
      }
    }
    const newAvailable = availableMenu.filter(menu=>{return menu.id!==id});
    this.setState({
      availableMenu:newAvailable,
      chosenMenu:newChosen
    })
  }

  deselectMenu=(id)=>{
    const chosenMenu = this.state.chosenMenu;
    const newAvailable = this.state.availableMenu;
    for(let x=0;x<chosenMenu.length;x++){
      if(chosenMenu[x].id===id){
        newAvailable.push(chosenMenu[x]);
        break;
      }
    }
    const newChosen = chosenMenu.filter(menu=>{return menu.id!==id});
    this.setState({
      availableMenu:newAvailable,
      chosenMenu:newChosen
    })
  }

  render() {
    return (
      <div className="App container">
        <h3 className="center">Menu yang Tersedia</h3>
        <AvailableMenu availableMenu={this.state.availableMenu} selectMenu={this.selectMenu}/>
        <h3 className="center">Menu Terpilih</h3>
        <ChosenMenu chosenMenu={this.state.chosenMenu} deselectMenu={this.deselectMenu}/>
      </div>
    );
  }
}

export default App;
