var initialCats = [
    {
        name: 'Steve',
        clicks: 0,
        imageSrc: 'img/adorable_640.jpg',
        nicknames: ['Stevie', 'Stev', 'Tevie', 'Tivetot', 'Isteban']
    },
    {
        name: 'Tony',
        clicks: 0,
        imageSrc: 'img/cat_640.jpg',
        nicknames: ['Tonton', 'Tony', 'Tonytot', 'Tons', 'Ynot']
    },
    {
        name: 'Thor',
        clicks: 0,
        imageSrc: 'img/kitty_640.jpg',
        nicknames: ['Thory', 'Thortot', 'Thorthor', 'Thorsky', 'Thorman']
    },
    {
        name: 'Bruce',
        clicks: 0,
        imageSrc: 'img/sleepy_640.jpg',
        nicknames: ['Brucie', 'Bru', 'Bruciekins', 'Brubru', 'Brewster']
    },
    {
        name: 'Clint',
        clicks: 0,
        imageSrc: 'img/treetop_640.jpg',
        nicknames: ['Clin', 'Hawkeye', 'Barton', 'Clintypoo', 'Clinter']
    }
 ];

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

    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catData) {
        vm.catList.push(new Cat(catData));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.addClicks = function () {
        vm.currentCat().clicks(vm.currentCat().clicks() + 1);
    };

    this.changeSelected = function () {
        vm.currentCat(this);
    };
};

ko.applyBindings(new ViewModel());