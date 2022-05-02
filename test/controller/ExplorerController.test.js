const ExplorersController = require("./../../lib/controllers/ExplorerController");

describe("Testing ExplorerController methods", () =>{
    test("1) Test filterExplorersByMission(mission) work properly", () => {
        const explorersInNode = ExplorersController.filterExplorersByMission("node");

        const firstExplorerInNode = {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        };
        expect(explorersInNode[0]).toEqual(firstExplorerInNode);
    });

    test("2) Test getExplorersUsernamesByMission(mission) work properly", () => {
        const explorersInNode = ExplorersController.getExplorersUsernamesByMission("node");
        expect(explorersInNode[0]).toBe("ajolonauta1");
    });

    test("3) Test getExplorersAmountByMission(mission) work properly", () => {
        const explorersInNode = ExplorersController.getExplorersAmountByMission("node");
        expect(explorersInNode).toBe(10);
    });

    test("4) Test FizzBuzz method expecting the correct string FIZZBUZZ", () => {
        const fizzBuzzWord = ExplorersController.applyValidationInNumber(15);
        expect(fizzBuzzWord).toBe("FIZZBUZZ");
    });

    test("5) Test FizzBuzz method expecting the correct string FIZZ", () => {
        const fizzBuzzWord = ExplorersController.applyValidationInNumber(3);
        expect(fizzBuzzWord).toBe("FIZZ");
    });

    test("6) Test FizzBuzz method expecting the correct string BUZZ", () => {
        const fizzBuzzWord = ExplorersController.applyValidationInNumber(10);
        expect(fizzBuzzWord).toBe("BUZZ");
    });
});