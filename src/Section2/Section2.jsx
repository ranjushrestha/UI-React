import React, { use, useState } from 'react'

const Section2 = () => {
  const [name, setName] = useState("")
  const submitHandler =(e) => {
    e.preventDefault()
    if(name){
      console.log("submit form",name)
    } else {
      console.log("enter a name")
    }
    
    setName('')
  }
  return (
    <div className='h-screen w-full px-10 py-10 bg-blue-500'>
      <form className=' w-50 flex flex-col' onSubmit={e => {
        submitHandler(e)
      }}>
        <input value={name} onChange={(e) => setName(e.target.value)} className='border rounded-xl mb-5 px-8 py-5' type='text' placeholder='enter your name '/>
        <button className='border rounded-xl'>submit</button>
      </form>
    </div>
  )
}

export default Section2
