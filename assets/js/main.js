$(document).ready(function(){

	$('#el_input').keydown(function(e){
		var key = e.which;
		var msg = $("#el_input").val();
		if (key == 13) {// As ASCII code for ENTER key is "13"
		$(".tareas").append("<input type='checkbox' id='test5' class='check'>"+"<label for='test5'>" + msg + "</label><a class='btn-floating waves-effect waves-ligth'><i class='material-icons delete'>delete</i></a>")
		}

		$('.check').click(function(){
		$('.tareas').remove();
		$('.tareascompletas').append(msg + "</label><a class='btn-floating waves-effect waves-ligth'><i class='material-icons delete1'>delete</i></a>")

		});

		$('.delete').click(function(){
			$('.tareas').remove();
		});

		$('.delete1').click(function(){
			$('.tareascompletas').remove();
		});

	});

});
