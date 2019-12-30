describe('Demo calculator tests',function(){

    it('addition tests',function(){

        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(3);
        
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','6'));
        expect(result.getText()).toEqual('6');
        browser.sleep(5000);

    });

    it('subtraction test', function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(3);
        element(by.model('second')).sendKeys(3);
        let selectSub = element.all(by.options("value for (key, value) in operators"));
        expect(selectSub.count()).toEqual(5);
        element(by.css("option[value='SUBTRACTION']")).click();
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding','0'));
        expect(result.getText()).toEqual('0');
        browser.sleep(5000);


    });



});