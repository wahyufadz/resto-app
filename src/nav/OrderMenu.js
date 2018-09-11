import React, { Component } from 'react';
import AvailableMenu from '../components/AvailableMenu';
import ChosenMenu from '../components/ChosenMenu';
import Axios from 'axios';

class OrderMenu extends Component {
  state={
    availableMenu:[
      {id:0,nama:'Nasi Goreng',harga:8000},
      {id:1,nama:'Nasi Pecel',harga:6000},
      {id:2,nama:'Nasi Bongkot',harga:7000},
    ],
    chosenMenu:[
    ]
  }
  componentDidMount(){
    Axios.get('http://localhost:3000/menu')
    .then(json => {
      console.log(json);
      this.setState({availableMenu:json.data})
    })
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
          <AvailableMenu availableMenu={this.state.availableMenu} selection={this.selection}/>
        </div>
        <div className="col m8 s12">
          <h4 className="center">Menu Terpilih</h4>
          <ChosenMenu chosenMenu={this.state.chosenMenu} selection={this.selection}/>
        </div>
      </div>
    );
  }
}

export default OrderMenu;
