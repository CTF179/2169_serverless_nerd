var age = 30;
var firstName = "Mike";
var isStudent = true;
var numbers = [1, 2, 3];
var person = ["Mike", 30];
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 10] = "North";
    CardinalDirections[CardinalDirections["East"] = 11] = "East";
    CardinalDirections[CardinalDirections["South"] = 12] = "South";
    CardinalDirections[CardinalDirections["West"] = 13] = "West"; // 13
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.South;
console.log(currentDirection);
// numeric enum fully initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
// String Enum
var CardinalDirectionsString;
(function (CardinalDirectionsString) {
    CardinalDirectionsString["North"] = "North";
    CardinalDirectionsString["East"] = "East";
    CardinalDirectionsString["South"] = "South";
    CardinalDirectionsString["West"] = "West";
})(CardinalDirectionsString || (CardinalDirectionsString = {}));
console.log(CardinalDirectionsString.North);
