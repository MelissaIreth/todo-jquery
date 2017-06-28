$(document).ready(function(){
	$('#el_input').keydown(function(e) {
	var key = e.which;
	var msg = $("#el_input").val();
	if (key == 13) {// As ASCII code for ENTER key is "13"
		$(".tareas").append("<input type='checkbox' id='test5'>"+"<label for='test5'>" + msg + "</label><a class='btn-floating waves-effect waves-ligth'><i class='material-icons'>delete</i></a>")
	}
});
});

