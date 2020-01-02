let homepage = require('../pages/homepage');

describe('Demo calculator tests',function(){

    it('addition tests',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('7');
        homepage.clickGo();
        homepage.verifyresult('11');
        browser.sleep(1000);
      
    });

    it('Addition tests negetive Scenario',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('7');
        homepage.clickGo();
        homepage.verifyresultnegetive('1');
        browser.sleep(2000);
      
    });

    it('subtraction positive test',function(){

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('3');
        homepage.substract();
        homepage.clickGo();
        homepage.verifyresult('1');
        browser.sleep(1000);

    })

    xit('Multipication Test Positive scenario',function(){
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('3');
        homepage.multiplication();
        homepage.clickGo();
        homepage.verifyresult('12');
        browser.sleep(1000);
    })

    
    it('Modulo Test Positive scenario',function(){
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('5');
        homepage.enterSecondnumber('3');
        homepage.modulo();
        homepage.clickGo();
        homepage.verifyresult('2');
        browser.sleep(1000);
    })

});