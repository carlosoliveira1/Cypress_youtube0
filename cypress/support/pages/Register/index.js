const el = require('./elements').ELEMENTS;


class Register {
    acessarCadastro() {
        cy.visit('http://localhost:3000/register');


    }

    preencherCadastro() {
        cy.get(el.name).type('Dogs queridos');
        cy.get(el.email).type('dogs@mail.com');
        cy.get(el.whatsapp).type('9999999999');
        cy.get(el.city).type('Nova iguaçu');
        cy.get(el.uf).type('RJ');


        cy.route('POST', '**/ongs',).as('postOng');


        cy.get(el.submit).click();



    }

    validarCadastroDeOngComSucesso() {

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;


        })

    }



}

export default new Register();