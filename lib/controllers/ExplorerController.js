const ExplorerService = require("./../services/ExplorerServices");
const FizzBuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class ExplorerController{
    static filterExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersFiltered = ExplorerService.filterByMission(explorers,mission);
        return explorersFiltered;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNames = ExplorerService.getExplorersUserNamesByMission(explorers,mission);
        return explorersNames;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = ExplorerService.getExplorersAmountByMission(explorers,mission);
        return explorersAmount;
    }

    static applyValidationInNumber(number){
        let fizzBuzzword = FizzBuzzService.applyValidationInNumber(number);
        return fizzBuzzword;
    }

}


module.exports = ExplorerController;