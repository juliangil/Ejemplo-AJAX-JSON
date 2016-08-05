$(document).ready(function(){
			$("#personas").html("<H2>LISTO PA CARGAR DATOS.... CLICK EL BOTON !!</H2>");

			$("#bt_cargadatos").click(function(){
				
				$.getJSON("personas.json", function(result){
					// result es el RAIZ // dentro de raiz esta el array PERSONAS
					$.each(result.personas, function(){
						// dentro de personas tienes: nombre edad nacionalidad etc etc 
						var $persona = "";
						$persona = "<div class=\"persona\"><h1>"+this.nombre + "</h1>";
						$persona = $persona + "<p>edad : "+this.edad + "</p>";
						$persona = $persona + "<p>nacion :"+this.nacionalidad + "</p>";
						// ..... ....... ...... 
 
						// dentro de personas tienes un array Pasatiempos ( esta entre [ ] ) 
						var $listapasatiempos ="";
						$.each(this.pasatiempos, function(indice, valor){
							// lista de pasatiempos 
							$listapasatiempos = $listapasatiempos + "<li>"+valor+"</li>";
						});
						$persona = $persona + "<ul>" + $listapasatiempos + "</ul>";
 
						// dentro de personas tienes otro objeto Direccion 
 
						$persona = $persona + "<p>Direccion : "+ this.direccion.calle +" "+ this.direccion.numero +" - " + this.direccion.pais +"</p></div>";
 
 
						$("#personas").append($persona);
 
					});
				});
			});
		});