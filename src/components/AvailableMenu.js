import React from 'react'

export default ({availableMenu,selection}) => {
	// console.log(availableMenu);

	const AvailableMenuList = availableMenu.length?
	availableMenu.map(
		menu=> ( 
			<div className="collection-item" key={menu.id} onClick={()=>(selection(menu.id))}>{menu.nama}</div> 
		)
	):(
		<div className="collection-item">Semua Menu Telah Terpilih</div>
	);

	return (
		<div className='collection'>
		{AvailableMenuList}
		</div>
	)
}
			