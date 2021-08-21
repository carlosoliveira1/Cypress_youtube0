const el = require('./elements').ELEMENTS;

class NewIncident {
    preencherCadastroDeCasos() {
        cy.get(el.title).type('Animal sem moradia');
        cy.get(el.description).type('Moradia');
        cy.get(el.value).type(200);

        cy.route('POST', '**/incidents').as('newIncident');


        cy.get(el.bottonSave).click();



    }
    validarCadastroDeCasos() {

        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body).has.not.null;

        })




    }



}

export default new NewIncident();