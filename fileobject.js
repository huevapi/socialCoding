var file = function () {
	var file_lines = [];

	function randomString() {
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 8;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
	}

	return {
		parseDoc: function(){
			var source = "";
			for(var i=0;i<file_source.length;i++){
				source += file_lines[i].code;
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