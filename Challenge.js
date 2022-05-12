		function MensajeParaCifrar(){
			var MensajePorCod = document.getElementById("Mensaje").value.toLowerCase();
			var Cifrado = MensajePorCod.replace(/e/igm,"enter");
			var Cifrado = Cifrado.replace(/i/igm,"imes");
			var Cifrado = Cifrado.replace(/o/igm,"ober");
			var Cifrado = Cifrado.replace(/a/igm,"ai");
			var Cifrado = Cifrado.replace(/u/igm,"ufat");
			document.getElementById("MensajeCodificado").innerHTML = Cifrado;
		}

		function MensajeParaDescifrar(){
			var MensajePorCod = document.getElementById("Mensaje").value.toLowerCase();
			var Cifrado = MensajePorCod.replace(/enter/igm,"e");
			var Cifrado = Cifrado.replace(/imes/igm,"i");
			var Cifrado = Cifrado.replace(/ober/igm,"o");
			var Cifrado = Cifrado.replace(/ai/igm,"a");
			var Cifrado = Cifrado.replace(/ufat/igm,"u");
			document.getElementById("MensajeCodificado").innerHTML = Cifrado;
		}

		function Copiado(){
			var TextoCifrado = document.getElementById("MensajeCodificado");
			TextoCifrado.select();
			document.execCommand("copy");
			Mensaje.value = "";
			Mensaje.focus();
			alert("¡Copiado!");
		}

		var button = document.querySelector("Copiar");
		Copiar.onclick = Copiado;
		var button = document.querySelector("Encriptar");
		Encriptar.onclick = MensajeParaCifrar;
		var button = document.querySelector("Desencriptar");
		Desencriptar.onclick = MensajeParaDescifrar;