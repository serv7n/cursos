aleatorio = (min, max) => {
  min *= 1000;
  max *= 1000;
  Math.floor(Math.random() * (max - min) + min);
};
espera = (frase, tempo, cb) => {
  setTimeout(() => {
    console.log(frase);
    if (cb) cb();
  }, tempo);
};

espera("Ola1", aleatorio(1, 2, ()=>{
    espera("Ola2", aleatorio(1, 2, ()=>{
        espera("Ola3", aleatorio(1, 2));

    }));

}));
