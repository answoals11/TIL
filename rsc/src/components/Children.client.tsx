import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"

const Children = () => {
  const [note, setNote] = useState<any>("")
  useEffect(() => {
    setNote(axios.get("/api/items/v1/hot/"))
  }, [])

  return <React.Fragment>{note.toString()}</React.Fragment>
}

export default Children
