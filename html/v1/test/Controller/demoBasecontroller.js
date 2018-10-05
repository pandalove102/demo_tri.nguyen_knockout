(function () {
    window.demoBasecontroller = function () {
        var _this = this;
        
        this.data = ko.observableArray([]);
        this.title = ko.observable('');

        
        this.demoCollect = {
            demoCollection: new demoCollection()
        };
        this.demoCollection = kb.collectionObservable(this.demoCollect.demoCollection, {
            view_model: kb.ViewModel
        });

        this.demoModel = demoModel();
        this.demoViewModel = new demoViewModel(this.demoModel);
    
        // console.log(_this.demoViewModel)
        this.onSave = function() {
            // console.log(_this.demoViewModel.title());
            // console.log(_this.demoViewModel.description());
            var array  = {title: _this.demoViewModel.title(), description: _this.demoViewModel.description()}
            _this.demoCollect.demoCollection.add(array);
        }

        this.onRemove = function (view_model) {
            _this.demoCollection.remove(view_model);
        };

        var allVals = [];
        var dataTraveling = [];
        for ( var i = 1;i <= 2; i++ ) {
            dataTraveling = 
            {
                cid: AdmUtil.uuid(),
                id: i,
                title: "Vietnam",
                image: "http://via.placeholder.com/350x150",
                description: "Country",
                // ft300: plug
            }
            allVals.push(dataTraveling); 
        }
            
        _this.demoCollect.demoCollection.add(allVals);

    }
}).call(this)



