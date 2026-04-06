import React, { use, useState } from 'react'

const Section2 = () => {
  const [name, setName] = useState("")
  const submitHandler =(e) => {
    e.preventDefault()
    console.log("submit form",name)
  }
  return (
    <div className='h-screen w-full bg-blue-500'>
      <form  onSubmit={e => {
        submitHandler(e)
      }}>
        <input value={name} onChange={(e) => setName(e.target.value)} className='border border-r-2' type='text' placeholder='enter your name '/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default Section2
