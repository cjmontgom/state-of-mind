import { UserCheckInController } from './UserCheckInController';
import { Request, Response } from 'express';
import { expect } from 'chai';
import 'mocha';

describe('UserCheckInController', () => {
    const controller = new UserCheckInController()

    const mockRequest = (): Partial<Request> => {
        return {
            query: { request: 'Post' }
        };
    };

    it('should have a create function for storing user check in\'s', () => {
        const result = controller.create(mockRequest());
    });
});