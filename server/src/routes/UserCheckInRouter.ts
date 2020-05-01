import {Router} from "express";
import {UserCheckInController} from '../controllers/UserCheckInController';
import {InMemoryStore} from "../store/InMemoryStore";

const UserCheckInRouter = Router({
    strict: true
});

const store = new InMemoryStore();
const controller = new UserCheckInController(store);

UserCheckInRouter.post('/', async (req, res) => {
    console.log('request from router .. ' + JSON.stringify(req.body))
    await controller.create(req.body)
        .then(() => res.send())
});

UserCheckInRouter.get('/', async (req, res) => {
    await controller.read(req)
        .then(() => res.json({message: 'Successful!'}))
});

export default UserCheckInRouter;