const { io } = require('../index')

//Socket
io.on('connection', client => {
    
    console.log('Cliente Conectado');
  
    client.on('mensaje', (data)=>{
      console.log(data);
  
      io.emit('mensaje', {admin:'Nuevo Mensaje'});
    })
  
    client.on('disconnect', () => { 
  
      console.log('Cliente desconectado.');
  
    });
  });
  