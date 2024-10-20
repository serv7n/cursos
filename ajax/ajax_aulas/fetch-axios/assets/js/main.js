// fetch("pessoas.json")
//   .then((resposta) => {
//     return resposta.json();
//   })
//   .then((json) => {
//     carregaPessoaPagina(json);
//   });

axios('pessoas.json').then(resposta => carregaPessoaPagina(resposta.data));
function carregaPessoaPagina(json) {
  const table = document.createElement("table");
  tr = `<tr>
    <td>NOME:</td>
    <td>IDADE:</td>
    </tr>
  `;

  table.innerHTML = tr;
  document
    .querySelector(".resultado")
    .insertAdjacentElement("afterbegin", table);
   for (let pessoa of json) {
      const tr = document.createElement('tr');

      td = document.createElement('td')
      td.innerText = pessoa.nome
      tr.appendChild(td)
      
      td = document.createElement('td')
      td.innerText = pessoa.idade
      tr.appendChild(td)

      table.appendChild(tr)
    }

}
