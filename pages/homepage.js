let homepage = function(){

    let firstNumber_input = element(by.model('first'));

    let secondNumber_input =  element(by.model('second'));

    let goButton = element(by.css('[ng-click="doAddition()"]'));

    let subtract = element(by.css("option[value='SUBTRACTION']"));

    this.substract =function(){
        subtract.click();
    }

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstnumber = function(firstno){
        firstNumber_input.sendKeys(firstno);
    };
    
    this.enterSecondnumber = function(secondno){
        secondNumber_input.sendKeys(secondno);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyresult = function(result){

        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};

module.exports = new homepage();