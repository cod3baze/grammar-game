const words = [
  {
    type: "x",
    0: "engraxate",
    1: "ameixa",
    2: "enxergar",
    3: "baixo",
    4: "enxerido",
    5: "enxaqueca",
    6: "faixa",
    7: "xenofobia",
    8: "roxo",
    9: "paradoxo",
  },
  {
    type: "ch",
    0: "fechadura",
    1: "cochilar",
    2: "chiar",
    3: "inchado",
    4: "recauchutar",
    5: "machismo",
    6: "fechamento",
    7: "acolchoado",
    8: "escrachado",
    9: "mochila",
  },
];

const populate = {
  round: {
    acerts: {
      x: 0,
      ch: 0,
      j: 0,
      g: 0,
    },
    errors: {
      x: 0,
      ch: 0,
      j: 0,
      g: 0,
    },
  },
};

// variáveis globais
var createElementX = window.createElement;
const listElements = document.querySelector("div#words");
var switcherX = window.switcher;

function final(res) {
  window.openCardOfRules();

  const elemenID = document.querySelector("#resID");
  const elementTime = document.querySelector("#resTime");
  const elementCertas = document.querySelector("#resCerts");
  const elementErradas = document.querySelector("#resErrors");
  const elementTotal = document.querySelector("#resPoints");

  const {
    acerts: { x: a, ch: b },
  } = populate.round;

  const {
    errors: { x, ch },
  } = populate.round;

  const totA = parseInt(a) + parseInt(b);
  const totE = parseInt(x) + parseInt(ch);

  elementID.innerHTML = localStorage.getItem("user") || Math.random() * 10;
  elementCertas.innerHTML = totA;
  elementErradas.innerHTML = totE;
  elementTotal.innerHTML = totA - totE;

  return res;
}

// grava o history do usuario no navegador
function setINglobal(name, value) {
  localStorage.setItem(name, value);
}
function getINglobal(name) {
  if (localStorage.getItem(name)) return localStorage.getItem(name);

  return 0;
}

// retorna os elementos atualizados
const getElements = () =>
  (wordElements = document.querySelectorAll("#words p#word"));

// compara o elemento com a sua determinada lista: (element: [...])
// true: a resposta está certo. false: errou a resposta
const handle_acerts = (wrd, list) => {
  const cert = list.filter((word) => word === wrd);

  return cert.length === 0 ? false : true;
};

// pega o tipo e retorna a lista para comparar o elemento
// retorna todas palavras do tipo do elemento
const getTypeAndReturnWordsToCompare = (tp) => {
  const type = tp;

  if (type === "x") return Object.values(words[0]);
  if (type === "ch") return Object.values(words[1]);
  if (type === "J") return Object.values(words[2]);
  if (type === "G") return Object.values(words[3]);
};

// pega os dois elementos: tipos e as palavras que cada elemento tem
const getWordsEelemnts = () => {
  const [first, second] = getElements();

  // tipos
  let typeF = first.classList.contains("x") ? "x" : null;
  let typeS = second.classList.contains("ch") ? "ch" : null;
  // palavras
  let x = first.innerHTML;
  let ch = second.innerHTML;

  return [
    { type: typeF, element: x },
    { type: typeS, element: ch },
  ];
};

function createDinamicElements(list) {
  let vezes = parseInt(getINglobal("vezes"));

  let elementX = createElementX("x", words[0][vezes]);
  let elementCH = createElementX("ch", words[1][vezes]);

  listElements.appendChild(elementX);
  listElements.appendChild(elementCH);

  vezes++;
  console.log(vezes);
  setINglobal("vezes", vezes);

  if (vezes >= 10) {
    setINglobal("vezes", "1");
    final();
  }

  window.switcher();
}

const start = () => {
  /**
   * pegar o valor do elemento e o seu tipo
   * verificar se acertou as duas frase
   * gravar no populate
   */
  const [x, ch] = getWordsEelemnts();

  const listX = getTypeAndReturnWordsToCompare(x.type);
  const listCH = getTypeAndReturnWordsToCompare(ch.type);

  const resultX = handle_acerts(x.element, listX);
  const resultCH = handle_acerts(ch.element, listCH);

  switch (resultX) {
    case true:
      populate.round.acerts.x += 1;
      break;
    case false:
      populate.round.errors.x += 1;
    default:
      break;
  }

  switch (resultCH) {
    case true:
      populate.round.acerts.ch += 1;
      break;
    case false:
      populate.round.errors.ch += 1;
    default:
      break;
  }

  /**
   * criar duas outras frases
   * apagar as duas anteriores
   * e mudar para as novas frases criadas
   */

  createDinamicElements();
};
