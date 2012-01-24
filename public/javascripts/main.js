// 
//  Events:
//		updated: line updated (index, content)
//		added: line added (index, content)
//		removed: line removed (index)
Core = {
	index_to_id: [],		

	id_to_index: {},

	post: {
		update: function(index, content) {
		
		},

		add: function() {
			
		},

		remove: function() {
		
		}
	},

	get: {
		updated: function(id, content) {
			this.trigger("updated", this.id_to_index[id], content);
		},

		added: function(id, content) {
			var index = this.id_to_index[id];

			this.index_to_id.splice(index + 1, 0, id);

			// re definir
			this.redefineMap();

			this.trigger("added", this.id_to_index[id], content);
		},

		removed: function(id) {
			var index = this.id_to_index[id];

			this.index_to_id.splice(index, 1);
			
			// re definir
			this.redefineMap();

			this.trigger("removed", index);
		}
	},

	redefineMap: function() {
		this.id_to_index = _.reduce(this.index_to_id, function(memo, value, index) {
			memo[value] = index;
			return memo;
		}, {});
	}
}

_.extend(Core, Backbone.Events);


/////////////////////////////
///  Broadcast listening

// on update
var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });


Core.bind("updated", function(index, content) {
	
});

Core.bind("added", function(index, content) {
	
});

Core.bind("removed", function(index) {
	
});