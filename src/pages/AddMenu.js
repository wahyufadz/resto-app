import React, { Component } from 'react'
import { Subscribe} from 'unstated';

import Menus from '../container/Menus';
import MenuView from '../components/MenuView';

export default class AddMenu extends Component {
  nama = React.createRef();
  harga = React.createRef();

  handleSubmit = addMenu => {
    if(this.nama.current.value!==''&this.harga.current.value!==0){
      addMenu({
        nama:this.nama.current.value,
        harga:this.harga.current.value
      })
      this.nama.current.value=null;
      this.harga.current.value=null;
    }
  }

  render() {
    return (
      <div className='AddMenu'>
        <Subscribe to={[Menus]}>
          { menuContainer =>
            <div className='row'>
              <div className="col m4">
                <h2>Daftar Menu</h2>
                  <MenuView menuView={menuContainer.state.menus} />
              </div>
              <div className="col m8">
                <h2>Tambah Menu</h2>
                <form 
                  onSubmit={(e)=>{
                    e.preventDefault();
                    this.handleSubmit(menuContainer.addMenu);
                  }}
                >
                  <div className="input-field">
                    <input
                      type="text" name="nama" id="nama" className="validation" ref={this.nama}
                    />
                    <label htmlFor="nama">Nama</label>
                  </div>
                  <div className="input-field">
                    <input
                      type="number" name="harga" id="harga" className="validation" ref={this.harga}
                    />
                    <label htmlFor="harga">Harga</label>
                  </div>
                  <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                </form>
              </div>
            </div>
          }
        </Subscribe>
      </div>
    )
  }

}
