enum CardinalDirections {
    North = 10, // 0
    East, // 11
    South, // 12
    West // 13
}

let currentDirection = CardinalDirections.South;

console.log(currentDirection);

// numeric enum fully initialized

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound);


// String Enum

enum CardinalDirectionsString {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
}

console.log(CardinalDirectionsString.North);