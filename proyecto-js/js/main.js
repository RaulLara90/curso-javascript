$(document).ready(function(){

	if(window.location.href.indexOf('index') > -1){
	//slider
		$('.galeria').bxSlider({
		    mode: 'fade',
		    captions: true,
		    pager: true,
		    slideWidth: 1200
	 	 });


		//Posts
		var posts = [
			{
				title: "Prueba de título 1",
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, maximus eget aliquet eu, fermentum a nibh. Mauris leo mi, elementum sit amet volutpat vitae, iaculis a ante. Donec lacinia congue purus, in lobortis tellus vestibulum ut. Maecenas sodales at justo eget iaculis. Mauris fringilla dolor sed mauris consequat euismod. Sed sed congue erat, ac egestas mi. Vivamus felis magna, imperdiet auctor sapien viverra, mattis luctus ex. Donec dapibus id tortor ut laoreet. Curabitur ut aliquam odio, eget suscipit velit. Phasellus et eros id justo placerat varius ut sed dui. Ut non lectus eget felis posuere tristique non eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
			},
			{
				title: "Prueba de título 2",
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, maximus eget aliquet eu, fermentum a nibh. Mauris leo mi, elementum sit amet volutpat vitae, iaculis a ante. Donec lacinia congue purus, in lobortis tellus vestibulum ut. Maecenas sodales at justo eget iaculis. Mauris fringilla dolor sed mauris consequat euismod. Sed sed congue erat, ac egestas mi. Vivamus felis magna, imperdiet auctor sapien viverra, mattis luctus ex. Donec dapibus id tortor ut laoreet. Curabitur ut aliquam odio, eget suscipit velit. Phasellus et eros id justo placerat varius ut sed dui. Ut non lectus eget felis posuere tristique non eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
			},
			{
				title: "Prueba de título 3",
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, maximus eget aliquet eu, fermentum a nibh. Mauris leo mi, elementum sit amet volutpat vitae, iaculis a ante. Donec lacinia congue purus, in lobortis tellus vestibulum ut. Maecenas sodales at justo eget iaculis. Mauris fringilla dolor sed mauris consequat euismod. Sed sed congue erat, ac egestas mi. Vivamus felis magna, imperdiet auctor sapien viverra, mattis luctus ex. Donec dapibus id tortor ut laoreet. Curabitur ut aliquam odio, eget suscipit velit. Phasellus et eros id justo placerat varius ut sed dui. Ut non lectus eget felis posuere tristique non eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
			},
			{
				title: "Prueba de título 4",
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, maximus eget aliquet eu, fermentum a nibh. Mauris leo mi, elementum sit amet volutpat vitae, iaculis a ante. Donec lacinia congue purus, in lobortis tellus vestibulum ut. Maecenas sodales at justo eget iaculis. Mauris fringilla dolor sed mauris consequat euismod. Sed sed congue erat, ac egestas mi. Vivamus felis magna, imperdiet auctor sapien viverra, mattis luctus ex. Donec dapibus id tortor ut laoreet. Curabitur ut aliquam odio, eget suscipit velit. Phasellus et eros id justo placerat varius ut sed dui. Ut non lectus eget felis posuere tristique non eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
			},
			{
				title: "Prueba de título 5",
				date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien lorem, maximus eget aliquet eu, fermentum a nibh. Mauris leo mi, elementum sit amet volutpat vitae, iaculis a ante. Donec lacinia congue purus, in lobortis tellus vestibulum ut. Maecenas sodales at justo eget iaculis. Mauris fringilla dolor sed mauris consequat euismod. Sed sed congue erat, ac egestas mi. Vivamus felis magna, imperdiet auctor sapien viverra, mattis luctus ex. Donec dapibus id tortor ut laoreet. Curabitur ut aliquam odio, eget suscipit velit. Phasellus et eros id justo placerat varius ut sed dui. Ut non lectus eget felis posuere tristique non eu enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
			} 
		];

		posts.forEach((item, index)=>{
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="" class="button-more">Leer más</a>
				</article>
						`;

			$('#posts').append(post);
		});
	}

	// selector tema
	var theme = $('#theme');
	$('#to-green').click(function(){
		theme.attr("href","css/green.css");
	});
	$('#to-blue').click(function(){
		theme.attr("href","css/blue.css");
	});
	$('#to-red').click(function(){
		theme.attr("href","css/red.css");
	});

	//Scroll arriba
	$('.subir').click(function(){
		e.preventDefault();
		$('html','body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});


	//login falso

	$('#login form').submit(function(){
		var form_name = $('#form_name').val();
		localStorage.setItem("form_name",form_name);
	});

	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != undefined){
		var about_parrafo = $('#about p');
		about_parrafo.html('<br><strong>Bienvenido, ' + form_name+'<strong>');
		about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>');
		$('#login').hide();

		$('#logout').click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$('#acordeon').accordion();
	}

	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");
			$('#reloj').html(reloj);
		},1000);
	}

	//Validacion
	if(window.location.href.indexOf('contact') > -1){

		$('form input[name="date"]').datepicker({
			dateFormat: "dd-mm-yy"
		});
		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});
	}

});