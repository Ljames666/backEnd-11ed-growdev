import { Request, Response, Router } from 'express';
let array: string[] = [];
const ex6Routes = Router();

ex6Routes.get('/remover-vogais', (req: Request, res: Response) => {
    const valor = req.query.valor;
    const removeVogais = String(valor).replace(/[aeiouà-ú]/gi, '');
    array.push(removeVogais);

    return res.status(200).json({ word: valor, notVogal: removeVogais, array });
});

export default ex6Routes;
