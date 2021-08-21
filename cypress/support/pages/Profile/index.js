const el = require('./elements').ELEMENTS;

class Profile {
    clicarNoBotaoLogout(){
        cy.get(el.buttonLogout).click();

    }

    clicarBotãocadastrarNovosCasos(){
        cy.get(el.buttonNewIncident).click();

    }

}

export default new Profile();