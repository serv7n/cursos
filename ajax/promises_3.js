aleatorio = (min, max) => {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
};
espera = (frase, tempo) => {
  return new Promise((resolve, reject) => {
    if (typeof frase != "string") {
      reject("E diferente de string");
      return;
    }
    setTimeout(() => {
      resolve(frase);
      return;
    }, tempo);
  });
};

// espera("frase", aleatorio(3, 1))
//   .then((msg) => {
//     console.log(msg);
//     return espera("frase1", aleatorio(2, 3));
//   })
//   .then((msg) => {
//     console.log(msg);
//     return espera(2, aleatorio(2, 3));
//   })
//   .then((msg) => {
//     console.log(msg);
//     return espera("frase3", aleatorio(2, 3));
//   })
//   .then(() => {
//     console.log("fim");
//   })

//   .catch((e) => {
//     console.log(`Erro do tipo ${e}`);
//   });

// promisse.all promisse
// const promisess = [
//   espera("Promise", 200),

//   espera("Promise2", rand(2,3)),
//   espera("Promise", rand(1,3)),
//   espera("promissse", rand(2,4)),
//   espera("1", 313),
//   "outro",
//   espera(3, 313),
// ];

// Promise.all(promisess).then((valor)=>{
//   console.log(valor)
// }).catch((erro)=>{
//   console.log(erro)
// })

// Promise.race(promisess)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

  // race e all sao diferentesss race faz todas a promissess ate um erro
  // all resolve mas e tiver 1 erro da tudo errado  1

  function baixa(){
    const cache = false;
    if(cache){
      return Promise.resolve('pronto') // ou Promise
    }
    else{
      return espera('abaixar a pagina',3201)
    }
  }

  baixa().then((e)=>{
    console.log(e)
  }).catch(e=>{
    console.log(e)
  })