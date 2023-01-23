import db from "./connection"

export async function createCard(
    name: string,
    image_url: string,
    atk: number,
    def: number,
    description: string 
){
    try {
        const client = await db.connect();
    
        const sql = `
            INSERT INTO cards 
                (nome, image_url, atk, def, description)
            VALUES 
                ($1, $2, $3, $4, $5)
            RETURNING id;
        `;
        const { rows } = await client.query(sql, [name, image_url, atk, def, description]);
        const todos = rows;
    
        client.release();

        return {status: true, result: todos};
    } catch (err) {
        return {status: false, result: null};
    }
}

export async function getCardByID(id: number){
    try {
        const client = await db.connect();
    
        const sql = `
            SELECT * 
            FROM cards
            WHERE id=$1;
        `;
        const { rows } = await client.query(sql, [id]);
        const todos = rows;
    
        client.release();

        return {status: true, result: todos};
    } catch (err) {
        return {status: false, result: null};
    }
}

export async function getListCard(){
    try {
        const client = await db.connect();
    
        const sql = `
            SELECT * 
            FROM cards;
        `;
        const { rows } = await client.query(sql);
        const todos = rows;
    
        client.release();

        return {status: true, result: todos};
    } catch (err) {
        return {status: false, result: null};
    }
}

export async function removeCardByID(id: number){
    try {
        const client = await db.connect();
    
        const sql = `
            DELETE FROM cards 
            WHERE id=$1
            RETURNING id;
        `;
        const { rows } = await client.query(sql, [id]);
        const todos = rows;
    
        client.release();

        return {status: true, result: todos};
    } catch (err) {
        return {status: false, result: null};
    }
}