import { Request, Response, Router } from 'express';
let array: { id: number; name: string; age: number }[] = [];
const ex4Routes = Router();

ex4Routes.get('/numeral', (req: Request, res: Response) => {
    const { operacao, numero } = req.query;
    const response = {
        operacao,
        numero,
        resultado: 0,
    };

    if (operacao === 'anterior') {
        response.resultado = Number(numero) - 1;
    } else {
        response.resultado = Number(numero) + 1;
    }

    return res.status(200).json(response);
});

export default ex4Routes;
