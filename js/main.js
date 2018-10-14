var ViewModel = function () {
    this.clicks = ko.observable(0);
    this.name = ko.observable('Steve');
    this.imageSrc = ko.observable('img/adorable_640.jpg');

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

    this.nicknames = ko.observableArray(['Stevie','Stev', 'Tevie', 'Tivetot', 'Isteban']);

    this.addClicks = function () {
        this.clicks(this.clicks() + 1);
    };
};

ko.applyBindings(new ViewModel());