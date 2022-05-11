const brewingSimulator = document.querySelector(".brewing__simulator");
const brewingTables = brewingSimulator.querySelector(".brewing__tables");
const brewingTable = brewingTables.querySelector(".brewing__table");
const brewingBottle = brewingTables.querySelector(".brewing__bottle");

const templateSuslo = brewingSimulator.querySelector("#suslo").content;
const templateAgua19L = brewingSimulator.querySelector("#agua19L").content;
const templateAgua2L = brewingSimulator.querySelector("#agua2L").content;
const templateHeating = brewingSimulator.querySelector("#heating").content;
const templateWeat = brewingSimulator.querySelector("#weat").content;

const button2L = document.querySelector(".brewing__button_agua2L");
const button19L = document.querySelector(".brewing__button_agua19L");
const buttonSuslo = document.querySelector(".brewing__button_suslo");
const buttonheating = document.querySelector(".brewing__button_heating");
const buttonWeat = document.querySelector(".brewing__button_weat");

button2L.addEventListener("click", () => {
 brewingBottle.prepend(templateAgua2L.cloneNode(true));
 button2L.setAttribute("disabled", true);
});

button19L.addEventListener("click", () => {
  brewingBottle.prepend(templateAgua19L.cloneNode(true));
  button19L.setAttribute("disabled", true);
 });

 buttonSuslo.addEventListener("click", () => {
  brewingBottle.prepend(templateSuslo.cloneNode(true));
  buttonSuslo.setAttribute("disabled", true);
 });

 buttonheating.addEventListener("click", () => {
  brewingBottle.prepend(templateHeating.cloneNode(true));
  buttonheating.setAttribute("disabled", true);
 });

 buttonWeat.addEventListener("click", () => {
  brewingBottle.prepend(templateWeat.cloneNode(true));
  buttonWeat.setAttribute("disabled", true);
  console.log(upuupu());
 });



const upuupu = () => {
  let brewingBottleMassive = Array.prototype.slice.call(brewingBottle.childNodes);
  brewingBottleMassive.forEach(brewingBottleMassive.clientHeight)};


