describe('Alerts', () => {

    //TEXT AND OK BUTTON

    it('Js alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click();

        //cypress event- this will validate the alert window msg
        cy.on('window:alert', (t) => {
            expect(t).to.contains('I am a JS Alert');
        })
        //alert windows close 
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    //CONFIRMATION ALERT WITH OK AND CANCEL BUTTON
    it('Js alert - ok button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();

        //cypress event- this will validate the alert window msg
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        //alert windows close 
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    
    
    it('Js alert - CANCLE button', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click();

        //cypress event- this will validate the alert window msg
        cy.on('window:confirm', (t) => {
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm', ()=> false); //to close by using cancel

        //alert windows close 
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    //propmt alert

    it('Js prompt alert - CANCLE button', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win)=>{
            
            cy.stub(win, 'prompt').returns('welcome');
        })

        cy.get(':nth-child(3) > button').click()

        //alert windows close 
        // cy.on('window:prompt', ()=> false);
        cy.get('#result').should('have.text', 'You entered: welcome')
    })

    //authenticate alert -- 1st approch
    it('Authentcation alert', () => {

        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: {
            username: 'admin',
            password: 'admin'
        }})
        
        cy.get('p').should('have.contain', 'Congratulations!')
    })

    //2nd approch
    it.only('Authentcation alert', () => {

        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth', {auth: {
            username: 'admin',
            password: 'admin'
        }})
        
        cy.get('p').should('have.contain', 'Congratulations!')
    })
    
})