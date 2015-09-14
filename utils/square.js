// square.js
function Square(width) {

  if (!(this instanceof Square)) {
    return new Square(width);
  }

  this.width = width;
};
Square.prototype.addWidth = function addWidth(newWidth)
{
	this.width = newWidth;
};
Square.prototype.area = function area() {
  return Math.pow(this.width, 2);
};

module.exports = module = new Square();