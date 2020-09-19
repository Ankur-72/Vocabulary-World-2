class Form4 {
    constructor() { 
        this.Q3 = ""
        this.ex = ""
        this.undeline = ""
        this.radio = ""
        this.submitButton = ""
    }
    form4_hide()
    {
        this.Q3.hide()
        this.ex.hide()
        this.radio.hide()
        this.submitButton.hide()
    }
    display() {
        //textAlign(CENTER);
        if(!this.Q3)
        {
            this.Q3 = createElement('h3');
            this.Q3.html("Q3. Choose the right meaning for the word: Pedantic(adj)")
            this.Q3.position(290, 100);

        }
        if(!this.ex)
        {
            this.ex = createElement('h3');
            this.ex.html("Ex: While he thought he was inspiring his students, they all thought he was being pedantic.");
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
                this.radio.option("Extremely sensitive");
                this.radio.option("Cynical",2);
                this.radio.option("Critical",3);
                this.radio.option("Extremely obsessive with minute and minor details",4);
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