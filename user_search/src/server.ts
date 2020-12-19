import { createConnection } from 'typeorm'

import { app } from "./app";


createConnection().then(()=>{
    app.listen(3330,()=>{
        console.log('Running On Port 3330');
    })
}).catch(err=>{
    console.log(err);
    
})