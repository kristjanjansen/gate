import React, { useRef, useEffect } from "react"
import TypeIt from "typeit"

import Terminal from "./terminal"

const Typeit = ({ strings = "", speed = 50, waitUntilVisible = false }) => {
  const container = useRef(null)
  useEffect(() => {
    if (container.current !== null) {
      const a = new TypeIt(container.current, {
        strings,
        speed,
        waitUntilVisible,
      }).go()
    }
  }, [container])
  return (
    <Terminal>
      <div ref={container}>aa</div>
    </Terminal>
  )
}

export default Typeit
