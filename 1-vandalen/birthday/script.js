"use strict";

window.onload = function(){

	
	var birthday = function(date){
		
			console.log(date);

			// Din kod här.
			
			function toDays(value){
				return Math.round(value/1000/60/60/24)+1;
			}
			
			function UserException(message) {
			   this.message = message;
			   this.name = "UserException";
			}
			
			var birthday = new Date(date);
			var currentDate = new Date();
			var days;
			
			console.log(birthday.getDate());
			
			if(isNaN(birthday.getDate()))
			{
				throw new UserException("Either a day, month or year have not been selected or the date is not correct");
			}
			else
			{
				if(birthday.getFullYear()<currentDate.getFullYear())
				{
					birthday.setFullYear(currentDate.getFullYear());	
				}
				if(toDays(birthday.getTime() - currentDate.getTime()) < 0)
				{
					birthday.setFullYear(currentDate.getFullYear()+1);
				}
				days = toDays(birthday.getTime() - currentDate.getTime());
			}
			
			return days;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};