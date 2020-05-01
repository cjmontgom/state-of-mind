import {UserCheckInController} from './UserCheckInController';
import {Feeling, InMemoryStore, ResponseFromStore, UserCheckIn} from "../store/InMemoryStore";
import {expect} from 'chai';
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

    describe('Post a user check in', () => {

        it('should return a 200 success response if the user check in data is as expected', async () => {
            const mockUserCheckIn: UserCheckIn = {
                mood: 5,
                feeling: [Feeling.Content],
                comment: "Feeling pretty good"
            };
            const response = await controller.create(mockUserCheckIn);
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal("Successfully stored check in.");
        });

        it('should return a 401 error if the user check in data is invalid', async () => {
            const mockIncorrectUserCheckIn = {
                mood: undefined,
                feeling: [],
                comment: "Feeling pretty good"
            };
            const response = await controller.create(mockIncorrectUserCheckIn);
            expect(response.statusCode).to.equal(401);
            expect(response.statusMessage).to.equal("The data was unexpected. The check in was not stored.");
        });

        it('should return a 500 error if something unexpected happens', async () => {
            const mockUserCheckIn: UserCheckIn = {
                mood: 5,
                feeling: [Feeling.Content],
                comment: "Feeling pretty good"
            };
            const mockBadStore = {
                create: function (): Promise<ResponseFromStore> {
                    throw new Error('some error')
                },
                read: function (): Promise<ResponseFromStore> {
                    throw new Error('some other error')
                }
            };
            const mockBadController = new UserCheckInController(mockBadStore)
            const response = await mockBadController.create(mockUserCheckIn);
            expect(response.statusCode).to.equal(500);
            expect(response.statusMessage).to.equal("Unexpected error occurred");
        })
    });

    describe('Get user check in\'s', () => {

        it('should return 200 and an array of check in\'s', () => {
            
        });

    });

});