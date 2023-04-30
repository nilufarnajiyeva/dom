// let h1=document.createElement("h1")
// h1.innerText="Məhərrəm";
// let attr=document.createAttribute("style");
// attr.value="color:red;text-decation:underline;"
// h1.setAttributeNode(attr);

// document.body.append(h1)
// console.log(h1)

var textInput = document.querySelector('input[type="text"]');
var colorInput = document.querySelector('input[type="color"]');
var button = document.querySelector("button");

button.onclick = function() {
  var text = textInput.value;
  var p = document.createElement("p");
  p.textContent = text;
  p.style.color = colorInput.value;
  document.body.appendChild(p);
  textInput.value = "";
};




