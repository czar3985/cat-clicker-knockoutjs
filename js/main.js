var Cat = function (data) {
    this.clicks = ko.observable(data.clicks);
    this.name = ko.observable(data.name);
    this.imageSrc = ko.observable(data.imageSrc);

    this.level = ko.computed(function () {
        if (this.clicks() < 10)
            return "Newborn";
        else if (this.clicks() < 20)
            return "Infant";
        else if (this.clicks() < 30)
            return "Kid";
        else if (this.clicks() < 40)
            return "Teen";
        else if (this.clicks() < 50)
            return "Adult";
        else
            return "Ninja";
    }, this);

    this.nicknames = ko.observableArray(data.nicknames);
};

var ViewModel = function () {
    var vm = this;

    this.currentCat = ko.observable(new Cat({
        name: 'Steve',
        clicks: 0,
        imageSrc: 'img/adorable_640.jpg',
        nicknames: ['Stevie', 'Stev', 'Tevie', 'Tivetot', 'Isteban']
    }));

    this.addClicks = function () {
        vm.currentCat().clicks(vm.currentCat().clicks() + 1);
    };
};

ko.applyBindings(new ViewModel());