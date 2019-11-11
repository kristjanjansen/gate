import React, { useRef, useEffect } from "react"
import TypeIt from "typeit"
import { timingSafeEqual } from "crypto"

const Typeit = ({
  strings = "",
  speed = 50,
  waitUntilVisible = true,
  nextStringDelay = 50,
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
          //Temporary fix (afterComplete() does not emit)
          done()
          if (terminate) {
            instance.destroy(true)
          }
        },
        // afterString: (step, queue, instance) => {
        //   //Temporary fix (afterComplete() does not emit)
        //   if (step[2].isLast) {
        //     done()
        //     if (terminate) {
        //       instance.destroy(true)
        //     }
        //   }
        // },
      }).go()
    }
  }, [container])
  return <div ref={container}></div>
}

export default Typeit
