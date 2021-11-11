describe('Idiomas', () => {

    it('3 - Idiomas - Cambia de idiomas en el desplegable y comprueba que se aplica el cambio', () => {
        
        //Visita la web de "Genially"
        cy.visit("https://genial.ly/es/")

        //Selecciona el desplegabe de idiomas
        cy.get("div[data-cy='languageButton']")
        .click()

        //Selecciona el idioma en Ingles
        cy.get("a[data-cy='languageEn']")
        .click()
    
        cy.wait(500)

        //Comprueba que ha cambiado el texto en el botón de login a Ingles
        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Login')

        //Selecciona el desplegable de idiomas
        cy.get("div[data-cy='languageButton']")
        .click()

        //Selecciona el idioma en Frances
        cy.get("a[data-cy='languageFr']")
        .click()

        cy.wait(500)

        //Comprueba que ha cambiado el texto en el botón de login a Frances
        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Se connecter')

        //Selecciona el desplegable de idiomas
        cy.get("div[data-cy='languageButton']")
        .click()

        //Selecciona el idioma en Español
        cy.get("a[data-cy='languageEs']")
        .click()

        cy.wait(500)

        //Comprueba que ha cambiado el texto en el botón de login a Español
        cy.get("a[data-cy='loginButton'] > button")
        .first()
        .should("have.text", 'Acceder')

    });
    
});