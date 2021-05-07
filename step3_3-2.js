var devLang = ["JavaScript", "Ruby", "PHP", "Java", "C"];
var matchString = "Java";
for (let i = 0; i < devLang.length; i++) {
  if (devLang[i].includes(matchString)) {
    console.log(devLang[i]);
  }
}
