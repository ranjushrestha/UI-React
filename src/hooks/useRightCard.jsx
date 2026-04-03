import { useContext } from "react";
import {RightCardContext} from '../context/RightCardContext'

import React from 'react'

const useRightCard = () => {
     const context = useContext(RightCardContext)
     if(context === null) {
        throw new Error("useRightCard must be inside RightCardProvider")
     }
  return context
}

export default useRightCard

