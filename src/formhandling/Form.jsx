import React from 'react'

const Form = () => {
    const submitHandler = () => {
        console.log("form submit")
    }
  return (
    <div className='h-screen w-full bg-red-500' >
      <form  onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
