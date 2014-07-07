var cars = ["porsche", "chevy", "vw"];

var lotto = _.random(100, 120);

var earth = [{element: 'earth', contains: 'forest'}, {element: 'water', contains: 'ocean'}];
_.pluck(earth, 'element');

var decimals = _.first([0.75, 1.25, 1.75, 2.25])

var bounty_hunter;

var Music = function (options) {
	var options = options || {};
	this.singers = options.singers;
	this.albums = options.albums;
	this.songwriters = options.songwriters; 
};

var prince = new Music ({
	albums: 'purple rain'
})