$(document).ready(function() {
    
    var backBtn= '<button class="btn btn-primary" id="atras">Atrás</button>';
    $('#btn-container').append(backBtn);
    $('#atras').hide();
                    
    var graphBtn= '<button class="btn btn-info" id="verGrafico">Ver gráfico</button>';
    $('#btn-container').append(graphBtn);
    $('#verGrafico').hide();
                    
    var backBtnG= '<button class="btn btn-primary" id="atrasG">Atrás</button>';
    $('#btn-container').append(backBtnG);
    $('#atrasG').hide();
    
    $("#atras").click(function(){
        $('#table-container').css('display', 'none');
        $('#form-container').show();
        $('#atras').hide();
        $('#verGrafico').hide();
        $('#atrasG').hide();
        $("#formFecha")[0].reset();
        $('.alert-success').remove();
    });

    $("#verGrafico").click(function(){
        $('#table-container').css('display', 'none');
        $('#atras').hide();
        $('#verGrafico').hide();
        $('#atrasG').show();
        $('#graph-container').css('display', 'block');
    });

    $("#atrasG").click(function(){
        $('#graph-container').css('display', 'none');
        $('#table-container').css('display', 'block');
        $('#atras').show();
        $('#verGrafico').show();
        $('#atrasG').hide();
    });
    

	$('form').submit(function(event) {

		$('.form-group').removeClass('has-error');
		$('.help-block').remove();
        $('.alert-success').remove();

		var formData = {
			'fini' 	: $('input[name=fini]').val(),
			'ffin' 	: $('input[name=ffin]').val()
		};

		$.ajax({
			type 		: 'POST',
			url 		: 'process.php',
			data 		: formData,
			dataType 	: 'json',
			encode 		: true
		})

			.done(function(data) {

				if ( ! data.success) {
					
					if (data.errors.fini) {
						$('#fini-group').addClass('has-error'); 
						$('#fini-group').append('<div class="help-block">' + data.errors.fini + '</div>');
					}

					if (data.errors.ffin) {
						$('#ffin-group').addClass('has-error');
						$('#ffin-group').append('<div class="help-block">' + data.errors.ffin + '</div>');
					}

				} else {

					$('form').append('<div class="alert alert-success">' + data.message + '</div>');
                    $('#table-container').css('display', 'block');
                    
                    $('#carPaths').DataTable();
                    
                    $('#form-container').hide();
                    
                    $('#atras').show();
                    $('#verGrafico').show();
                    
                    $("#atras").click(function(){
                        $('#table-container').css('display', 'none');
                        $('#form-container').show();
                        $('#atras').hide();
                        $('#verGrafico').hide();
                        $("#formFecha")[0].reset();
                        $('.alert-success').remove();
                    });
                    
                    $("#verGrafico").click(function(){
                        $('#table-container').css('display', 'none');
                        $('#atras').hide();
                        $('#verGrafico').hide();
                        $('#atrasG').show();
                        $('#graph-container').css('display', 'block');
                    });
                    
                    $("#atrasG").click(function(){
                        $('#graph-container').css('display', 'none');
                        $('#table-container').css('display', 'block');
                        $('#atras').show();
                        $('#verGrafico').show();
                        $('#atrasG').hide();
                    });
                    
				}
			})

			.fail(function(data) {

                console.log(data);
			});
        
		event.preventDefault();
	});
    
    

});