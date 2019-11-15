import React, { useRef, useEffect } from "react"
import TypeIt from "typeit"
import { timingSafeEqual } from "crypto"

const Typeit = ({
  strings = "",
  speed = 80,
  waitUntilVisible = true,
  nextStringDelay = 80,
  terminate = false,
  done = () => null,
}) => {
  const container = useRef(null)
  useEffect(() => {
    if (container.current !== null) {
      new TypeIt(container.current, {
        strings: Array.isArray(strings)
          ? strings.map(s => {
              if (s == "") {
                s = " "
              }
              return s
            })
          : strings,
        speed,
        nextStringDelay,
        waitUntilVisible,
        lifeLike: true,
        afterComplete: instance => {
          done()
          if (terminate) {
            instance.destroy(true)
          }
        },
      }).go()
    }
  }, [container])
  return <div ref={container}></div>
}

export default Typeit
