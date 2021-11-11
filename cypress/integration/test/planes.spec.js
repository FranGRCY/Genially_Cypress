describe('Planes', () => {

    it('2 - Comprueba que aparece los tipos de planes con el botón para solicitarlo correctamente.', () => {

        //Visita la web de "Genially"
        cy.visit("https://genial.ly/es/")

        //Selecciona la pestaña de Planes de la barra de navegación
        cy.get('li[data-cy="plansMenuItemTopBar"]')
            .first()
            .click()

        cy.wait(500)

        //Selecciona la pestaña de Educación en la sección de Planes
        cy.get('a[href="/es/planes/educacion/"]')
            .first()
            .click({ force: true })

        cy.wait(500)

        //Comprueba que aparece el Plan Free y el botón para solicitarlo
        cy.compruebaPlan("eduCardsPlanFree")

        //Comprueba que aparece el Plan Estudiante y el botón para solicitarlo
        cy.compruebaPlan("eduCardsPlanEstudiante")

        //Comprueba que aparece el Plan Edu pro y el botón para solicitarlo
        cy.compruebaPlan("eduCardsPlanEdu pro")

        //Comprueba que aparece el Plan Master y el botón para solicitarlo
        cy.compruebaPlan("eduCardsPlanMaster")

        //Selecciona la pestaña de Empresa en la sección de Planes
        cy.get('a[href="/es/planes/"]')
            .first()
            .click({ force: true })

        cy.wait(500)

        //Comprueba que aparece el Plan Free y el botón para solicitarlo
        cy.compruebaPlan("corpCardsPlanFree")

        //Comprueba que aparece el Plan Pro y el botón para solicitarlo
        cy.compruebaPlan("corpCardsPlanPro")

        //Comprueba que aparece el Plan Master y el botón para solicitarlo
        cy.compruebaPlan("corpCardsPlanMaster")

        //Comprueba que aparece el Plan Team y el botón para solicitarlo
        cy.compruebaPlan("corpCardsPlanTeam")


    });

});