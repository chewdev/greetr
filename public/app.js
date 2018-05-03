// different test cases, uncomment wanted tests

//var g = G$("John", "Doe", "fr");
// var g = G$("John", "Doe", "en");
// var h = G$("Jane", "Doe");
// var f = G$("", "", "es");
// console.log(g);
// g.setLang("es");
// console.log(g.greeting());
// console.log(f.greeting());
// console.log(h.greeting());
// console.log(g.formalGreeting());
// console.log(f.formalGreeting());
// console.log(h.formalGreeting());
// g.greet(true);
// f.greet(true);
// h.greet(true);
// g.greet(false);
// f.greet(false);
// h.greet(false);
// g.validateLang();
// f.validateLang();

// h.greet(true).setLang("en").greet(false);

// h.update$("#greeting", true);

// 
var loginGrtr;
var loggedIn = false;
$("#logout").hide();

$("#login").click(function() {
	loggedIn = true;
	loginGrtr = G$("John", "Doe");
	loginGrtr.setLang($('#lang').val()).update$("#greeting", true).log();
	currentUserLang = $('#lang').val();
	$("#login").hide();
	$("#lang").hide();
	$("#logout").show();
	


});

$('#logout').click(function() {
	loggedIn = false;
	loginGrtr.updatebye$("#greeting").log();
	$("#logout").hide();
	$("#lang").show();
	$("#login").show();
	

})