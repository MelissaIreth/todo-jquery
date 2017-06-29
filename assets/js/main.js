$(document).ready(function(){
/*Acá se llama a lo ingresado en el input que al apretar 'enter' pase a nueva tarea con su checkbox y basurero*/
	$('#el_input').keydown(function(e){
		var key = e.which;
		var msg = $("#el_input").val();
		if (key == 13) {// As ASCII code for ENTER key is "13"
		$(".tareas").append("<input type='checkbox' id='test5' class='check'>"+"<label for='test5'>" + msg + "</label><a class='right btn-floating waves-effect waves-ligth'><i class='material-icons delete'>delete</i></a>")
		}
/*Acá se le da la funcion al 'check' para que las tareas pasen a completadas*/
		$('.check').click(function(){
		$('.tareas').remove();
		$('.tareascompletas').append("<label for='test5'>"+msg + "</label><a class='right btn-floating waves-effect waves-ligth'><i class='material-icons delete1'>delete</i></a>")

		});
/*Acá se le da la funcion al basurero para que se elimine la tarea*/
		$('.delete').click(function(){
			$('.tareas').remove();
		});
/*Acá deberia ser para eliminar la tarea completada pero no me funciono*/
		$('.delete1').click(function(){
			$('.tareascompletas').remove();
		});

	});

});
