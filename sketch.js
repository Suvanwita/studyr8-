var form1,form2,form3, user,game,timePlanner;
var gameState=0;
var database;
var userCount;
var userIndex;
var goal;
var ImgSprite;
var goalInput;
var timeText,assText;

function preload(){
/*
formImg=loadImage("books.jfif");
classImg=loadImage("classroom.jfif");
chooseImg=loadImage("goalQuotes.jfif");
goalImg=loadImage("goalSetting.jfif");
timeTableImg=loadImage("timeTable.jfif");
assignmentImg=loadImage("assignment.jfif");
examScheduleImg=loadImage("exams.jfif");
progressImg=loadImage("examresults.jfif");
libraryImg=loadImage("library.jfif");
tuitionImg=loadImage("tuitionclass.jfif");
feesImg=loadImage("fees.jfif");
cocurricularImg=loadImage("Cocurricular.jfif");
remindImg=loadImage("reminder.jfif");
*/
}


function setup() {
    canvas = createCanvas(displayWidth-36,displayHeight-20);
    database=firebase.database();

    ImgSprite=createSprite(160,480,100,100);

    user=new User();
    user.getUserCount();
   
    game=new Game();
    game.getState();
    game.start();
 
}
function draw() {
   
    console.log(mouseX,mouseY);
    
    if(gameState===0){//user form introductory
        background(245,36,146);
        //ImgSprite.addImage(formImg);
    }
    if(gameState===1){//study r8 intro
        background(247,140,153);
        //ImgSprite.addImage(classImg);
    }
    if(gameState===2){//choose planner
        background(96,247,242);
    }
    if(gameState===3){//goalsetting
        background(104,40,248);
        game.displayGoalSetting();
        //var goalInput=createInput("Enter your goal...    ");
        //goalInput.position(750,500);


    }
    if(gameState===4){//timeplanner
        background(204,155,247);
        
        hr=hour();
        mn=minute();
        sc=second();       
        angleMode(DEGREES);     
        scAngle=map(sc,0,60,0,360);
        mnAngle=map(mn,0,60,0,360);
        hrAngle=map(hr%12,0,60,0,360);
        fill(242,201,195);
        ellipse(150,300,300,300);
        //second hand
        translate(150,300);
        rotate(-80);//-90
        push();
        rotate(scAngle);
        stroke(134,165,213); 
        strokeWeight(3);
        line(0,0,140,0);
        pop();
        //minute hand
        translate(0,0);
        rotate(-10);//-180
        push();
        rotate(mnAngle);
        stroke(107,96,190); 
        strokeWeight(6);
        line(0,0,120,0);
        pop();
        //hour hand
        translate(0,0);
        rotate(180);//180
        push();
        rotate(hrAngle);
        stroke(107,96,190); 
        strokeWeight(8);
        line(0,0,80,0);
        pop();

        timePlanner.displayTimePlanner();

       // text("Time is the most precious gift.",50,560);
       // text("Don't waste it. ",80,580);

    }
    if(gameState===5){//exam
        background(248,95,3);
       
        var examX=140,examY=160;
        for(examY=160;examY<710;examY+=60){
        line(140,examY,1350,examY);
        }
        for(examX=140;examX<1350;examX+=200){
            line(examX,160,examX,710);
        }

    }
    if(gameState===6){//progress
        background(231,221,247);
    }
    if(gameState===7){//library
        background(218,169,203);
        game.displayLibrary();

        var timeX=240,timeY=160;
        for(timeY=160;timeY<710;timeY+=60){
        line(240,timeY,1230,timeY);
        }
        for(timeX=240;timeX<1230;timeX+=247){
            line(timeX,160,timeX,710);
        }
    }
    if(gameState===8){//fees
        background(229,147,204);
        line(100,140,100,740);
        var feeX=100,feeY=140;
        for(feeY=140;feeY<740;feeY+=30){
        line(100,feeY,1293,feeY);
        }
        for(feeX=250;feeX<1293;feeX+=80){
            line(feeX,140,feeX,740);
        }

        game.displayFeesPayment();

       
        
    }
    if(gameState===9){//assignment
        background(170,248,239);
        //assignment,subject,dueDate,source
        var asX=240,asY=160;
        for(asY=160;asY<710;asY+=30){
        line(240,asY,1230,asY);
        }
        for(asX=240;asX<1230;asX+=247){
            line(asX,160,asX,710);
        }

        game.displayAssignment();
    }
    if(gameState===10){//tuition
        background(227,241,159);
        var tuiX=70,tuiY=120;
        for(tuiY=120;tuiY<690;tuiY+=80){
        line(70,tuiY,1220,tuiY);
        }
        for(tuiX=70;tuiX<1220;tuiX+=190){
            line(tuiX,120,tuiX,690);
        }

    }
    if(gameState===11){//cocurricular
        background(248,248,0);
        var coX=240,coY=160;
        for(coY=160;coY<710;coY+=60){
        line(240,coY,1240,coY);
        }
        for(coX=240;coX<1240;coX+=199){
            line(coX,160,coX,710);
        }

    }
    if(gameState===12){
        background(0,0,248);
    }


}