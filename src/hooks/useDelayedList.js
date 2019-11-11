import { useState, useEffect } from "react"
import PromiseQueue from "easy-promise-queue"

import { random } from "../utils/utils"

export function useDelayedList(items) {
  const [list, setList] = useState([])
  const pq = new PromiseQueue({ concurrency: 1 })

  useEffect(() => {
    items.forEach(item =>
      pq.add(
        () =>
          new Promise(resolve => {
            setTimeout(() => {
              setList(list => [...list, item])
              resolve()
            }, item.delay || random(100, 900))
          })
      )
    )
  }, [])

  return list
}
