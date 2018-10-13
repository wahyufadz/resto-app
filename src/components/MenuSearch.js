import React from 'react'

export default ({menuSearch}) => {
  return (
    <div className='input-field'>
      <input type="text" id="searchMenu" className="validate" onChange={(e)=>menuSearch(e.target.value.toLowerCase())}/>
      <label htmlFor="searchMenu">Search Menu</label>
    </div>
  )
}