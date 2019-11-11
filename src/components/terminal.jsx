import React, { useRef, useEffect } from "react"

const Terminal = ({ children }) => (
  <div
    style={{
      height: "25ch",
      width: "80ch",
      overflow: "scroll",
      backgroundColor: "hsl(208,20%,18%)",
      fontFamily: "Cousine",
      color: "white",
      fontSize: "14px",
      whiteSpace: "pre-wrap",
      padding: "20px",
      lineHeight: "20px",
      borderRadius: "3px",
    }}
  >
    {children}
  </div>
)

export default Terminal
