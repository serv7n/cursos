rand = (min=0, max=3) => {
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

  async function execulta(){
    try{

        const fase1 = await espera('fase1',rand())
        console.log(fase1)
        const fase2 = await espera('fase2',rand())
        console.log(fase2)
        const fase3 = await espera('fase3',rand())
        console.log(fase3)
        const fase4 = await espera('fase4',rand())
        console.log(fase4)
        const fase5 = await espera(2,rand())
        console.log(fase5)
    } catch(e){
        console.log(e)
    }
}
execulta()