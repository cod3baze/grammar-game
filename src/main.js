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

const getTypeAndReturnWordsToCompare = (tp) => {
  const type = tp;

  if (type === "x") return Object.values(words[0]);
  if (type === "CH") return Object.values(words[1]);
  if (type === "J") return Object.values(words[2]);
  if (type === "G") return Object.values(words[3]);
};

const handle_acerts = (wrd, words) => {
  const cert = words.filter((word) => {
    return word === wrd;
  });

  console.log(cert.length);

  return cert.length !== 0 ? false : true;
};

const getWordsEelemnts = () => {
  const [first, second] = wordElements;

  // tipos | palavras
  let typeF = first.classList.contains("x") ? "x" : null;
  let typeS = second.classList.contains("ch") ? "ch" : null;
  let x = first.innerHTML;
  let ch = second.innerHTML;

  console.log(handle_acerts("eknwsdc", ["enchada", "engraxate"]));
};
