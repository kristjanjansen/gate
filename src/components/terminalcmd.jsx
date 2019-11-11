import React, { useState } from "react"

import Typeit from "./typeit"
import Terminal from "./terminal"

import { useDelayedList } from "../hooks/useDelayedList"
import { random } from "../utils/utils"

const TerminalCmd = ({ cmd = "", logs = [] }) => {
  const delayedList = useDelayedList(
    logs.map(row => ({ row, delay: random(50, 500) }))
  )

  const [cmdDone, setCmdDone] = useState(false)
  return (
    <Terminal>
      <div style={{ display: "flex" }}>
        ${" "}
        <Typeit strings={cmd} done={() => setCmdDone(true)} terminate={true} />
      </div>
      {cmdDone &&
        delayedList.map(({ row }, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: row }} />
        ))}
    </Terminal>
  )
}

export default TerminalCmd
