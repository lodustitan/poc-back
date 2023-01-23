import services from "../services";
import { Request, Response } from "express";

export async function addCard(req: Request, res: Response){
    try {
        const { name, image_url, atk, def, description } = req.body;
        
        const query = await services.createCard(name, image_url, atk, def, description);

        return res.status(200).send(query);
    } catch (error) {
        console.error(error);
        return res.sendStatus(404);
    }
} 

export async function getCards(req: Request, res: Response){
    try {
        const { id } = req.params;
        let query;
        if(id && !isNaN(id as any)){
            const id_number = Number(id);
            query = await services.getCard(id_number);
        }else{
            query = await services.getAllCard();
        }
        return res.status(200).send(query);
    } catch (error) {
        console.error(error);
        return res.sendStatus(404);
    }
} 

export async function removeCard(req: Request, res: Response){
    try {
        const { id } = req.params;

        if(id && !isNaN(id as any)){
            const id_number = Number(id);
            const query = await services.deleteCard(id_number);    
            return res.status(200).send(query);
        }else{
            throw new Error(); 
        }
        
    } catch (error) {
        console.error(error);
        return res.sendStatus(404);
    }
}