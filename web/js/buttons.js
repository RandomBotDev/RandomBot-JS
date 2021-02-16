function btncon() {
  btndiv = document.getElementById("btns")
  btninv = document.getElementById("btninv")
  btnhelp = document.getElementById("btnhelp")
  btnslash = document.getElementById("btnslash")
  btnnormal = document.getElementById("btnnormal")
  btnmain = document.getElementById("btnmain")
  if (btndiv.style.width === "120px") {
    btndiv.style.width = "200px"; 
    btndiv.style.height = "250px";
    btninv.style.visibility = "visible";
    btnhelp.style.visibility = "visible";
    btnslash.style.visibility = "visible";
    btnnormal.style.visibility = "visible";
    btnmain.innerHTML = "Hide buttons";
  } else {
    btndiv.style.width = "120px"; 
    btndiv.style.height = "20px";
    btninv.style.visibility = "hidden";
    btnhelp.style.visibility = "hidden";
    btnslash.style.visibility = "hidden";
    btnnormal.style.visibility = "hidden";
    btnmain.innerHTML = "Show buttons";
  }
}

function btnload() {
  btninv = document.getElementById("btninv")
  btnhelp = document.getElementById("btnhelp")
  btnslash = document.getElementById("btnslash")
  btnnormal = document.getElementById("btnnormal")
  btninv.style.visibility = "hidden";
  btnhelp.style.visibility = "hidden";
  btnslash.style.visibility = "hidden";
  btnnormal.style.visibility = "hidden";
}