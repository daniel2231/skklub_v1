document.querySelector(".yy").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "연행예술";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".py").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "평면예술";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".kk").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "과학기술";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".cg").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "취미교양";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".sh").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "사회";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".jg").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "종교";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".hs").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "학술";
    document.querySelector("#introText").innerHTML = "";
  });
  document.querySelector(".kc").addEventListener("click", function() {
    document.querySelector(".introCard").style.display = "건강체육";
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
  