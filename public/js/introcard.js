document.querySelector(".py").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구9";
});
document.querySelector(".yy").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";

  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구8";
});
document.querySelector(".bs").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";

  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구7";
});
document.querySelector(".cg").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";

  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구6";
});
document.querySelector(".sp").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구5";
});
document.querySelector(".jg").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";

  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구4";
});
document.querySelector(".hb").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";

  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구3";
});
document.querySelector(".is").addEventListener("click", function() {
  document.querySelector(".introCard").style.display = "";
  document.querySelector("#introText").innerHTML = "이 분과는 어쩌구 저쩌구2";
});
document.querySelector(".all").addEventListener("click", function() {
  checkState();
});

let activeCheck = document.querySelector("#check").className;

let checkState = () => {
  if ((activeCheck = "active")) {
    document.querySelector(".introCard").style.display = "none";
  }
};

checkState();
