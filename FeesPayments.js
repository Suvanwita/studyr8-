class FeesPayments{
    constructor(){

    }
     display(){
        var feeCheckX=260,feeCheckY=300;
        for(feeCheckY=300;feeCheckY<750;feeCheckY+=40){
         for(feeCheckX=260;feeCheckX<1280;feeCheckX+=50){
            createCheckbox(feeCheckX,300);
         }
        }
     }
}