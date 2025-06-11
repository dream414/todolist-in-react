import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row border-1 border-amber-300 bg-purple-700 text-amber-50 justify-between'>
<div className='font-bold text-sm mx-3 '> To Do App</div>
<div className='font-light text-xs  flex  list-none mx-3.5 cursor-pointer gap-2 '> 
  <li>Home</li>
  <li>Your Task </li>
</div>

    </div>
  )
}

export default Navbar
