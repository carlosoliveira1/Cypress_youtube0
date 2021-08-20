const el = require('./elements').ELEMENTS;

class Profile {
    clicarNoBotaoLogout(){
        cy.get(el.buttonLogout).click();

    }

}

export default new Profile();