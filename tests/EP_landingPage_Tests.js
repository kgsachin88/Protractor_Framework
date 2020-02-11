let EP_LandingPage = require('../pages/EP_LandingPage');

describe('EcoSysLanding Page',function(){



it('click on login',function(){
   
    browser.waitForAngularEnabled(false);
    browser.get('https://qa.developer.honeywellhome.com/');
    EP_LandingPage.signIn();
    browser.sleep(5000)
    let title_Name =browser.getTitle();
    //expect(title_Name).toBe('Sign In | Honeywell Home Developer');
})
});
