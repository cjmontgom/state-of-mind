import { UserCheckInController } from './UserCheckInController';
import { Request, Response } from 'express';
import {Feeling, InMemoryStore, UserCheckIn} from "../store/InMemoryStore";

import { expect } from 'chai';
import 'mocha';

// mock response for get
// Response = {
//     json: {checkIns: [usercheckins]},
//     statusCode: 200,
//     statusMessage: res.responseText
// }

describe('UserCheckInController', () => {

    const store = new InMemoryStore();
    const controller = new UserCheckInController(store);

    const mockRequest = (mockUserCheckIn: any): Partial<Request> => {
        return {query: { request: 'Post', body: JSON.stringify(mockUserCheckIn) }}
    };

    it('should have a create function for storing user check in\'s', async () => {
        const mockUserCheckIn: UserCheckIn = {
            mood: 5,
            feeling: Feeling.Content,
            comment: "Feeling pretty good"
        };
        const response = await controller.create(mockRequest(mockUserCheckIn));
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal("Successfully stored check in.");
    });

    it('should return an appropriate error message if the user check in is not the expected shape', async () => {
        const mockIncorrectUserCheckIn = {
            feeling: "random text",
            comment: "this is bad data"
        };
        const response = await controller.create(mockRequest(mockIncorrectUserCheckIn));
        expect(response.statusCode).to.equal(401);
        expect(response.statusMessage).to.equal("The data was unexpected. The check in was not stored.");
    })
});