var ViewModel = function () {
    this.clicks = ko.observable(0);
    this.name = ko.observable('Steve');
    this.imageSrc = ko.observable('img/adorable_640.jpg');

    this.addClicks = function () {
        this.clicks(this.clicks() + 1);
    };
};

ko.applyBindings(new ViewModel());