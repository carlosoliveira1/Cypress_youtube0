const el = require('./elements').ELEMENTS;


class Register {
    acessarCadastro() {
        cy.visit('http://localhost:3000/register');


    }

    preencherCadastro() {
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@mail.com');
        cy.get('[data-cy=whatsapp]').type('9999999999');
        cy.get('[data-cy=city]').type('Nova iguaçu');
        cy.get('[data-cy=uf]').type('RJ');


        cy.route('POST', '**/ongs',).as('postOng');


        cy.get('[data-cy=submit]').click();



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