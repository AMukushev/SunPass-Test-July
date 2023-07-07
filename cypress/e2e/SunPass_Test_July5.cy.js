describe('My SunPass test 1-4', () => {
  it('Test 1. Should succefully open home page', () => {    
    cy.visit('https://sunpass.com');
    cy.contains('Welcome to SunPass').should('be.visible');
    });
  it('Test 2. Should succefully open Login web page', () => {
    cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do')
    cy.get('[name=accountLoginForm]').should('be.visible');
  });

  it('Test 3. Should succefully log in account and check for account number and user first/last name', () => {
    cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do')
    cy.get('[id=tt_username1]').type('amukushev78');
    cy.get('[id=tt_loginPassword1]').type('Adam2022!');
    cy.get('[name=btnLogin]').click({multiple: true, force: true});
    cy.contains('ACCOUNT # 106612385').should('be.visible');
    cy.contains('AIDARBEK MUKUSHEV').should('be.visible');
  });
  it('Test 4. Should successfully use Fixture for Credentials', () => {
    cy.visit('https://www.sunpass.com/vector/account/home/accountLogin.do');
    cy.fixture("SunPassCredentials.json").then( (SunPassCredentials)=> {
    cy.get('[id=tt_username1]').type(SunPassCredentials.login)
    cy.get('[id=tt_loginPassword1]').type(SunPassCredentials.password)
    cy.get('[name=btnLogin]').click({multiple: true, force: true})
    cy.contains('ACCOUNT # 106612385').should('be.visible')
    cy.get('[id=account_nav_panel]').click()
    cy.contains('LOGOUT').click()
    cy.log('LOGIN WITH FIXTURE CREDENTIALS IS SUCCESSFULL')
        }) 
    })
  })
  
  describe('My SunPass test 5-10', () => {
  it('Test 5.Should navigate to Add funds page', () =>{
      //here I wanted Cypress to click atribute href "Add Funds" 
      cy.visit('https://www.sunpass.com/vector/account/payment/replenishAmountPayment.do'); 
      cy.get('[id=tt_username1]').type('amukushev78');
      cy.get('[id=tt_loginPassword1]').type('Adam2022!');
      cy.get('[name=btnLogin]').click({multiple: true, force: true})
      cy.get('[title="Add Funds"]').click({ multiple: true, force: true})
      cy.log('ACCESS TO ADD FUNDS PAGE IS SUCCESSFULL')
      })
  })

