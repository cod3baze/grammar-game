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

const getWordsEelemnts = () => {
  const [first, second] = wordElements;

  const typeF = first.classList.contains("x");
  const typeS = second.classList.contains("ch");

  let x = first.innerHTML;
  let ch = second.innerHTML;
};
