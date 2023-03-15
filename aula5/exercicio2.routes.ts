import { Request, Response, Router } from 'express';
// let array: { id: number; name: string; age: number }[] = [];
const ex2Routes = Router();
// exemplos de rotas
// ex2Routes.get('/ex2', (req: Request, res: Response) => {
//     return res.status(200).json({ id: 1, message: 'deu bom' });
// });

// ex2Routes.post('/ex2', (req: Request, res: Response) => {
//     const { id, name, age }: { id: number; name: string; age: number } = req.body;
//     array.push({ id, name, age });
//     return res.status(200).json({ ok: true, message: 'deu bom' });
// });
// ex2Routes.get('/ex2/users', (req: Request, res: Response) => {
//     return res.status(200).send(array);
// });
// ------------------------------------------------
// exercicio

ex2Routes.get('/calculadora', (req: Request, res: Response) => {
    const operacao = req.query.operacao;
    const { valorA, valorB } = req.query;
    let result;
    switch (operacao) {
        case 'somar':
            result = Number(valorA) + Number(valorB);
            return res.status(200).json({ number1: valorA, number2: valorB, operacao, result });
        case 'subtrair':
            result = Number(valorA) - Number(valorB);
            return res.status(200).json({ number1: valorA, number2: valorB, operacao, result });
        case 'multiplicar':
            result = Number(valorA) * Number(valorB);
            return res.status(200).json({ number1: valorA, number2: valorB, operacao, result });
        case 'dividir':
            result = Number(valorA) / Number(valorB);
            return res.status(200).json({ number1: valorA, number2: valorB, operacao, result });

        default:
            return res.status(418).end();
    }
});
export default ex2Routes;
