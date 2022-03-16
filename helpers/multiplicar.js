const fs = require('fs');



let salida = '';
const crearArchivo = async(base, listar = false)=>{
    try{
    
                for(let i=0;i<=9;i++){
                     salida += (`${base} * ${i+1} = ${(i+1)*base}\n`);
                }
                if(listar ){
                    console.log('=========================')
                    console.log(`===== TABLA DEL ${base} =======`)
                    console.log('=========================')
                    console.log(salida)
                }
                
                fs. writeFileSync(`Tabla-${base}.txt`, salida);
                return `Tabla del ${base}.txt creada`
                
            
        
    }catch(err){
        throw err
    }
}








/* 
const crearArchivo = (base = 5) =>{
    console.log('=========================');
    console.log(`===== TABLA DEL ${base} =======`);
    console.log('=========================');
    
    let salida = '';
    for(let i=0;i<=9;i++){
        salida += (`${base} * ${i+1} = ${(i+1)*base}\n`);
    
    }
    console.log(salida);
    fs. writeFileSync(`Tabla-${base}.txt`, salida);
    console.log (`Tabla del ${base}.txt creada`)

} */



module.exports = {
    crearArchivo
}


