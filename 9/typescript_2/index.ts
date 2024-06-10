export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}


// export function add(x: number, y: number): number {
//     return x + y;
// }

// export function subtract(x: number, y: number): number {
//     return x - y;
// }


// function getFirstElement<T>(arr: T[]) {
//     return arr[0];
// }

// const el = getFirstElement(["harkiratSingh", "ramanSingh"]);
// console.log(el.toLowerCase())


// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })


// enum Direction {
//     Up = "UP",
//     Down = "Down",\\\
//     Left = "Left",
//     Right = 'Right'
// }

// function doSomething(keyPressed: Direction) {
// 	// do something.
// }

// doSomething(Direction.Down)