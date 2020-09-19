class Form10 {
    constructor() { 
        this.Q9 = ""
        this.ex = ""
        this.undeline = ""
        this.radio = ""
        this.submitButton = ""
    }
    form10_hide()
    {
        this.Q9.hide()
        this.ex.hide()
        this.radio.hide()
        this.submitButton.hide()
    }
    display() {
        //textAlign(CENTER);
        if(!this.Q9)
        {
            this.Q9 = createElement('h3');
            this.Q9.html("Q9. Choose the antonym of the word: Perennial(adj)")
            this.Q9.position(290, 100);

        }
        if(!this.ex)
        {
            this.ex = createElement('h3');
            this.ex.html("Ex: There are no rivers and few perennial streams in the islands.");
            this.ex.position(290, 150)
        }
        if(!this.undeline)
        {
            this.underline = line(410, 180, 490, 180);
        }
        if(!this.radio)
        {
            this.radio = createRadio();
            this.radio.position(320, 220);
            this.radio.size(430, 450);
            this.radio.style('color: orange');
            //textAlign(CENTER)
            this.radio.option("Lasting for an infinite amount of time");
            this.radio.option("Having no expiry date",2);
            this.radio.option("Present for a very short period of time",3);
            this.radio.option("Practical application of virtues and ideals",4);
        }
        if(!this.submitButton)
        {
            this.submitButton = createButton('Submit');
            this.submitButton.position(320, 420);
            this.submitButton.size(130, 50);
            this.submitButton.style('color: orange');

        }
       
        answer = this.radio.selected()
        // text(answer, width / 2, height / 2);
        // answer.position(320,420);
       
        this.submitButton.mousePressed(function () {
           
            if (answer === answerArray[0]) {
                score = score + 1
            } else {
                //to enter in the array of wrong questions. Display at the end.
                wrongQuestions.push(this.Q1);
                
            }
            questionCounter += 1;
            gameState = 3
        });
    }
}