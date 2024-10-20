document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  e.preventDefault();
  if (tag == "a") {
    carregaPagina(el);
  }
});

function carregaPagina(el) {
  const href = el.getAttribute("href");

  fetch(href)
    .then((response) => {
      if (response.status !== 200) throw new erro(`erro 404`);
      return response.text();
    })
    .then((html) => {
      carregaResultado(html);
    })
    .catch((erro) => {
      console.warn(erro);
    });
}
carregaResultado = (response) => {
  const resultado = document.querySelector(".result");

  resultado.innerHTML = response;
};
