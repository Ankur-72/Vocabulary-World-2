class Form8 {
    constructor() { 
        this.Q7 = ""
        this.ex = ""
        this.undeline = ""
        this.radio = ""
        this.submitButton = ""
    }
    form8_hide()
    {
        this.Q7.hide()
        this.ex.hide()
        this.radio.hide()
        this.submitButton.hide()
    }
    display() {
        //textAlign(CENTER);
        if(!this.Q7)
        {
            this.Q7 = createElement('h3');
            this.Q7.html("Q7. Choose the right meaning for the word: Dereliction(n)")
            this.Q7.position(290, 100);

        }
        if(!this.ex)
        {
            this.ex = createElement('h3');
            this.ex.html("Ex: My absence has not been because of any dereliction of duty.");
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
            this.radio.option("Having a strong suspicion on someone");
            this.radio.option("A crime executed without any traces",2);
            this.radio.option("The state of becoming abandoned",3);
            this.radio.option("A misinterpretation of a government policy",4);
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