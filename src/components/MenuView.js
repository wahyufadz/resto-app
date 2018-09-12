import React from 'react'

export default ({menuView, selection = false, onClickType = 'select'}) => {
  /**
  |--------------------------------------------------
  | menuView = data state from availableMenu or chosenMenu
  | selection = switch if we use onClick event or not (false / props.selection(id))
  | onClickType = parameter we use in onClick event ('select' / 'deselect')
  |--------------------------------------------------
  */
	const MenuList = menuView.length ?
    menuView.map(
      menu=> {
        if(selection!==false){
          //with onClick event to move state data from availableMenu to chosenMenu
          return (
            <div className="collection-item" key={menu.id} onClick={()=>(selection(menu.id,onClickType))}>{menu.nama}</div> 
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
			