import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get( '/heroes', (req: Request, res: Response) => {

    const query = `
        SELECT * 
        FROM heroes `;

    MySQL.executeQuery(query, (err:any, heroes:Object[])=>{
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });       
        } else {

            res.json({
                ok: true,
                heroes: heroes
            });
        }
    });

});



router.get( '/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id;
    const safe_id = MySQL.instance.connection.escape(id);

    const query = `
        SELECT * 
        FROM heroes 
        WHERE id = ${safe_id}`;

    MySQL.executeQuery(query, (err:any, heroe:Object[])=>{
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });       
        } else {

            res.json({
                ok: true,
                heroes: heroe[0]
            });
        }
    });

});




export default router;