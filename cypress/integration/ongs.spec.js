/// <reference types="Cypress" />

import Logon from '../support/pages/Logon';
import Register from '../support/pages/Register';
import Profile from '../support/pages/Profile';
import NewIncident from '../support/pages/NewIncident';







describe('Ongs', () => {
    it('Devem pode realizar um cadastro', () => {
        Register.acessarCadastro();
        Register.preencherCadastro();
        Register.validarCadastroDeOngComSucesso();
    });

    it('Deve poder realizar um login no sistema', () => {
        Logon.acessarLogin();
        Logon.preencherLogin();
    });

    it('devem poder fazer logout', () => {
        cy.login();
        //cy.get('button').click();
        Profile.clicarNoBotaoLogout();

    });


    it('devem poder cadastrar novos casos', () => {
        cy.login()


        //cy.get('.button').click();
        Profile.clicarBotãocadastrarNovosCasos();
        // cy.get('[placeholder="Título do caso"]').type('Animal sem moradia');
        // cy.get('textarea').type('Moradia');
        // cy.get('[placeholder="Valor em reais"]').type(200);

        // //POST 200/incidents
        // cy.route('POST', '**/incidents').as('newIncident');


        // cy.get('.button').click();

        // cy.wait('@newIncident').then((xhr) => {
        //     expect(xhr.status).to.eq(200);
        //     expect(xhr.response.body).has.property('id');
        //     expect(xhr.response.body).has.not.null;

        // })
        NewIncident.preencherCadastroDeCasos();
        NewIncident.validarCadastroDeCasos();


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