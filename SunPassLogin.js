describe('My SunPass website 20 tests', () => {
    it('Test #1. Should succefully open home page', () => {    
      cy.visit('https://sunpass.com');
      cy.contains('Welcome to SunPass').should('be.visible');
      });
    it('Test #2. Should succefully open Login web page', () => {
      cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do')
      cy.get('[name=accountLoginForm]').should('be.visible');
      //cy.contains('Logout').click();
    });
  
    it('Test #3. Should succefully log in account and check for account number and user first/last name', () => {
      cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do')
      cy.get('[id=tt_username1]').type('amukushev78');
      cy.get('[id=tt_loginPassword1]').type('Adam2022!');
      cy.get('[name=btnLogin]').click({multiple: true, force: true});
      cy.contains('ACCOUNT # 106612385').should('be.visible');
      cy.contains('AIDARBEK MUKUSHEV').should('be.visible');
    });
  })
    
  describe('Test#4. Should successfully add funds', () => {
    // here I am using "beforeEach" 
    beforeEach(  () => { 
       cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do/');
       cy.getCredentials(); // here I'm learing how to use credentials container
      // cy.contains('ACCOUNT # 106612385').should('be.visible');
        });
        
        it('Test#5.Should navigate to Add funds page', () =>{
          // at this step I wanted Cypress to click  atribute href "Add Funds" 
          // but my code didnt see this href
          cy.visit('https://www.sunpass.com/vector/account/payment/replenishAmountPayment.do'); 
          cy.get('[id=tt_username1]').type('amukushev78');
          cy.get('[id=tt_loginPassword1]').type('Adam2022!');
          cy.get('[name=btnLogin]').click({multiple: true, force: true});
          cy.contains('PAYMENT AMOUNT').should('be.visible');
        })
      });