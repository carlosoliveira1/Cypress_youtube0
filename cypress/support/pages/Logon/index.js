

class Logon {
    acessarLogin(){
        cy.visit('http://localhost:3000');


    }

    preencherLogin(){
        cy.get('input').type(Cypress.env('createdOngId'));
        cy.get('.button').click();

    }

}

export default new Logon();