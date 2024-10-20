aleatorio = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
espera = (frase, tempo) => {
  return new Promise((resolve, reject) => {
    if(typeof(frase) !="string"){
        reject('E diferente de string')
    }
      setTimeout(() => {
       
        resolve(frase);
      }, tempo);

  });
};


espera('frase', aleatorio(3,1))
.then((msg) =>{
    console.log(msg)
    return espera('frase1', aleatorio(2,3))
})
.then((msg)=>{
    console.log(msg)
    return espera(2, aleatorio(2,3))
    
})
.then((msg)=>{
    console.log(msg)
    return espera('frase3', aleatorio(2,3))
}).then(()=>{
    console.log('fim')
})

.catch(e=>{
    console.log(`Erro do tipo ${e}`)
})