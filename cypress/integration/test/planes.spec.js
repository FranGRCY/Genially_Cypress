describe('Planes', () => {

    it('2 - Comprueba que aparece los tipos de planes con el botón para solicitarlo correctamente.', () => {

        cy.visit("https://genial.ly/es/")

        cy.get('li[data-cy="plansMenuItemTopBar"]')
            .first()
            .click()

        cy.wait(500)

        cy.get('a[href="/es/planes/educacion/"]')
            .first()
            .click({ force: true })

        cy.wait(500)

        cy.compruebaPlan("eduCardsPlanFree")

        cy.compruebaPlan("eduCardsPlanEstudiante")

        cy.compruebaPlan("eduCardsPlanEdu pro")

        cy.compruebaPlan("eduCardsPlanMaster")

        cy.get('a[href="/es/planes/"]')
            .first()
            .click({ force: true })

        cy.wait(500)

        cy.compruebaPlan("corpCardsPlanFree")

        cy.compruebaPlan("corpCardsPlanPro")

        cy.compruebaPlan("corpCardsPlanMaster")

        cy.compruebaPlan("corpCardsPlanTeam")


    });

});