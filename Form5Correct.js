class Form5 {
    constructor() { 
        this.Q4 = ""
        this.ex = ""
        this.undeline = ""
        this.radio = ""
        this.submitButton = ""
    }
    form5_hide()
    {
        this.Q4.hide()
        this.ex.hide()
        this.radio.hide()
        this.submitButton.hide()
    }
    display() {
        //textAlign(CENTER);
        if(!this.Q4)
        {
            this.Q4 = createElement('h3');
            this.Q4.html("Q4. Choose the right meaning for the word: Hiatus(n)")
            this.Q4.position(290, 100);

        }
        if(!this.ex)
        {
            this.ex = createElement('h3');
            this.ex.html("Ex: There was a hiatus in the activities of the agency.");
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
            this. radio.option("A group of pessimistic people");
            this.radio.option("An extremely insecure person",2);
            this.radio.option("A slight pause in a sequence or activity",3); 
            this.radio.option("A very hardworking group of people",4);
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