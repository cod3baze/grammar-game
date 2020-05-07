let currentItemIndexF = 0,
  currentItemIndexS = 1,
  maxF = 0,
  maxS = 0;

function deletePreviousElements() {
  const element = document.querySelectorAll("#words p#word");
  element[0].remove();
  element[1].remove();
}
window.deletePreviousElements = deletePreviousElements;

const dinamicItems = () => (items = document.querySelectorAll("#words p"));
function switcher() {
  // console.log("---- fn(TROCAR) ----");
  let items = dinamicItems();
  (maxF = items.length), (maxS = items.length);

  items[currentItemIndexF].classList.remove("actived");
  items[currentItemIndexS].classList.remove("actived");

  currentItemIndexF += 2;
  currentItemIndexS += 2;

  if (currentItemIndexF >= maxF && currentItemIndexS >= maxS) {
    currentItemIndexF = 0;
    currentItemIndexS = 1;
  }

  items[currentItemIndexF].classList.add("actived");
  items[currentItemIndexS].classList.add("actived");

  deletePreviousElements();
}
window.switcher = switcher;

function createElement(className, nodeText) {
  let elementX = document.createElement("p");
  elementX.setAttribute("id", "word");
  elementX.setAttribute("class", className);
  elementX.appendChild(document.createTextNode(nodeText));

  return elementX;
}
window.createElementX = createElement;
