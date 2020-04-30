import { UserCheckInController } from './UserCheckInController';
import { Request, Response } from 'express';
import {Feeling, InMemoryStore, UserCheckIn} from "../store/InMemoryStore";

import { expect } from 'chai';
import 'mocha';
import before = Mocha.before;

// mock response for get
// Response = {
//     json: {checkIns: [usercheckins]},
//     statusCode: 200,
//     statusMessage: res.responseText
// }

describe('UserCheckInController', () => {

    const store = new InMemoryStore();
    const controller = new UserCheckInController(store);

    const mockRequestBuilder = (mockUserCheckIn: any): Partial<Request> => {
        return {query: { request: 'Post', body: JSON.stringify(mockUserCheckIn) }}
    };

    it('should return a success response if the user check in data is as expected', async () => {
        const mockUserCheckIn: UserCheckIn = {
            mood: 5,
            feeling: Feeling.Content,
            comment: "Feeling pretty good"
        };
        const mockRequest = mockRequestBuilder(mockUserCheckIn);
        const response = await controller.create(mockRequest);
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal("Successfully stored check in.");
    });

    it('should return an error if the user check in is not the expected shape', async () => {
        const mockIncorrectUserCheckIn = {
            feeling: "random text",
            comment: "this is bad data"
        };
        const response = await controller.create(mockRequestBuilder(mockIncorrectUserCheckIn));
        expect(response.statusCode).to.equal(401);
        expect(response.statusMessage).to.equal("The data was unexpected. The check in was not stored.");
    })
    
});