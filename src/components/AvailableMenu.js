import React from 'react'

export default ({availableMenu,selection}) => {
	// console.log(availableMenu);

	const AvailableMenuList = availableMenu.length?
	availableMenu.map(
		menu=> ( 
			<div className="collection-item" key={menu.id} onClick={()=>(selection(menu.id))}>{menu.nama}</div> 
		)
	):(
		<div className="collection-item">
			<h5 className="red-text">Semua Menu Telah Terpilih</h5>
		</div>
	);

	return (
		<div className='collection'>
		{AvailableMenuList}
		</div>
	)
}
			