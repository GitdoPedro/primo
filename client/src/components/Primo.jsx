import {useRef} from 'react'
import io from 'socket.io-client'



export default function Primo({setSocket}){

    const primoRef = useRef()

    const handleSubmit =  async () => {
        const primo = primoRef.current.value
        if(!primo.trim()) return;
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_primo',primo)
        setSocket(socket)
        clearInput()
        
    }

    const clearInput = () => {
        primoRef.current.value = ''
      }

     
    return (
        <div>
            <h1>Teste Número Primo</h1>
            <input type="number" required ref={primoRef}/>
            <button onClick={()=>handleSubmit()}>Primo?</button>
        </div>
      
    )
  }3
  