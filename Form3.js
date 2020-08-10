//form to Choose Planner
class Form3{
    constructor(){}

    display(){
       
        //left column
        var GoalSetting=createButton("Goal Setting");
        GoalSetting.position(400,200);
        GoalSetting.size(300,80);

        var TimePlanner=createButton("Time Planner");
        TimePlanner.position(450,350);
        TimePlanner.size(300,80);
        
        var ExamSchedule=createButton("Exam Schedule");
        ExamSchedule.position(400,500);
        ExamSchedule.size(300,80);
        
        var YourProgress=createButton("Your Progress");
        YourProgress.position(450,650);
        YourProgress.size(300,80);

         var Library=createButton("Library");
        Library.position(400,800);
        Library.size(300,80);

        //right column
        var Assignment=createButton("Assignment");
        Assignment.position(950,200);
        Assignment.size(300,80);

        var Tuition=createButton("Tuition class");
        Tuition.position(1000,350);
        Tuition.size(300,80);
        
        var FeesPayment=createButton("Fees Payment");
        FeesPayment.position(950,500);
        FeesPayment.size(300,80);
        
        var Cocurricular=createButton("Cocurricular Activities");
        Cocurricular.position(1000,650);
        Cocurricular.size(300,80);

         var Reminder=createButton("Reminders");
        Reminder.position(950,800);
        Reminder.size(300,80);

        GoalSetting.mousePressed(function(){

           GoalSetting.hide();
           ExamSchedule.hide();
           TimePlanner.hide();
           YourProgress.hide();
           Library.hide();
           Assignment.hide();
           Reminder.hide();
           Cocurricular.hide();
           FeesPayment.hide();
           Tuition.hide();

           goal=new GoalSetting();
            game.update(3);
            game.displayGoalSetting();

       


        })

       TimePlanner.mousePressed(function(){

            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();
            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();
 
             game.update(4);
             //game.displayInfo();
 
         })

         ExamSchedule.mousePressed(function(){

            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();
            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();
 
             game.update(5);
             //game.displayInfo();
 
         })

         YourProgress.mousePressed(function(){

            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();
            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();
 
             game.update(6);
             //game.displayInfo();
 
         })
  
         Library.mousePressed(function(){

            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();
            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();
 
             game.update(7);
             //game.displayInfo();
 
         })
 
        FeesPayment.mousePressed(function(){
 
             GoalSetting.hide();
             ExamSchedule.hide();
             TimePlanner.hide();
             YourProgress.hide();
             Library.hide();
             Assignment.hide();
             Reminder.hide();
             Cocurricular.hide();
             FeesPayment.hide();
             Tuition.hide();
  
              game.update(8);
              //game.displayInfo();
  
          })
 
          Assignment.mousePressed(function(){
 
             GoalSetting.hide();
             ExamSchedule.hide();
             TimePlanner.hide();
             YourProgress.hide();
             Library.hide();
             Assignment.hide();
             Reminder.hide();
             Cocurricular.hide();
             FeesPayment.hide();
             Tuition.hide();
  
              game.update(9);
              //game.displayInfo();
  
          })
 
         Tuition.mousePressed(function(){
 
             GoalSetting.hide();
             ExamSchedule.hide();
             TimePlanner.hide();
             YourProgress.hide();
             Library.hide();
             Assignment.hide();
             Reminder.hide();
             Cocurricular.hide();
             FeesPayment.hide();
             Tuition.hide();
  
              game.update(10);
              //game.displayInfo();
  
          })
          Cocurricular.mousePressed(function(){
 
            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();
            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();
 
             game.update(11);
             //game.displayInfo();
 
         })
        Reminder.mousePressed(function(){
 
            GoalSetting.hide();
            ExamSchedule.hide();
            TimePlanner.hide();
            YourProgress.hide();

            Library.hide();
            Assignment.hide();
            Reminder.hide();
            Cocurricular.hide();
            FeesPayment.hide();
            Tuition.hide();

 
             game.update(12);
             //game.displayInfo();
 
         })
   
    }

}