const drag = (event) => {
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.setData("textAll", event);
};

const drop = (event) => {
  event.preventDefault();

  const res = event.target.id;

  const el = document.querySelector(`label#${res}`);
  el.innerHTML = "";
  // console.log(el)

  let data = event.dataTransfer.getData("text");

  var labelElement = document.getElementById(data);
  let no = labelElement.innerHTML;
  let node = document.createTextNode(no);

  event.target.appendChild(node);

  // console.log(no)
  // console.log(node)
};

const allowDrop = (event) => {
  event.preventDefault();
};
