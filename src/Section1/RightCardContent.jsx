import React from 'react'

const RightCardContent = ({user}) => {
  return (
       <div className="absolute top-0 left-0 h-full w-full  flex flex-col justify-between px-6 py-4">
        <h2 className="h-8 w-8 rounded-full  bg-white flex items-center justify-center">
          2
        </h2>
        <div>
          <p className="text-white mb-5">
            {user.intro}
          </p>
          <div className="flex justify-between   ">
          <button className="bg-gray-400 px-3 rounded-full text-sm font-medium text-white" >{user.tag}</button>
          <button className="bg-gray-400 px-2 rounded-full text-white">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
        </div>
        
      </div>
  )
}

export default RightCardContent
