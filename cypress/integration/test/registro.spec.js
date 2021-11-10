describe('Registro', () => {

    it('4 - Registro - Realiza un registro con email comprobando incorrectos hasta llegar a pantalla de selección de modalidad', () => {

        cy.visit("https://genial.ly/es/")

        cy.get('a[data-cy="registerButton"] > button')
            .first()
            .click()

        cy.wait(500)

        cy.fixture('datos_usuarios.json')
            .then(datos => {

                cy.get('button[data-cy="signUpWithEmailButton"]')
                    .click()

                cy.get('p > span')
                    .should('have.exist')

                cy.get('input[data-cy="legalCheckbox"]')
                    .check({ force: true })

                cy.get('button[data-cy="signUpWithEmailButton"]')
                    .click()

                const incorrecto1 = datos.registro_incorrecto1

                cy.rellenaRegistro(incorrecto1.nombre, incorrecto1.email, incorrecto1.contra)

                cy.get('input[data-cy="signUpEmailInput"]')
                    .next()
                    .should('have.exist')

                cy.borraRegistro()

                const incorrecto2 = datos.registro_incorrecto2

                cy.rellenaRegistro(incorrecto2.nombre, incorrecto2.email, incorrecto2.contra)

                cy.get('p[data-cy="passwordStrengthMessage"]')
                    .should('have.text', 'Tu contraseña debe tener un mínimo de 6 caracteres')

                cy.borraRegistro()

                const correcto = datos.registro_correcto

                cy.rellenaRegistro(correcto.nombre, correcto.email.replace("placeholder", Math.floor(Math.random() * 100)), correcto.contra)

                cy.wait(500)

                cy.get('div[data-cy="education"]')
                    .should('have.exist')

                cy.get('div[data-cy="corporate"]')
                    .should('have.exist')

            })
    });
});