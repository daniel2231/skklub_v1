import Shuffle from "shufflejs";

var Shuffle = window.Shuffle;
var element = document.querySelector(".gallery");

var shuffleInstance = new Shuffle(element, {
  itemSelector: ".gallery-item"
});
// shuffleInstance.filter('animal');
$("#all").on("click", function() {
  shuffleInstance.filter();
});
$("#yy").on("click", function() {
  shuffleInstance.filter("yy");
});
$("#py").on("click", function() {
  shuffleInstance.filter("py");
});
$("#btn-yy").on("click", function() {
  shuffleInstance.filter("yy");
});
$("#btn-bs").on("click", function() {
  shuffleInstance.filter("bs");
});
$("#btn-cg").on("click", function() {
  shuffleInstance.filter("cg");
});
$("#btn-sp").on("click", function() {
  shuffleInstance.filter("sp");
});
$("#btn-jg").on("click", function() {
  shuffleInstance.filter("jg");
});
$("#btn-hb").on("click", function() {
  shuffleInstance.filter("hb");
});
$("#btn-is").on("click", function() {
  shuffleInstance.filter("is");
});
