export class Comparison {

    a: Number;
    b: Number;

    constructor(a: Number, b: Number) {
       this.a = a;
       this.b = b; 
    }

    flip() {
        return new Comparison(this.b, this.a);
    }

}