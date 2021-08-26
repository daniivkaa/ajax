let idUser = 0;

$(document).ready(function() {
	start();
});

function start(){
	let singIn = $('#sing_in');
	let edit = $('#edit')
	let getData = $('#get_data')
	let createUser = $('#create_user')
	
	singIn.click(function(){
		userIn();
	});
	
	edit.click(function(){
		userEdit();
	});
	
	getData.click(function(){
		userData();
	});
	
	createUser.click(function(){
		userCreate();
	});
}

function userData(){
	$.ajax({
		url: "http://ajax/get_data.php",
		type: "POST",
		dataType: "html",
		data: {id:idUser},
		success: function(response){
			let info = JSON.parse(response);
			let section = $(".main");
			
			while(section.children().length > 0){
				section.children().remove();
			}
			
			let p = document.createElement('div');
			p.innerHTML = "Ваш ид : " + info["id"];
			section.append(p);
			
			let p2 = document.createElement('div');
			p2.innerHTML = "Ваше имя : " + info["name"];
			section.append(p2);
			
			let p3 = document.createElement('div');
			p3.innerHTML = "Ваша фамилия : " + info["last_name"];
			section.append(p3);
			
			let p4 = document.createElement('div');
			p4.innerHTML = "Ваше отчество : " + info["patronymic"];
			section.append(p4);
		},
		error: function(response){
			alert(response);
		}
	});
}


function userEdit(){
	let section = $(".main");
	
	while(section.children().length > 0){
		section.children().remove();
	}
			
	let form = document.createElement('form');
	section.append(form);
	
	let input1 = '<input name="name" placeholder="имя">';
	let input2 = '<input name="last_name" placeholder="фамилия">';
	let input3 = '<input name="patronymic" placeholder="отчество">';
	let button = '<button type="button" id = "button">Изменить данные<button>';
	
	form.innerHTML = input1 + input2 + input3 + button;
	
	let but = $("#button");
	
	but.click(function() {
		let formData = $("form").serialize();
		let allData = formData + "&id=" + idUser;
		$.ajax({
		url: "http://ajax/edit_data.php",
		type: "POST",
		dataType: "html",
		data: allData,
		success: function(response){
			let info = JSON.parse(response);
			let section = $(".main");
			
			while(section.children().length > 0){
				section.children().remove();
			}
			
			let p = document.createElement('div');
			p.innerHTML = info["message"];
			section.append(p);
		},
		error: function(response){
			alert(response);
		}
	});
	});
}

function userIn(){
	let section = $(".main");
	
	while(section.children().length > 0){
		section.children().remove();
	}
	
	let form = document.createElement('form');
	section.append(form);
	
	let input1 = '<input name="id" placeholder="ID">';
	let button = '<button type="button" id = "button">Войти<button>';
	
	form.innerHTML = input1 + button;
	
	let but = $("#button");
	
	but.click(function() {
		let inp = $("form input").val();
		idUser = inp;
		
		let p = document.createElement('div');
		p.innerHTML = "Удачно";
		section.append(p);
	});
}

function userCreate(){
	let section = $(".main");
	
	while(section.children().length > 0){
		section.children().remove();
	}
			
	let form = document.createElement('form');
	section.append(form);
	
	let input1 = '<input name="name" placeholder="имя">';
	let input2 = '<input name="last_name" placeholder="фамилия">';
	let input3 = '<input name="patronymic" placeholder="отчество">';
	let button = '<button type="button" id = "button">Создать пользователя<button>';
	
	form.innerHTML = input1 + input2 + input3 + button;
	
	let but = $("#button");
	
	but.click(function() {
		$.ajax({
		url: "http://ajax/create_user.php",
		type: "POST",
		dataType: "html",
		data: $("form").serialize(),
		success: function(response){
			let info = JSON.parse(response);
			let section = $(".main");
			
			while(section.children().length > 0){
				section.children().remove();
			}
			
			let p = document.createElement('div');
			p.innerHTML = info["message"];
			section.append(p);
		},
		error: function(response){
			alert(response);
		}
	});
	});
}



























