import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import Children from "./Children.client"

const Note = () => {
  const [note, setNote] = useState<any>("")
  useEffect(() => {
    setNote(axios.get("/api/items/v1/hot/"))
  }, [])

  return (
    <>
      <Children />
      {note.toString()}
    </>
  )
}

export default Note
