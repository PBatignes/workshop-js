var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];

villes.forEach((function(element) {  console.log(element); }));

const letterInString = (element) => element.includes('a');

console.log("LettreADansToutesLesVilles = " + villes.every(letterInString));

const minusInString = (element) => element.includes('-');

console.log(villes.some(minusInString));

console.log(villes.filter(ville => !(ville.includes(" ")) & !(ville.includes("-"))));

console.log(villes.filter(ville => ville.lastIndexOf("s")).map(function(x) { return x.toUpperCase(); }));