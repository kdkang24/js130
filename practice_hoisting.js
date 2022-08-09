class Image {
  constructor(file) {
    this.file = file;
  }
}

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);