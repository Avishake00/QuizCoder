import React from 'react'

import { Audio } from "react-loader-spinner";

const Loader = ({text}) => {
  return (
    <div className="flex items-center">

    <p className="font-semibold text-sm mt-2 mr-1 ">{text}</p>
        <Audio
            height="20"
            width="20"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
            />
    </div>
  )
}

export default Loader