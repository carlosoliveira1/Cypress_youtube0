/// <reference types="Cypress" />

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';






describe.only('Ongs', () => {
    it('Devem pode realizar um cadastro', () => {
        // cy.visit('http://localhost:3000/register');
        // cy.get('[data-cy=name]').type('Dogs queridos');
        // cy.get('[data-cy=email]').type('dogs@mail.com');
        // cy.get('[data-cy=whatsapp]').type('9999999999');
        // cy.get('[data-cy=city]').type('Nova iguaçu');
        // cy.get('[data-cy=uf]').type('RJ');


        // cy.route('POST', '**/ongs',).as('postOng');


        // cy.get('[data-cy=submit]').click();

        // cy.wait('@postOng').then((xhr) => {
        //     expect(xhr.status).be.eq(200);
        //     expect(xhr.response.body).has.property('id');
        //     expect(xhr.response.body.id).is.not.null;


        // })

        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroDeOngComSucesso();

         



    });

    it('Deve poder realizar um login no sistema', () => {

        // const createOngId = Cypress.env('createdOngId');


        //  cy.log(createdOngId);

        // cy.visit('http://localhost:3000');
        // cy.get('input').type(Cypress.env('createdOngId'));
        // cy.get('.button').click();

        Logon.acessarLogin();
        Logon.preencherLogin();


    });

    it('devem poder fazer logout', () => {
        cy.login();
        cy.get('button').click();


    });


    it('devem poder cadastrar novos casos', () => {
        cy.login()
        cy.get('.button').click();
        cy.get('[placeholder="Título do caso"]').type('Animal sem moradia');
        cy.get('textarea').type('Moradia');
        cy.get('[placeholder="Valor em reais"]').type(200);

        //POST 200/incidents
        cy.route('POST', '**/incidents').as('newIncident');

        
        cy.get('.button').click(); 

        cy.wait('@newIncident').then((xhr) => {
            expect(xhr.status).to.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body).has.not.null;
     
        })


    })

    it('devem poder excluir um casos', () => {
        cy.createNewIncident();
        cy.login();

        cy.route('DELETE', '**/incidents/*').as('deleteIncident');


        cy.get('li > button > svg').click();

        cy.wait('@deleteIncident').then((xhr) => {
           expect(xhr.status).to.eq(204);
           expect(xhr.response.body).to.be.empty;


        })






    })



});


//c859213e