// HelloJava.js
class HelloJava{
    printHelloWorld() {
        console.log("Hello, World!");
    }
    printSprinkles() {
        console.log("new");   
    }
}

const hello = new HelloJava();
const hello2 = new HelloJava();
const hello3 = new HelloJava();
hello.printHelloWorld();
hello.printSprinkles()