import * as cards from "./cards.service";

const services = {
    createCard: cards.createCard, 
    deleteCard: cards.deleteCard, 
    getAllCard: cards.getAllCard, 
    getCard: cards.getCard
}

export default services;