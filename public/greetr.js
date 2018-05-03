(function($, global){

	var Greetr = function(firstName, lastName, language) {
		return new Greetr.init(firstName, lastName, language);
	}

	var supportedLangs = ['en', 'es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	};

	var loggedOutMessages = {
		en: "Logged out",
		es: "Termino sesion"
	}

	var byeMessages = {
		en: 'Goodbye',
		es: 'Hasta luego'
	}

	Greetr.prototype = {
		greeting : function() {
			// this.language === "en" ? console.log("Hello " + this.firstName + ' ' + this.lastName) : console.log("You're not English");
			//greetings[this.language] ? console.log(greetings[this.language] + " " + this.firstName + " " + this.lastName) : console.log("Your language is not supported, sorry!");
			return greetings[this.language] + ' ' + this.firstName;
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ' ' + this.fullName();
		},

		greet: function(formal) {
			formal ? this.formalGreeting() : this.greeting();
			return this;
		},

		fullName: function() {
			return this.firstName + ' ' + this.lastName;
		},

		validateLang: function() {
			if (supportedLangs.indexOf(this.language) === -1 ) {
				throw "Language is not supported";
			}
		},

		log: function() {
			if (console) {
				if (loggedIn) {
					console.log(logMessages[this.language] + ': ' + this.fullName()); 
				} else {
					console.log(loggedOutMessages[this.language] + ': ' + this.fullName());
				}

			}
			return this;
		},

		setLang: function(newLang) {
			this.language = newLang;
			this.validateLang();
			return this;
		},

		update$: function(selector, formal) {
			if (!jQuery) {
				throw 'jQuery not loaded';
			}

			if(!selector) {
				throw 'Missing jQuery selector';
			}

			var msg;
			formal ? msg = this.formalGreeting() : msg = this.greeting();

			$(selector).html(msg);

			return this;

		},

		sayBye: function() {
			return byeMessages[this.language] + ' ' + this.fullName();
		},

		updatebye$: function(selector) {
			if (!jQuery) {
				throw 'jQuery not loaded';
			}

			if(!selector) {
				throw 'Missing jQuery selector';
			}
			var byeMsg = this.sayBye();
			$(selector).html(byeMsg);

			return this;

		},
		
	};

	Greetr.init = function(fName, lName, lang) {
			var self = this;
			self.firstName = fName || "Anon";
			self.lastName = lName || "";
			self.language = lang || "en";

			self.validateLang();
		}

	Greetr.init.prototype = Greetr.prototype;
	global.Greetr = global.G$ = Greetr;

}(jQuery, window));