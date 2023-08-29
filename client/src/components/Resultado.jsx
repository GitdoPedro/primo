import {useState,useEffect} from 'react'


export default function Resultado({socket}){

    const [primoList,setPrimoList] = useState([])
     
    useEffect(()=>{
        socket.on('emitResultado', data => {
            setPrimoList((current) => [...current,data])
        })
        

        return () => socket.off('emitResultado')
    },[socket])


    return (
        <div>
            <ul>
                {
                primoList.map((numero,index) => (
                        <li key={numero.primoId}>{numero.primo} {numero.resultado}</li>
                    ))
                }  
            </ul> 
        </div>
      
    )
  }
  