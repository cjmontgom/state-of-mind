import {Request, Response, Router} from "express";
import {UserCheckInController} from '../controllers/UserCheckInController';
import {InMemoryStore} from "../store/InMemoryStore";

const UserCheckInRouter = Router({
    strict: true
});

const store = new InMemoryStore();
const controller = new UserCheckInController(store);

UserCheckInRouter.post('/', async (req: Request, res: Response) => {
    await controller.create(req.body)
        .then(() => res.send())
});

UserCheckInRouter.get('/', async (req: Request, res: Response) => {
    await controller.read()
        .then((response: Partial<Response>) => res.send(response))
});

export default UserCheckInRouter;