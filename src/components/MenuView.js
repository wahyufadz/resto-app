import React from 'react'

export default ({menuView,selection = 'with onClick',type}) => {
  /**
  |--------------------------------------------------
  | menuView = data state from availableMenu or chosenMenu
  | selection = switch if we use onClick event or not
  | type = parameter we use in onclick event
  |--------------------------------------------------
  */
	const MenuList = menuView.length ?
    menuView.map(
      menu=> {
        if(selection==='with onClick'){
          //with onClick event to move state data from availableMenu to chosenMenu
          return (
            <div className="collection-item" key={menu.id} onClick={()=>(selection(menu.id,type))}>{menu.nama}</div> 
          )
        }else{
          //without onClick event
          return (
            <div className="collection-item" key={menu.id}>{menu.nama}</div> 
          )
        }
      }
    ):(
      <div className="collection-item">Kosong</div>
    );

	return (
		<div className='collection'>
		{MenuList}
		</div>
	)
}
			