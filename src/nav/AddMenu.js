import React, { Component } from 'react'
import Axios from 'axios';
import MenuView from '../components/MenuView';

export default class AddMenu extends Component {

  state = {
    initMenu: [
      { id: 0 }
    ],
    draftMenu: {
      nama: '', harga: ''
    },
  }
  
  setInitMenu = () => {
    Axios.get('http://localhost:3030/menu')
      .then(json => {
        this.setState({ initMenu: json.data });
        console.log(this.state);
      })
  }

  componentDidMount() {
    this.setInitMenu();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { draftMenu } = this.state;
    draftMenu.id = Math.floor(Math.random() * 2000);
    Axios.post('http://localhost:3030/menu', {
      id: draftMenu.id,
      nama: draftMenu.nama,
      harga: draftMenu.harga
    })
    .then(res => {
      console.log(res.data);
      this.setInitMenu();
    });
    
    this.setState({
      draftMenu: {
        nama: '', harga: ''
      }
    })
    console.log(this.state);
  }

  handleChange = (value, type) => {
    let { draftMenu } = this.state;
    draftMenu[type] = value;
    this.setState({ draftMenu })
    console.log(this.state.draftMenu)
  }

  render() {
    return (
      <div className='row'>
        <div className="col m4">
          <h2>Daftar Menu</h2>
          <MenuView menuView={this.state.initMenu} />
        </div>
        <div className="col m8">
          <h2>Tambah Menu</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="input-field">
              <input
                type="text" name="nama" id="nama" className="validation" value={this.state.draftMenu.nama}
                onChange={(e) => { this.handleChange(e.target.value, 'nama') }}
              />
              <label htmlFor="nama">Nama</label>
            </div>
            <div className="input-field">
              <input
                type="number" name="harga" id="harga" className="validation" value={this.state.draftMenu.harga}
                onChange={(e) => { this.handleChange(parseInt(e.target.value, 10), 'harga') }}
              />
              <label htmlFor="harga">Harga</label>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    )
  }

}
