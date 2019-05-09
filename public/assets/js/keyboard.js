class KeyboardController {
    constructor(lines) {
        this.lines = lines;
    }

    add_text(new_text){
    	if(new_text == ""){
			this.lines += " "
		}
		else if(new_text == "Enter"){
			this.lines += "\n"
		}
		else if(new_text == "Bksp"){
			this.lines = this.lines.slice(0, -1)
		}
		else{
			this.lines += new_text;
		}
    }

    replace_text(new_text){
    	this.lines = new_text;
    }

    get_text(){
    	return this.lines;
    }
}


// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(document).ready(function(){
	console.log('Document ready! [public/assets/js/keyboard.js]');
	$("#textspace2").text("");
	$("#textspace2").css("margin-bottom", $("#footer").height() + 'px');
	const texto = new KeyboardController("")
	$('#kcontainer').click(function(e){
		console.log(e.target.innerText)
		texto.replace_text($("#textspace2").text());

		texto.add_text(e.target.innerText);

		$("#textspace2").text(texto.get_text());
		
	});
	$("#display_keyboard").click(function(e){
		$("#kcontainer").toggle('show', function(){
			$("#textspace2").css("margin-bottom", $("#footer").height() + 'px');
		});
	});
});