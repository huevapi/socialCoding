// 
//  Events:
//		updated: line updated (index, content)
//		added: line added
//		removed: line removed
Core = {
	index_to_id: {},		

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

		added: function(index, id, content) {
			
			this.trigger("added", this.id_to_line[id], content);
		},

		removed: function(id) {
		
		}
	}
}

_.extend(Core, Backbone.Events);



Core.bind("updated", function(index, content) {
	
});

Core.bind("added", function(index, content) {
	
});

Core.bind("removed", function(index) {
	
});