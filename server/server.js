const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const PrimoModel = require('./models/primoModel');
const primoRoutes = require('./config/routes'); 

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: 'http://localhost:3000' } });

app.use(bodyParser.json());

const PORT = 3001;



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





const Primo = PrimoModel(sequelize, sequelize.Sequelize.DataTypes);
sequelize.sync().then(() => {
   app.use('/api/primo', primoRoutes);
  server.listen(PORT, () => console.log('Server running....'));
}).catch((error) => {
  console.error('Error initializing the database:', error);
});


