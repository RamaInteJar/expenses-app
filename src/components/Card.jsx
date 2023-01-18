import React from 'react'

const Card = (props) => {

  return (
    <div className="bg-gray-900 min-h-screen lg:w-3/4 w-full p-2 mx-auto items-center mt-6 overflow-x-hidden rounded-xl">
         {props.children}
    </div>
  )
}

export default Card;