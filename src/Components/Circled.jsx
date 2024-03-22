import React from 'react'
import CircleProgressBar from './CircleProgessBar'

export default function Circled() {
  return (
    <div className="outter">
        <div className="inner1">
          <CircleProgressBar
            progress="62"
            strokeWidth="5"
            radius="50"
            color={"#FF708B"}
          />
        </div>
        <div className="inner2">
          <CircleProgressBar
            progress="85"
            strokeWidth="5"
            radius="35"
            color={"#FFBA69"}
          />
        </div>
        <div className="inner3"></div>

      </div>
  )
}