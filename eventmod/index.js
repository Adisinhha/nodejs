const EventEmitter = require('events');
  const event = new EventEmitter();
  event.on('Say My Name',()=>{
    console.log('Your Name is Adi Sinha')
  });
  event.on("hii",(sc , msg)=>{
    console.log(`Hello welcome to Our server ${sc} and ${msg}`);
  }

  )
// event.emit('Say My Name');
event.emit('hii',200,'okk');