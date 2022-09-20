import React from 'react'
import sideLogo from './img/react.svg'
const List = () => {
  return (
    <div className='list'>
      <img className='list__sideLogo' src={sideLogo} alt="sidelogo" />
     <h1 className='facts__heading'>Fun facts about React</h1>
     <ul className='facts__ul'>
      <li className='facts__li'>Was first released in 2013</li>
      <li className='facts__li'>Was originally created by Jordan Walke</li>
      <li className='facts__li'>Has well over 100K stars on GitHub</li>
      <li className='facts__li'>Powers thousands of enterprise apps, including mobile apps</li>
     </ul>
    
    </div>
  )
}

export default List