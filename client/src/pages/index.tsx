"use client"

import {useState} from 'react'


import Primo from '../components/Primo'
import Resultado from '../components/Resultado'


export default function Home() {
  const [socket, setSocket] = useState(null)

  return (
    <div>
      <Primo setSocket={setSocket}/>
      {socket && <Resultado socket={socket} />}
    </div>

  )
}
