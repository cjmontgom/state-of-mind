import {UserCheckInController} from './UserCheckInController';
import {InMemoryStore, ResponseFromStore} from "../store/InMemoryStore";
import {expect} from 'chai';
import 'mocha';
import {Feelings, UserCheckIn} from "../shared/types";


describe('UserCheckInController', () => {

    const store = new InMemoryStore();
    const controller = new UserCheckInController(store);

    beforeEach(function() {
        store.delete()
    });

    describe('Post a user check in', () => {

        it('should return a 200 success response if the user check in data is as expected', async () => {
            const mockUserCheckIn: UserCheckIn = {
                mood: 5,
                feeling: [Feelings.Content],
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
                feeling: [Feelings.Content],
                comment: "Feeling pretty good"
            };
            const mockBadStore = {
                create: function (): Promise<ResponseFromStore> {
                    throw new Error('some error')
                },
                read: function (): Promise<ResponseFromStore> {
                    throw new Error('some other error')
                },
                delete: function() {}
            };
            const mockBadController = new UserCheckInController(mockBadStore);

            const response = await mockBadController.create(mockUserCheckIn);

            expect(response.statusCode).to.equal(500);
            expect(response.statusMessage).to.equal("Unexpected error occurred");
        })
    });

    describe('Get user check in\'s', () => {

        it('should return 200 and an array of check ins', async () => {
            const mockUserCheckIn: UserCheckIn = {
                mood: 4,
                feeling: [Feelings.Stressed],
                comment: "Feeling mildly stressed"
            };

            controller.create(mockUserCheckIn);
            controller.create(mockUserCheckIn);

            const { statusCode , json } = await controller.read();

            const expectedResult = JSON.stringify({
                averageMood: 4,
                totalNumberOfCheckIns: 2,
                allUserCheckIns: [
                {
                    mood: 4,
                    feeling: [Feelings.Stressed],
                    comment: 'Feeling mildly stressed'
                },
                {
                    mood: 4,
                    feeling: [Feelings.Stressed],
                    comment: 'Feeling mildly stressed'
                }
            ]});

            expect(statusCode).to.equal(200);
            expect(JSON.stringify(json)).to.equal(expectedResult)
        });

        it('should return a 500 error if something unexpected happens', async () => {
            const mockBadStore = {
                create: function (): Promise<ResponseFromStore> {
                    throw new Error('some error')
                },
                read: function (): Promise<ResponseFromStore> {
                    throw new Error('some other error')
                },
                delete: function() {}
            };
            const mockBadController = new UserCheckInController(mockBadStore);

            const response = await mockBadController.read();

            expect(response.statusCode).to.equal(500);
            expect(response.statusMessage).to.equal("Unexpected error occurred");
        })

    });

});