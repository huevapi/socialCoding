var file = function () {
	var file_lines = [];
	var first_line = null;

	function randomString() {
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 8;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		return randomstring;
	}

	return {
		parseDoc: function(){
			var source = "";
			var current_line = first_line;
			while(file_lines[current_line].next_line){
				source += file_lines[current_line].code;
				current_line = file_lines[current_line].next_line;
			}
			return source;
		},
		newLine: function(lineId){
			var new_id = randomString();
			//actualizo los punteros de la nueva linea
			file_lines[new_id] = {
				code:'',
				previous_line: lineId,
				next_line: file_lines[lineId].next_line
			};
			//actualizo los punteros de la linea vieja
			file_lines[lineId].next_line = new_id;
			return new_id;
		}
	};
};