function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    }

Square.prototype.isSquare = function() {
  if (this.a === this.b && this.b === this.c && this.c === this.d) {
    console.log("true");
  } else {
    console.log("false");
  }
}; 
let mySquare = new Square(2,2,2,2);
mySquare.isSquare(); 

let notSqure = new Square(2,2,2,3)
notSqure.isSquare();