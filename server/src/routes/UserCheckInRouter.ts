import {Router} from "express";
import {UserCheckInController} from '../controllers/UserCheckInController';
import {InMemoryStore} from "../store/InMemoryStore";

const UserCheckInRouter = Router({
    strict: true
});

const store = new InMemoryStore();
const controller = new UserCheckInController(store);

UserCheckInRouter.post('/', async (req, res) => {
    await controller.create(req.body)
        .then(() => res.send())
});

UserCheckInRouter.get('/', async (req,res) => {
    await controller.read()
        .then((response) => res.send(response))
});

export default UserCheckInRouter;