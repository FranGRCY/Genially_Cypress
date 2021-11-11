// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/* Método que borra el texto en los campos de usuario y contraseña */
Cypress.Commands.add('limpiarLogin', () => {

    cy.get('input[data-cy="loginEmailInput"]')
        .clear()

    cy.get('input[data-cy="loginPasswordInput"]')
        .clear()
})

/* Método que introduce usuario y contraseña para realizar login */
Cypress.Commands.add('rellenarLogin', (usuario, contra) => {

    cy.get('input[data-cy="loginEmailInput"]')
        .type(usuario)

    cy.get('input[data-cy="loginPasswordInput"]')
        .type(contra)

    cy.get('button[data-cy="loginSubmitButton"]')
        .click()

    cy.wait(500)
})

/* Método que introduce el plan para comprobar si aparece el botón para solicitarlo */
Cypress.Commands.add('compruebaPlan', (plan) => {

    cy.get(`a[data-cy="${plan}"]`)
        .should('have.exist')

})

/* Método que borra los campos del formulario de registro */
Cypress.Commands.add('borraRegistro', () => {


    cy.get('input[data-cy="signUpFullNameInput"]')
        .clear()

    cy.get('input[data-cy="signUpEmailInput"]')
        .clear()

    cy.get('input[data-cy="signUpPasswordInput"]')
        .clear()

})

/* Método que rellena los campos del formulario de registro */
Cypress.Commands.add('rellenaRegistro', (nombre, email, contra) => {

    cy.get('input[data-cy="signUpFullNameInput"]')
        .type(nombre)

    cy.wait(500)    

    cy.get('input[data-cy="signUpEmailInput"]')
        .type(email)
    
    cy.wait(500)   

    cy.get('input[data-cy="signUpPasswordInput"]')
        .type(contra)

    cy.wait(500)   

    cy.get('button[data-cy="signUpSubmitButton"]')
        .click()

})










