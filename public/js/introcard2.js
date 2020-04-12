document.querySelector(".py").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".yy").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".bs").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".cg").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".sp").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".jg").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".hb").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".is").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "";
    document.querySelector("#introText").innerHTML = "";
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
  