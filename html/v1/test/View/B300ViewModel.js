 /**
 * @author  tri.nguyen
 * @date    06/04/2015
 * @description nhớ comment đầy đủ
 * @param {type} model
 * @returns {window.IncomeViewModel}
 */
(function () {
    window.B300ViewModel = function (model) {
        var _this = this;
        _this.cid = model.get('cid');
        _this.id =  ko.observable(model.get('id') || "");
        _this.title = ko.observable(model.get('title') || '');
		_this.image = ko.observable(model.get("image"));
        _this.description = ko.observable(model.get("description") || '');
        
        
    };

}).call(this);
