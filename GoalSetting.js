class GoalSetting{
    
    constructor(){
        this.Text2=createElement("h2");
        this.BackButton2=createButton("Go back");
        this.Text3=createElement("h2");
        this.submitButton=createButton("Submit");
       
    }

    display(){
        
        //var Text2=createElement("h2");
        this.Text2.position(500,100);
        this.Text2.html("Here are six reasons why setting goals is important.:"
        +"<br/>"+"<br/>"+
        "Goals Give You Focus. Without a goal, your efforts can become"+"<br/>"+
        " disjointed and often confusing...."+"<br/>"+
        "Goals Help You Measure Progress. ..."+"<br/>"+
        "Goals Help You Stay Motivated. ..."+"<br/>"+
        "They Help You Beat Procrastination. ..."+"<br/>"+
        "You Achieve Even More. ... "+"<br/>"+
        " Goals Help You Determine What You Want in Life."+"<br/>"+"<br/>"+
        " THEREFORE, IT IS EXTREMELY IMPORTANT TO SET A GOAL."
        +"<br/>");

        
         this.BackButton2.position(780,800);
         this.BackButton2.size(100,30);

        
       
        this.Text3.position(700,550);
        
        
         this.submitButton.position(700,525);

        if(this.submitButton.mousePressed(()=>{
            var goalvalue=goalInput.value();
            this.Text3.html("Your current goal is: " + goalvalue);
       
        }))

        this.BackButton2.mousePressed(function(){

            this.Text2.hide();
            this.Text3.hide();
            this.BackButton2.hide();
            this.goalInput.hide();
            game.update(2);
            game.displayChoose();

        });
  
    
    }
}