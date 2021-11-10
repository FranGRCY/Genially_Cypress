describe("Login", () => {

  it("1 - Login - Realiza login con datos incorrectos y posteriormente el correcto", () => {

    cy.visit("https://genial.ly/es/")

    cy.get('a[data-cy="loginButton"] > button')
      .first()
      .click()

    cy.wait(500)

    cy.fixture('datos_usuarios.json')
      .then(datos => {

        const incorrecto1 = datos.login_incorrecto1

        cy.rellenarLogin(incorrecto1.email, incorrecto1.contra)

        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        cy.limpiarLogin()

        const incorrecto2 = datos.login_incorrecto2

        cy.rellenarLogin(incorrecto2.email, incorrecto2.contra)

        cy.get('form').find('p')
          .should("have.text", "Email o contraseña incorrecto.")

        cy.limpiarLogin()

        const correcto = datos.login_correcto

        cy.rellenarLogin(correcto.email, correcto.contra)

        cy.get('div[data-cy="userProfileSection"]')
          .should('have.exist')

      })
  })
})
