{"changed":true,"filter":false,"title":"script.js","tooltip":"/1-vandalen/birthday/script.js","undoManager":{"mark":0,"position":-1,"stack":[]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":38,"column":25},"end":{"row":38,"column":55},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"value":"\"use strict\";\n\nwindow.onload = function(){\n\n\t\n\tvar birthday = function(date){\n\t\t\n\t\t\tconsole.log(date);\n\n\t\t\t// Din kod här.\n\t\t\t\n\t\t\tfunction toDays(value){\n\t\t\t\treturn Math.ceil(value/1000/60/60/24);\n\t\t\t}\n\t\t\t\n\t\t\tfunction UserException(message) {\n\t\t\t   this.message = message;\n\t\t\t   this.name = \"UserException\";\n\t\t\t}\n\t\t\t\n\t\t\tvar birthday = new Date(date);\n\t\t\tvar currentDate = new Date();\n\t\t\tvar days;\n\t\t\t\n\t\t\tconsole.log(birthday.getDate());\n\t\t\t\n\t\t\tif(isNaN(birthday.getDate()))\n\t\t\t{\n\t\t\t\tthrow new UserException(\"Either a day, month or year have not been selected or the date is not correct\");\n\t\t\t}\n\t\t\telse\n\t\t\t{\n\t\t\t\tif(birthday.getFullYear()<currentDate.getFullYear())\n\t\t\t\t{\n\t\t\t\t\tbirthday.setFullYear(currentDate.getFullYear());\t\n\t\t\t\t}\n\t\t\t\tif(toDays(birthday.getTime() - currentDate.getTime()) < 0)\n\t\t\t\t{\n\t\t\t\t\tbirthday.setFullYear(currentDate.getFullYear()+1);\n\t\t\t\t}\n\t\t\t\tdays = toDays(birthday.getTime() - currentDate.getTime());\n\t\t\t}\n\t\t\t\n\t\t\treturn days;\n\t};\n\t// ------------------------------------------------------------------------------\n\n\n\t// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra\n\tvar p = document.querySelector(\"#value\"); // Referens till DOM-noden med id=\"#value\"\n\tvar input = document.querySelector(\"#string\");\n\tvar submit = document.querySelector(\"#send\");\n\n\t// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.\n\tsubmit.addEventListener(\"click\", function(e){\n\t\te.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.\n\n\t\tp.classList.remove( \"error\");\n\n\t\ttry {\n\t\t\tvar answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen \"convertString\"\n\t\t\tvar message;\n\t\t\tswitch (answer){\n\t\t\t\tcase 0: message = \"Grattis på födelsedagen!\";\n\t\t\t\t\tbreak;\n\t\t\t\tcase 1: message = \"Du fyller år imorgon!\";\n\t\t\t\t\tbreak;\n\t\t\t\tdefault: message = \"Du fyller år om \" + answer + \" dagar\";\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\tp.innerHTML = message;\n\t\t} catch (error){\n\t\t\tp.classList.add( \"error\"); // Växla CSS-klass, IE10+\n\t\t\tp.innerHTML = error.message;\n\t\t}\n\t\n\t});\n\n\n\n};","timestamp":1416316514536}