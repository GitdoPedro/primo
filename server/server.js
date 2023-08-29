const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:3000'}})

const PORT = 3001



io.on('connection', socket =>{

    socket.on('set_primo', (primo)  =>{

        var resultado;
        EhPrimo(Number(primo))? resultado = 'É primo' : resultado = 'Não é primo'

        io.emit('emitResultado',{
            primoId: socket.id,
            primo,
            resultado
        })
    })
})



const EhPrimo = (number) =>{
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }
  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
}






server.listen(PORT, () => console.log('Server runing....'))




