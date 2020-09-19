class Form1 {
    constructor() {
        this.button = "";
        this.button1 = "";
        this.button2 = "";
    }
    hide() {
        this.button.hide();
        this.button1.hide();
        this.button2.hide();
    }
    display() {
       
        //if (frameCount > 105 && gameState < 2) {
        if (!this.button) {
            console.log("Inside !this.button")
            this.button = createButton('Play!');
            this.button.position(620, 420);
            this.button.size(130, 50);
            this.button.style('color: orange');
        }
        if (!this.button1) {
            console.log("Inside !this.button1")
            this.button1 = createButton('Instructions');
            this.button1.position(620, 500);
            this.button1.size(130, 50);
            this.button1.style('color: purple');
        }
        if (!this.button2) {
            console.log("Inside !this.button2")
            this.button2 = createButton('Home Screen');
            this.button2.position(620, 580);
            this.button2.size(130, 50);
            this.button2.style('color: black');
        }
        //button.center();
        //button1.center();
        //button2.center();
        this.button1.mousePressed(function () {
            gameState = 2;
        });
        this.button2.mousePressed(function () {
            gameState = 1;
        });
        this.button.mousePressed(function () {
            gameState = 3;
            
        });
        
    }
}