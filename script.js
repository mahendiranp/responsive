function sortContent(){
var list, i, switching, b, shouldSwitch;
  list = document.querySelector('.left-panel');
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("div");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (Number(b[i].innerHTML) > Number(b[i + 1].innerHTML)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function shuffleContent(){
    var ul = document.querySelector('.left-panel');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}