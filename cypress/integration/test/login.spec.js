describe("Login", () => {

  it("1 - Login - Login with incorrect credentials and then with correct credentials", () => {

    //Visit the Genially web
    cy.visit("https://genial.ly/es/")

    //Access the login portal
    cy.get('a[data-cy="loginButton"] > button')
      .first()
      .click()

    cy.wait(500)

    cy.fixture('datos_usuarios.json')
      .then(datos => {

        const incorrecto1 = datos.login_incorrecto1

        //Enter the email and password in the login form to check incorrect credentials
        cy.rellenarLogin(incorrecto1.email, incorrecto1.contra)

        //Check the error message appears
        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        //Clear the text fields of the form
        cy.limpiarLogin()

        const incorrecto2 = datos.login_incorrecto2

        //Enter the email and password in the login form to check incorrect credentials
        cy.rellenarLogin(incorrecto2.email, incorrecto2.contra)

        //Check the error message appears
        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        //Clear the text fields of the form
        cy.limpiarLogin()

        const correcto = datos.login_correcto

        //Enter the email and password correct in the login form to check correct credentials
        cy.rellenarLogin(correcto.email, correcto.contra)

        //Access and check the user profile
        cy.get('div[data-cy="userProfileSection"]')
          .should('have.exist')

      })
  })
})
