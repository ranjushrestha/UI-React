import React from 'react'
import RightCard from './RightCard'

const RightContent = ({users}) => {
  return (
    <div id='right' className='h-full w-3/4 flex gap-5 overflow-x-auto flex-nowrap  px-6 py-8'>
     {users.map((user, idx) => (
       <RightCard user={user} key={idx} />
     ))}
    </div>
  )
} 

export default RightContent
