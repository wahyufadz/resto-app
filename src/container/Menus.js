import { Container } from "unstated";

class Menus extends Container{
  menus=[
    {
      "id": 0,
      "nama": "nasi goreng",
      "harga": 10000
    },
    {
      "id": 1,
      "nama": "nasi kuning",
      "harga": 6000
    },
    {
      "id": 2,
      "nama": "nasi gudek",
      "harga": 20000
    },
    {
      "id": 3,
      "nama": "nasi rames",
      "harga": 7000
    },
    {
      "id": 4,
      "nama": "nasi kucing",
      "harga": 6000
    },
    {
      "id": 5,
      "nama": "nasi jinggo",
      "harga": 6500
    },
    {
      "id": 6,
      "nama": "nasi pecel",
      "harga": 5000
    },
    {
      "id": 7,
      "nama": "nasi tempong",
      "harga": 12000
    },
    {
      "id": 8,
      "nama": "nasi campur",
      "harga": 8000
    },
    {
      "id": 9,
      "nama": "nasi bongkot",
      "harga": 7000
    },
  ]
  
  
  state = {
    menus:this.menus,
    availableMenu:this.menus,
    chosenMenu:[]
  }

  addMenu = menu =>{
    menu.id = Date.now();
    this.setState({
      menus:[
        menu,
        ...this.state.menus
      ],
      availableMenu:[
        menu,
        ...this.state.availableMenu
      ]
    })
  }

  menuSearch = menu =>{
    const menus=this.state.menus.filter(test=>{
      return !(this.state.chosenMenu.includes(test));
    });
    const availableMenu=menus.filter(test=>{
      return test.nama.indexOf(menu)!==-1?true:false;
    })
    this.setState({availableMenu});  
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

}

export default Menus