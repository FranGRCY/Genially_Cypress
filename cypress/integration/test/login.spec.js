describe("Login", () => {

  it("1 - Login - Realiza login con datos incorrectos y posteriormente el correcto", () => {

    //Visita la web de "Genially"
    cy.visit("https://genial.ly/es/")

    //Accede al portal de login
    cy.get('a[data-cy="loginButton"] > button')
      .first()
      .click()

    cy.wait(500)

    cy.fixture('datos_usuarios.json')
      .then(datos => {

        const incorrecto1 = datos.login_incorrecto1

        //Introduce el email y la contraseña en el formulario de login para comprobar incorrectos
        cy.rellenarLogin(incorrecto1.email, incorrecto1.contra)

        //Comprueba que aparece el mensaje de error
        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        //Limpia los campos de texto del formulario de login
        cy.limpiarLogin()

        const incorrecto2 = datos.login_incorrecto2

        //Introduce el email y la contraseña en el formulario de login para comprobar incorrectos
        cy.rellenarLogin(incorrecto2.email, incorrecto2.contra)

        //Comprueba que aparece el mensaje de error
        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        //Limpia los campos de texto del formulario de login
        cy.limpiarLogin()

        const correcto = datos.login_correcto

        //Introduce el email y la contraseña en el formulario de login para comprobar correctos
        cy.rellenarLogin(correcto.email, correcto.contra)

        //Comprueba que se accede correctamente y muestra el perfil del usuario
        cy.get('div[data-cy="userProfileSection"]')
          .should('have.exist')

      })
  })
})
