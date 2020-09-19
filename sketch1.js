var canvas
var bg1, bg2, bg3, bg4, bg5, number;
var gameState = 0;
var button, button1, button2;
var form3;
var radio;
var answerArray = [];
var wrongQuestions = [];
var questionCounter = 0;
var score = 0;
var submitButton;
var answer;
var form1, form2, form3, form4, form5,
    form6, form7, form8, form9, form10, form11;
var play = 0
var frm_2_flag = 0
var frm_3_flag = 0
var frm_4_flag = 0
var frm_5_flag = 0
var frm_6_flag = 0
var frm_7_flag = 0
var frm_8_flag = 0
var frm_9_flag = 0
var frm_10_flag = 0
var frm_11_flag = 0

function preload() {
    bg1 = loadImage("Wallpaper1.jpg");
    bg2 = loadImage("Wallpaper2.jpg");
    bg3 = loadImage("Wallpaper3.jpg");
    bg4 = loadImage("Wallpaper4.png");
    bg5 = loadImage("Wallpaper5.png");
    bg6 = loadImage("Wallpaper6.png");
    bg7 = loadImage("Wallpaper7.png");
    bg8 = loadImage("Wallpaper8.png");
    bg9 = loadImage("Wallpaper9.png");
    bg10 = loadImage("Wallpaper10.png");
}
function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    answerArray = ['book', 'answer2', 'answer3', 'answer4'];
    form1 = new Form1();
    form2 = new Form2();
    form3 = new Form3();
    form4 = new Form4();
    form5 = new Form5();
    form6 = new Form6();
    form7 = new Form7();
    form8 = new Form8();
    form9 = new Form9();
    form10 = new Form10();
    form11 = new Form11();
    questionCounter = 1;
}
function draw() {
    //console.log(questionCounter)
    if (gameState === 0) {
        if (frameCount < 100) {
            background(bg2);
            textSize(54);
            textAlign(CENTER)
            fill("#FF0066");
            text("Vocabulary World", displayWidth - 700, displayHeight - 400);
            textSize(28);
            fill("orange");
            text(" - By Ankur Tadipatri", displayWidth - 470, displayHeight - 200);
        }
        if (frameCount > 105 && frameCount < 350) {
            background(bg3);
            textSize(54);
            textAlign(CENTER);
            fill("#FF0066")
            text("Words of the Week!", displayWidth - 700, displayHeight - 700);
            textSize(35);
            fill("#FF3300");
            text("Confabulate (verb):", displayWidth - 1150, displayHeight - 600)
            textSize(25);
            text("1. To engage in informal talk.", displayWidth - 1150, displayHeight - 550);
            text("2. To hold a discussion.", displayWidth - 1180, displayHeight - 500);
            textSize(35);
            fill("#660099");
            text("Requite (verb):", displayWidth - 320, displayHeight - 600);
            textSize(25);
            text("1. To do or give something in return for. ", displayWidth - 260, displayHeight - 550);
            text("2. Repaying another person's favour.", displayWidth - 280, displayHeight - 500);
            textSize(35);
            fill("#FFCC00");
            text("forte (noun):", displayWidth - 700, displayHeight - 400);
            textSize(25);
            text("1. A person's strong point.", displayWidth - 690, displayHeight - 350);
            text("2. Something at which a person excels.", displayWidth - 700, displayHeight - 300);
            gameState = 1;
            play = 1
        }
        /*if(frameCount > 220){
            gameState = 2;
        }*/
    }
    if (frameCount > 350 && gameState === 1) {
        //console.log("Inside rameCount > 350")
        //if (gameState === 1) {
        background(bg4);
        textSize(42);
        textAlign(CENTER)
        fill("#3366CC");
        text("Vocabulary World", displayWidth - 700, displayHeight - 700);
        textSize(18.5);
        fill('black');
        textAlign(CENTER)
        text("Words are extraordinary! There are always new words", 670, 155);
        text("to explore, because words are a universe in themselves.", 670, 180);
        text("This app helps you explore that world, all while", 670, 205);
        text("improving your knowledge of words - Vocabulary. Brace", 670, 230);
        text("yourselves for some interesting and rapid rounds of words.", 670, 255);
        text("Let's see if you can crack the game and ace the vocabulary!", 670, 280);
        // form1 = new Form1();
        form1.display();
    }
    if (gameState === 2) {
      
        background(bg10);
        //button.hide();
        //button1.hide();
        textAlign(CENTER)
        textSize(42);
        fill("#CC0099");
        text("Instructions", 250, 50);
        textSize(18.5);
        textAlign(CENTER)
        fill('black');
        text("1. You will be given 10 vocabulary questions each round. ", 255, 130);
        text("2. A word will show up and you have to choose the most", 250, 155);
        text("appropriate meaning from the four options on the screen. ", 250, 180);
        text("3. Make sure you finish up before the timer runs out!", 250, 205);
        text("4. Your score will show up after every round completes.", 250, 230);
        text("5. Have fun and keep learning new words! ", 250, 255);
    }
    if (gameState === 3) {
        background(bg8);
        // if (frm_a_flag == 0) {
        //     form1.hide();
        //     form2.display();
        //     frm_a_flag = 1
        // }
        //}
        //form1.hide();
        /*var form5 = new Form5();
        form5.display();
        */
        switch (questionCounter) {
            case 1:
                if (frm_2_flag == 0) {
                    form1.hide();
                    form2.display();
                    frm_2_flag = 1
                }
                break
            case 2:
                
                if (frm_3_flag == 0) {
                    form2.form2_hide();
                    form3.display();
                    frm_3_flag = 1
                }
               
                break
            case 3:
                if (frm_4_flag == 0) {
                    form3.form3_hide();
                    form4.display();
                    frm_4_flag = 1
                }
              
                break
            case 4:
                if (frm_5_flag == 0) {
                    form4.form4_hide();
                    form5.display();
                    frm_5_flag = 1
                }
                
                break
            case 5:
                if (frm_6_flag == 0) {
                    form5.form5_hide();
                    form6.display();
                    frm_6_flag = 1
                }
                
                break
            case 6:
                if (frm_7_flag == 0) {
                    form6.form6_hide();
                    form7.display();
                    frm_7_flag = 1
                }
                
                break
            case 7:
                if (frm_8_flag == 0) {
                    form7.form7_hide();
                    form8.display();
                    frm_8_flag = 1
                }
               
                break
            case 8:
                if (frm_9_flag == 0) {
                    form8.form8_hide();
                    form9.display();
                    frm_9_flag = 1
                }
                console.log("Inside switch case 8")
                break
            case 9:
                if (frm_10_flag == 0) {
                    form9.form9_hide();
                    form10.display();
                    frm_10_flag = 1
                }
                console.log("Inside switch case 9")
                break
            case 10:
                if (frm_11_flag == 0) {
                    form10.form10_hide();
                    form11.display();
                    frm_11_flag = 1
                }
            default: break
        }
    }
    drawSprites();
}
/*showResult(){
    //wrongQuestions
    text("Q:" + wrongQuestions[i])
}*/
