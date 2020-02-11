let EP_LandingPage = function(){

    let signIn = element(by.linkText('SIGN IN'));

    this.signIn = function(){
        signIn.click();
        
    }

}
module.exports =new EP_LandingPage();