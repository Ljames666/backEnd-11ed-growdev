import { Request, Response, Router } from 'express';
let array: { id: number; name: string; age: number }[] = [];
const ex5Routes = Router();

const inverteString = (str: string): string => {
    return str.split('').reverse().join('');
};

ex5Routes.get('/inverter-string', (req: Request, res: Response) => {
    const valor = req.query.valor;

    return res
        .status(200)
        .json({ original: valor, mundoInvertido: inverteString(valor as string) });
});

export default ex5Routes;
