import cards_repository from "../repositories";

export async function createCard(
    name: string, 
    image_url: string, 
    atk: number, 
    def: number, 
    description: string
) {
    try {

        const query = await cards_repository.createCard(name, image_url, atk, def, description);

        if(!query.status){
            throw new Error();
        }
    } catch (err) {
        console.error(err);
    }
}

export async function deleteCard(cardID: number) {
    try {
        const query = await cards_repository.removeCardByID(cardID);

        if(!query.status){
            throw new Error();
        }
    } catch (err) {
        console.error(err);
    }
}

export async function getCard(cardID: number) {
    try {
        const query = await cards_repository.getCardByID(cardID);

        if(!query.status){
            throw new Error();
        }
    } catch (err) {
        console.error(err);
    }
}

export async function getAllCard() {
    try {
        const query = await cards_repository.getListCard();

        if(!query.status){
            throw new Error();
        }
    } catch (err) {
        console.error(err);
    }
}
type CardObject = {
    name: string;
    image_url: string;
    atk: number; 
    def: number;
    description: string;
}