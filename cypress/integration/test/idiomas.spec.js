describe('Idiomas', () => {

    it('3 - Idiomas - Cambia de idiomas en el desplegable y comprueba que se aplica el cambio', () => {
        
        cy.visit("https://genial.ly/es/")

        cy.get("div[data-cy='languageButton']")
        .click()

        cy.get("a[data-cy='languageEn']")
        .click()
    
        cy.wait(500)

        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Login')

        cy.get("div[data-cy='languageButton']")
        .click()

        cy.get("a[data-cy='languageFr']")
        .click()

        cy.wait(500)

        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Se connecter')

        cy.get("div[data-cy='languageButton']")
        .click()

        cy.get("a[data-cy='languageEs']")
        .click()

        cy.wait(500)

        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Acceder')

    });
    
});