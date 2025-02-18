import { EventEmitter } from 'events';

//Crear una instancia de EventEmitter
const emisor = new EventEmitter();

//Definir un evento personalizado
emisor.on('saludo', (Gabriel) => {
    console.log('¡Hola, ${Gabriel}!');
});

//Definir un evento 'Saludo'
emisor.emit('saludo' , 'Mundo');
