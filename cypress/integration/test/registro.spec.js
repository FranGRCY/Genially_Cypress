describe('Registro', () => {

    it('4 - Registro - Realiza un registro con email comprobando incorrectos hasta llegar a pantalla de selección de modalidad', () => {

        //Visita la web de "Genially"
        cy.visit("https://genial.ly/es/")

        //Accede al portal de registro
        cy.get('a[data-cy="registerButton"] > button')
            .first()
            .click()

        cy.wait(500)

        cy.fixture('datos_usuarios.json')
            .then(datos => {

                //Selecciona el botón de registrar con email
                cy.get('button[data-cy="signUpWithEmailButton"]')
                    .click()

                cy.wait(500)

                //Comprueba que aparece mensaje de error que obliga a marcar el check en las políticas
                cy.get('p > span')
                    .should('have.exist')

                //Marca el check de las políticas y condiciones
                cy.get('input[data-cy="legalCheckbox"]')
                    .check({ force: true })

                //Selecciona el botón de registrar con email    
                cy.get('button[data-cy="signUpWithEmailButton"]')
                    .click()

                cy.wait(500)

                const incorrecto1 = datos.registro_incorrecto1

                //Rellena los campos de texto del formulario de registro con datos incorrectos
                cy.rellenaRegistro(incorrecto1.nombre, incorrecto1.email, incorrecto1.contra)

                cy.wait(500)

                //Comprueba que aparece mensaje de error al introducir un email con formato no válido
                cy.get('input[data-cy="signUpEmailInput"]')
                    .next()
                    .should('have.exist')

                //Borra el contenido de los campos de texto del formulario de registro
                cy.borraRegistro()

                const incorrecto2 = datos.registro_incorrecto2

                //Rellena los campos de texto del formulario de registro con datos incorrectos
                cy.rellenaRegistro(incorrecto2.nombre, incorrecto2.email, incorrecto2.contra)

                cy.wait(500)

                //Comprueba que aparece mensaje de error al introducir una contraseña con formato no válida
                cy.get('p[data-cy="passwordStrengthMessage"]')
                    .should('have.text', 'Tu contraseña debe tener un mínimo de 6 caracteres')

                //Borra el contenido de los campos de texto del formulario de registro    
                cy.borraRegistro()

                const correcto = datos.registro_correcto

                //Rellena los campos de texto del formulario de registro con datos correctos (el email se autogenera con un número diferente al ejecutarse)
                cy.rellenaRegistro(correcto.nombre, correcto.email.replace("placeholder", Math.floor(Math.random() * 100)), correcto.contra)

                cy.wait(500)

                //Comprueba que accede correctamente al onboarding mostrando la selección de planes
                cy.get('div[data-cy="education"]')
                    .should('have.exist')

                cy.get('div[data-cy="corporate"]')
                    .should('have.exist')

            })
    });
});