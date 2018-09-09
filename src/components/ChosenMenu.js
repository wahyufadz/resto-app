import React from 'react'

export default ({chosenMenu,selection}) => {
	// console.log(chosenMenu);

	const ChosenMenuList = chosenMenu.length?
	chosenMenu.map(
		menu=> ( 
			<div className="collection-item" key={menu.id} onClick={()=>(selection(menu.id,'de'))}>{menu.nama}</div> 
		)
	):(
		<div className="collection-item">Tidak Ada Menu Yang Terpilih</div>
	);

	return (
		<div className='collection'>
		{ChosenMenuList}
		</div>
	)
}
			