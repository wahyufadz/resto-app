import React from 'react'

export default ({chosenMenu,deselectMenu}) => {
	// console.log(chosenMenu);

	const ChosenMenuList = chosenMenu.length?
	chosenMenu.map(
		menu=> ( 
			<div className="collection-item" key={menu.id} onClick={()=>(deselectMenu(menu.id))}>{menu.nama}</div> 
		)
	):(
		<div className="collection-item">
			<h5 className="red-text">Tidak Ada Menu Yang Terpilih</h5>
		</div>
	);

	return (
		<div className='collection'>
		{ChosenMenuList}
		</div>
	)
}
			