const el = require('./elements').ELEMENTS;

class Profile {
    clicarNoBotaoLogout() {
        cy.get(el.buttonLogout).click();

    }

    clicarBot√£ocadastrarNovosCasos() {
        cy.get(el.buttonNewIncident).click();

    }

    clicarNoBotaoExcluirUmcaso() {
        cy.route('DELETE', '**/incidents/*').as('deleteIncident');

        cy.get(el.buttonDelete).click();

    }

    validarxEclusaoDeUmcasoComSucesso() {


        cy.wait('@deleteIncident').then((xhr) => {
            expect(xhr.status).to.eq(204);
            expect(xhr.response.body).to.be.empty;


        })

    }

}

export default new Profile();