let homepage = require('../pages/homepage');

describe('Demo calculator tests',function(){

    it('addition tests',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('7');
        homepage.clickGo();
        homepage.verifyresult('11');
        browser.sleep(5000);
      
    });

    it('Subtraction tests negetive',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');

        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstnumber('4');
        homepage.enterSecondnumber('7');
        homepage.clickGo();
        homepage.verifyresult('1');
        browser.sleep(5000);
      
    });
});