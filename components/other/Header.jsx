import React, { useEffect, useState } from 'react'
import { setLocalstorage } from '../../utils/localStorage'

const Header = (props) => {
  
const [username, setUsername] = useState('')

useEffect(() => {
  console.log("Received props:", props);
  if (props?.firstName) {
    console.log("Setting username:", props.firstName);
    setUsername(props.firstName);
  }
}, [props]);

const logOutUser=()=>{
localStorage.setItem('loggedInUser','')
props.changeUser('')

}

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-3xl font-medium text-black'>Hello, Admin<br /> <span className='text-3xl font-semibold'></span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
