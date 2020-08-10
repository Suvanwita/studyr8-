class User{
    constructor(){}

    getUserCount(){
        var userCountRef=database.ref("userCount");
        userCountRef.on("value",function(data){
            userCount=data.val();     
        });
    }
   
    updateUserCount(count){
        database.ref('/').update({
            userCount:count
        })    
        console.log(userCount);
    }

    updateUserDetails(name,email){
        var userIndex="User"+userCount;
       
        database.ref("Users/"+userIndex).update({
            name:name,
            email:email
        })
    }

    userGoalSetting(){
        userGoal=database.ref("Goal");
        userGoal.on("value",readGoal,writeGoal);

        
        function readGoal(data){
            userGoal=data.val();
          }
          
          function writeGoal(goalInput){
          database.ref('/').update({
            Goal:GoalSetting.goalInput.value()
          })
          }

     }

   
    }
