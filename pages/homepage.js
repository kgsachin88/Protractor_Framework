let homepage = function(){

    let firstNumber_input = element(by.model('first'));

    let secondNumber_input =  element(by.model('second'));

    let goButton = element(by.css('[ng-click="doAddition()"]'));

    let subtract = element(by.css("option[value='SUBTRACTION']"));

    let multiplication = element(by.css("option[value='MULTIPLICATION']"));

    let division = element(by.css("option[value='DIVISION']"));

    let modulo = element(by.css("option[value='MODULO']"));

    this.substract =function(){
        subtract.click();
    }

    this.division =function(){
        division.click();
    }

    this.modulo =function(){
        modulo.click();

    }

    this.multiplication = function(){
        multiplication.click();
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

    this.verifyresultnegetive = function(result){

        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).not.toEqual(result);
    };

};

module.exports = new homepage();