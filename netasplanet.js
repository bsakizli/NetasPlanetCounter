
$(document).ready(function(){

var this_js_script = $('script[src*=netasplanet]'); // or better regexp to get the file name..
var MagazineIdClient = this_js_script.attr('MagazineId');   


		$.ajax({

					type: "POST",
					url: "http://planetas/api/counter/add",
					headers: {
						'Token': '9dc03930acd24d96e2b0584943c838b8'
					},
					contentType: "application/json; charset=utf-8",
					data: JSON.stringify({
						MagazineId: MagazineIdClient
					}),
					dataType: "json",

					success: function(response) {
						if (response.StatusCode == 200) {
							//
							console.log(response);
							//
						} else {
						 console.log(response);
						}
					},

					failure: function(response) {
						console.log(response);

					}

				});


});


