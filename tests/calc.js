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
        homepage.verifyresultnegetive('11');
        browser.sleep(1000);
      
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
});