const words = [
  {
    type: "x",
    0: "engraxate",
    1: "enxate",
    2: "enxergar",
  },
  {
    type: "ch",
    0: "fechadura",
    1: "cochilar",
    2: "chiar",
  },
];

const wordElements = document.querySelectorAll("#word");

// retorna os dois elementos atualizados
function getElements() {
  const wordElements = document.querySelectorAll("#word");
}

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
  const [first, second] = wordElements;

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

const start = () => {
  const [x, ch] = getWordsEelemnts();

  const listX = getTypeAndReturnWordsToCompare(x.type);
  const listCH = getTypeAndReturnWordsToCompare(ch.type);

  const resultX = handle_acerts(x.element, listX);
  const resultCH = handle_acerts(ch.element, listCH);

  console.log("-------- elements ad typs ----------");
  console.log(x.element, x.type);
  console.log(ch.element, ch.type);
  console.log("----- resultX : resultCH -----------");
  console.log(resultX, resultCH);
};
