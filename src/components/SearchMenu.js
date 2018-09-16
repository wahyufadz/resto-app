import React from 'react'

export default ({searchMenu}) => {
  return (
    <div className='input-field'>
      <input type="text" id="searchMenu" className="validate" onChange={(e)=>searchMenu(e.target.value.toLowerCase())}/>
      <label htmlFor="searchMenu">Search Menu</label>
    </div>
  )
}
