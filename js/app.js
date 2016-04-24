//agregando overlay lighbox
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");
//con imagen
$overlay.append($image);

//un texto
$overlay.append($caption);

//agregar el overlay al body
$("body").append($overlay);

$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href= $(this).attr("href");

	//MOSTRAR EL LIGHT BOX CON LA IMAGEN 
	$image.attr("src",href);

	var texto= $(this) .children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
	console.log(href);
});

// con un click salimos del overlay

$overlay.click(function(){
//escondemos overlay

	$overlay.hide();

});


/*menu para moviles*/
//el menu no funcina muy bien en moviles => problema*/
//cambiaremos por una navegacion lateral mas util => solucion*/

//creemos el menu lateral y hagamoslo al menu (nav)

var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu
//each permite ejecutar una funcion  por cada elemento
$("#menu a").each(function(){
	var $anchor = $(this);

	//crear una opcion para el select por cada elemento del menu
	var $option = $("<option></option>");
	//   obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar la opcion al select
	$select.append($option);

	//obtener si elñ link es la pagina actual (tiene clase seleccionada)
	if ($(this).hasClass("selected"))
	{
		$option.prop("selected", true);
	}

});

/*** vamos a quitar bopton y lo cambiaremos por un elemento selct*/
/*var $button= $("<button> IR </button>");
//agregando boton al menu
$("#menu").append($button);
$button.click(function(){
	//toma el valor de la opcion seleccionada
	window.location = $select.val();
});*/

$select.change(function(){
	window.location = $select.val(); //toma el valor de opcion seleccionada
});

var $PassWord = $("#PassWord");
var $confirmPassWord = $("#confirmPassWord");
$("form span").hide();
function eventoPassword(){
	//validar si la clave es valida
	if ($PassWord.val().length>8){
		//esconder ayuda si clave e valida
		$PassWord.next().hide();

	}
	else {
		//caso contrario mostramos ayuda
		$PassWord.next().show();

	}
}
function confirmarPassword(){
	if($PassWord.val() === $confirmPassWord.val()){
		$confirmPassWord.next().hide();
		}
		else{
			$confirmPassWord.next().show();
		}
}

$PassWord.focus(eventoPassword).keyup(eventoPassword);
$confirmPassWord.focus(confirmarPassword).keyup(confirmarPassword);