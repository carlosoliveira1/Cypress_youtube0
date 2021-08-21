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
        Profile.clicarNoBotaoLogout();

    });


    it('devem poder cadastrar novos casos', () => {
        cy.login()

        Profile.clicarBotãocadastrarNovosCasos();

        NewIncident.preencherCadastroDeCasos();
        NewIncident.validarCadastroDeCasos();

    })

    it('devem poder excluir um casos', () => {
        cy.createNewIncident();
        cy.login();

        Profile.clicarNoBotaoExcluirUmcaso();
        Profile.validarxEclusaoDeUmcasoComSucesso();
    })



});


//c859213e