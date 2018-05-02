var g = G$("John", "Doe", "fr");
var h = G$("Jane", "Doe");
var f = G$("", "", "es");
console.log(g);
g.setLang("es");
console.log(g.greeting());
console.log(f.greeting());
console.log(h.greeting());
console.log(g.formalGreeting());
console.log(f.formalGreeting());
console.log(h.formalGreeting());
g.greet(true);
f.greet(true);
h.greet(true);
g.greet(false);
f.greet(false);
h.greet(false);
g.validateLang();
f.validateLang();

h.greet(true).setLang("en").greet(false);

h.update$("#greeting", true);