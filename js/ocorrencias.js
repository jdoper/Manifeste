// Função de teste (Pode ser deletada)
function listar() {
	$.ajax({
		type: "POST",
		url: "http://premium-slalom.codio.io:4000/ocorrencias",
		crossDomain: true,
		data: {
			"titulo": "Teste",
			"descricao": "Apenas um teste de teste",
			"latitude": 123.45,
			"longitude": 123.45
		},
		dataType: "json",
		success: function(data){
		   	console.log(data);
		}
	}).always(function (data){
		console.log('OK');
	});
}


// Requisição para recuperar ocorrências do usuário

//...


// Requisição para que o usuário saia do sistema

// ...