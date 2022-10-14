class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get foo() {
    console.log("get foo is called");
      return this.foo();
    }
    foo() {
    console.log("foo is called");
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  console.log(square.foo()); 
  