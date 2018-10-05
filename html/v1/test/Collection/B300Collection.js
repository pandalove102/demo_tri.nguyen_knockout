
var B300Collection = Backbone.Collection.extend({
    model: B300Model,
    localStorage: new Store('B300Collection'),
    initialize: function () {
        this.on("add", this.addCollection, this);
        this.on("remove", this.removeCollection, this);
        this.on("change", this.changeCollection, this);
    },
    addCollection: function (model) {
    },
    removeCollection: function (model) {
    },
    changeCollection: function (model) {
    },
    log: function (message) {
        console.log(message);
    }
});