import { Request, Response, Router } from 'express';
let array: { id: number; name: string; age: number }[] = [];
const ex3Routes = Router();
let contador = 0;

const increment = () => {
    contador++;
    if (contador === 10) {
        contador = 0;
        return 'Chegou à 10';
    }
    return contador;
};
ex3Routes.get('/ex3', (req: Request, res: Response) => {
    return res.status(200).json({ data: increment() });
});

export default ex3Routes;
