describe('handle dropdoowns', ()=>{

    //select tag dropdown
    it.skip('Dropdown with select tag', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html?src=homepage')

        cy.get('#zcf_address_country')
        .select('Bangladesh')
        .should('have.value', 'Bangladesh')
        
    })

    //span tag dropdown
    it.skip('Span tag dropdown', () => {
    
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    
        cy.get('#select2-billing_country-container')
        .click()
    
        cy.get('.select2-search__field').type('Bangladesh').type('{enter}')
    
        cy.get('#select2-billing_country-container')
        .should('have.text', 'Bangladesh')
    })


    //auto suggested dropdown
    it.skip('Auto suggested dropdown', () => {
    
        cy.visit('https://www.wikipedia.org/')
    
        cy.get('#searchInput').type('Dhaka')
    
        cy.get('.suggestion-title')
        .contains('Dhaka Medical College and Hospital')
        .click()
        
    })
    
    //Dynamic dropdown - google
    it.skip('Auto suggested dropdown', () => {
    
        cy.visit('https://www.google.com/')

        cy.get('.SDkEP').type('bdt to usd')

        cy.get('div.wM6W7d>span').should('have.length', 13)

        //el = element, list = array

        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text() == 'bdt to usd rate today')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('.SDkEP').should('have.value','bdt to usd rate today')
    })
})