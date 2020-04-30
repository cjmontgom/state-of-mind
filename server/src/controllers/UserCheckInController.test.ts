import { UserCheckInController } from './UserCheckInController';
import { Request, Response } from 'express';
import {Feeling, InMemoryStore, UserCheckIn} from "../store/InMemoryStore";

import { expect } from 'chai';
import 'mocha';

describe('UserCheckInController', () => {

    const store = new InMemoryStore();
    const controller = new UserCheckInController(store);
    const mockUserCheckIn: UserCheckIn = {
        mood: 5,
        feeling: Feeling.Content,
        comment: "Feeling pretty good"
    };
    const mockRequest: Partial<Request> = {
        query: { request: 'Post', body: JSON.stringify(mockUserCheckIn) }
    };

    it('should have a create function for storing user check in\'s', () => {
        const response = controller.create(mockRequest);
        expect(response.responseText).to.equal("Successfully stored check in.");
    });
});