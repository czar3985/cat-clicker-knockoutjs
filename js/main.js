//All cat data in an array
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

//Cat model portion of the Cat Clicker application
var Cat = function (data) {
    this.clicks = ko.observable(data.clicks);
    this.name = ko.observable(data.name);
    this.imageSrc = ko.observable(data.imageSrc);

    //The cat's level depends on the number of clicks it got
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

    //A cat can have many nicknames
    this.nicknames = ko.observableArray(data.nicknames);
};

//ViewModel portion of the Cat Clicker application
var ViewModel = function () {
    var vm = this;  //Save in a variable for accessing when context changes

    //Populate the list of cats given the initial cat data
    this.catList = ko.observableArray([]);
    initialCats.forEach(function (catData) {
        vm.catList.push(new Cat(catData));
    });

    //Remember which is the currently selected/displayed cat
    //Initially, the first cat in the list is selected
    this.currentCat = ko.observable(this.catList()[0]);

    //Change the clicks property for the cat whose image has been clicked
    this.addClicks = function () {
        vm.currentCat().clicks(vm.currentCat().clicks() + 1);
    };

    //When a new cat is selected from the list on the page,
    //reflect change in the currentCat property
    this.changeSelected = function () {
        vm.currentCat(this);
    };

    //Change the list element's css background color depending
    //on the cat selected
    this.selectedCatStatus = function (name) {
        if (name() === vm.currentCat().name())
            return 'selected-cat';
        else
            return 'not-selected-cat';
    };
};

ko.applyBindings(new ViewModel());